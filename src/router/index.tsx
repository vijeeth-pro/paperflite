import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../pages"
import Collection from "../components/collection"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"

function WebRouter() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/video" element={<Collection />} />
          <Route path="/document" element={<Collection />} />
          <Route path="/image" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default WebRouter