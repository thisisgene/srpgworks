import Layout from "../components/layout/Layout"
import "../styles/globals.css"
import { AnimateSharedLayout } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout exitBeforeEnter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  )
}

export default MyApp
