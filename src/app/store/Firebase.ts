
import { initializeApp } from "@firebase/app";
import auth from "@react-native-firebase/auth";

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

export { auth };
export default app;