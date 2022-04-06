// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCFn4TaaAgoEChzdesNKbJTJMJ0qN1jSac',
  authDomain: 'weatharo.firebaseapp.com',
  projectId: 'weatharo',
  storageBucket: 'weatharo.appspot.com',
  messagingSenderId: '512581522498',
  appId: '1:512581522498:web:74274e5e0ddc2554ca49db',
  measurementId: 'G-88XZ1CRRPY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
