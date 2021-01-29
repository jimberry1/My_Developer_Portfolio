import React from "react"
import { Link } from "gatsby"
import Skills from "../components/Skills/skills"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SkillsPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to the skills page</p>
    <Skills />
  </Layout>
)
export default SkillsPage
