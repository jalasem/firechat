import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyClYO-hxj6ifYMFIEbsHQ5Tr8sxJvjj9sQ",
  authDomain: "fireplay-cv.firebaseapp.com",
  databaseURL: "https://fireplay-cv.firebaseio.com",
  storageBucket: "fireplay-cv.appspot.com",
  projectId: "fireplay-cv",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref("firechat");
export const auth = firebase.auth();
