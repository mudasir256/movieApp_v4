import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initializeApp } from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { HomeStackRoutes } from "../../app/navigation/routes";


const firebaseConfig = {
  apiKey: "AIzaSyC72QT2wPweAtymWMkUsCeK2z0_I1Usf6M",
  authDomain: "fir-eec48.firebaseapp.com",
  projectId: "fir-eec48",
  storageBucket: "fir-eec48.appspot.com",
  messagingSenderId: "522297255818",
  appId: "1:522297255818:web:5c8b1cdcff3229f8c50a73",
  measurementId: "G-0279Q44FMF",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
interface AuthPayload {
  email: string;
  password: string;
  authState: AuthState;
  user: any; 
  loading: boolean;
  error: string | null;
}
export enum AuthState {
  Authenticated = 'Authenticated',
  Unauthenticated = 'Unauthenticated',
}
interface UserState {
  authState: AuthState; 
  user: any;
  loading: boolean;
  error: any;
}

export const signUpUser = createAsyncThunk(
  'firebase/signUpUser',
  async ({ email, password }: AuthPayload, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('first', userCredential)
      return userCredential.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'firebase/loginUser',
  async ({ email, password }: AuthPayload, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User UID:', userCredential.user.uid);
      return userCredential.user.uid; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const initialState: UserState = {
  authState: AuthState.Unauthenticated,
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;