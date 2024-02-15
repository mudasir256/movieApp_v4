import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/app/store/store";
import { RootNavigator } from "./src/app/navigation/RootNavigator";
import { initializeApp } from 'firebase/app'; 

const firebaseConfig = {
  apiKey: "AIzaSyC72QT2wPweAtymWMkUsCeK2z0_I1Usf6M",
  authDomain: "fir-eec48.firebaseapp.com",
  projectId: "fir-eec48",
  storageBucket: "fir-eec48.appspot.com",
  messagingSenderId: "522297255818",
  appId: "1:522297255818:web:5c8b1cdcff3229f8c50a73",
  measurementId: "G-0279Q44FMF",
};

initializeApp(firebaseConfig);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <RootNavigator />
    </Provider>
  );
};

export default App;
