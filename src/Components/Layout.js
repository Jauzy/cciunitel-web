import React from 'react'

import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = props => {
  const { children, style } = props

  let theme = createMuiTheme({
    palette: {
      type: 'dark',
      background: {
        default: '#0B1622',
        paper: '#151F2E'
      }
    },
  });
  theme = responsiveFontSizes(theme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main style={style}>
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout