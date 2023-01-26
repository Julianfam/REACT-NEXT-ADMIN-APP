import MainLayout from '@layout/MainLayout';
import '@styles/tailwind.css';
import { Main } from 'next/document';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
