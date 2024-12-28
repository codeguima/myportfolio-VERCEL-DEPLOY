// pages/_app.js ou _app.tsx
import { useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../styles/globals.css';
import dotenv from 'dotenv';

dotenv.config();


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    emailjs.init({
      publicKey: process.env.EMAILJS_PUBLIC_KEY, 
      blockHeadless: true, 
      blockList: {
        list: ['foo@emailjs.com', 'bar@emailjs.com'],
        watchVariable: 'userEmail',
      },
      limitRate: {
        id: 'app',
        throttle: 10000, 
      },
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
