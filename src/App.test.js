import React from "react"
import ReactDOM from "react-dom"
import { MockedProvider } from "@apollo/client/testing"

import { GET_RANDOM_QUOTE } from "./components/RandomQuote"
import App from "./App"

const mocks = [
  {
    request: {
      query: GET_RANDOM_QUOTE,
    },
    result: {
      data: {
        random: { text: "Text, test", author: "Test Author" },
      },
    },
  },
]

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
