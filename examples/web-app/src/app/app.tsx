import * as firebase from 'firebase/app';
import { DefaultBrouserPropramFactory } from '@arthurgubaidullin/default-browser-program';
import { useEffect } from 'react';

const firebaseApp = firebase.initializeApp({
  projectId: import.meta.env.VITE_PROJECT_ID,
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
});

const program = DefaultBrouserPropramFactory.default(firebaseApp);

export function App() {
  useEffect(() => {
    return program.start();
  }, []);

  return <div>test</div>;
}

export default App;
