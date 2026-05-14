// Firebase compat configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeHpQQWkDlmBaOrzc1XIvzLPGuxIfqD2M",
  authDomain: "cielito-lindo-50c3f.firebaseapp.com",
  projectId: "cielito-lindo-50c3f",
  storageBucket: "cielito-lindo-50c3f.appspot.com",
  messagingSenderId: "591671052455",
  appId: "1:591671052455:web:4bc22a201034d5e5ce7382"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
