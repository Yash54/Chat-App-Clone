import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBSLJXlNygD-cqTaqZo1tRiG3JNme4DI2s",
  authDomain: "chat-app-ca5ce.firebaseapp.com",
  projectId: "chat-app-ca5ce",
  storageBucket: "chat-app-ca5ce.appspot.com",
  messagingSenderId: "151653181498",
  appId: "1:151653181498:web:bc584ffba3952c6c4aad03"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase;