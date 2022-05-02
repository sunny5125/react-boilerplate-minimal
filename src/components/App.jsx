import React from 'react'
import 'assets/scss/App.scss'
import LandingPage from 'components/LandingPage'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
