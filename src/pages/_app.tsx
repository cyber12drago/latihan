import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Component {...pageProps} />
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3XC7PBC5Q6" />
    <Script src="/gats.js" />
    </>
    )
}
