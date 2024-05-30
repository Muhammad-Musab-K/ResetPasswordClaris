import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResetPassword from './view/ResetPassword'
import Successfully from './view/Successfull'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<ResetPassword />} /> */}
          <Route path="/reset-successfully" element={<Successfully />} />
          <Route path="/forgot-password/:role/:authToken" element={<ResetPassword />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
