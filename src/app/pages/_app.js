// pages/_app.js ou _app.tsx
import { useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../styles/globals.css';
import dotenv from 'dotenv';

dotenv.config();


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    emailjs.init({
      publicKey: process.env.EMAILJS_PUBLIC_KEY, // Chave pública
      blockHeadless: true, // Bloquear navegadores headless
      blockList: {
        list: ['foo@emailjs.com', 'bar@emailjs.com'], // Lista de e-mails bloqueados
        watchVariable: 'userEmail',
      },
      limitRate: {
        id: 'app',
        throttle: 10000, // Limite de 1 requisição a cada 10 segundos
      },
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
