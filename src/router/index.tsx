import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"

function WebRouter() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default WebRouter