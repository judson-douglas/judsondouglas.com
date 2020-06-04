/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from "react"

import { ThemeProvider } from "theme-ui"

import { AuthProvider } from "react-use-auth"
import { navigate } from "gatsby"
export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="judsondouglas.auth0.com"
    auth0_client_id="EAzfZGViXFO6sEKwHIuFjUY84j1lWR5r"
  >
    {element}
  </AuthProvider>
)
/*import React from "react";
import { navigate } from "gatsby";
 
import { AuthProvider } from "react-use-auth";
 
export const wrapRootElement = ({ element }) => (
    <AuthProvider
        navigate={navigate}
        auth0_domain="useauth.auth0.com"
        auth0_client_id="GjWNFNOHq1ino7lQNJBwEywa1aYtbIzh"
    >
        {element}
    </AuthProvider>
);*/
