import '../styles/globals.css'
import DarkMode from '../components/darkMode/darkMode'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  <DarkMode/>
  </>
  )
}
