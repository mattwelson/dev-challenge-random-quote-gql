import React from "react"
import ReactDOM from "react-dom"
import { MockedProvider } from "@apollo/client/testing"

import RandomQuote, { GET_RANDOM_QUOTE } from "./RandomQuote"

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
      <RandomQuote />
    </MockedProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
