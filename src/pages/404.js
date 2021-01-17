import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { pageAnimation } from "../animations/animations"

const NotFoundPage = () => (
  <>
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </motion.div>
  </>
)

export default NotFoundPage
