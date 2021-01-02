import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <div>
      <h1>Our Services</h1>
      <p>Hello, on this page we give you details of the services we offer</p>
      <p>Stuff, things and more thingymebobs </p>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default Services
