import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Heading, Button } from "rebass"
import { useAuth } from "react-use-auth"

const IndexPage = () => {
  const { isAuthenticated, user, login } = useAuth()

  return (
    <Layout>
      <SEO title="Judson's landing page" />
      <Heading fontSize={[5, 6, 7]}>This is the heading.</Heading>
      <p>Gonna be a landing page.</p>
      {isAuthenticated() ? <p> hello {user.nickname} </p> : null}
      {
        <Button bg="highlight" onClick={login}>
          Get Started
        </Button>
      }
    </Layout>
  )
}

export default IndexPage
