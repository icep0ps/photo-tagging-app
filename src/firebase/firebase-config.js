import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAjECw1vgnADOej8kHQdnLcXMEWmlc-iSs',
  authDomain: 'photo-tagging-app-492dc.firebaseapp.com',
  projectId: 'photo-tagging-app-492dc',
  storageBucket: 'photo-tagging-app-492dc.appspot.com',
  messagingSenderId: '943575969998',
  appId: '1:943575969998:web:7bf4963e596075564a609f',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
