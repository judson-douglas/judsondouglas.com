/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"

import { ThemeProvider } from "theme-ui"
import { AuthProvider } from "react-use-auth"
import { navigate } from "gatsby"

// You can delete this file if you're not using it

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="judsondouglas.auth0.com"
    auth0_client_id="EAzfZGViXFO6sEKwHIuFjUY84j1lWR5r"
  >
    {element}
  </AuthProvider>
)
