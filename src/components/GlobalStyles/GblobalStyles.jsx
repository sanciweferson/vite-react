import React from "react"
import { Global, css } from "@emotion/react"

const globalStyles = css`
  * {
    font-family: "Montserrat", sans-serif;
  }
`

const GlobalStyles = () => {
  return <Global styles={globalStyles} />
}

export default GlobalStyles
