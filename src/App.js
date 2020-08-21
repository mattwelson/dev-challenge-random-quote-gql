import React from "react"
import { Router } from "@reach/router"

import RandomQuote from "./components/RandomQuote"
import AuthorQuotes from "./components/AuthorQuotes"
import RandomButton from "./components/RandomButton"

const App = () => (
  <div className='content'>
    <header>
      <RandomButton />
    </header>
    <Router>
      <RandomQuote path='/' />
      <AuthorQuotes path='/a/:name' />
    </Router>
    <footer>
      <a href='https://twitter.com/mattwelson'>@mattwelson</a>
    </footer>
  </div>
)

export default App
