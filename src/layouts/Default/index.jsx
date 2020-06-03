import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import GlobalStyle from '@layouts/global'
import Header from '@templates/Header'
import Footer from '@templates/Footer'

import theme from '@layouts/theme'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
