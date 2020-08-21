import React from "react"
import { useQuery, gql } from "@apollo/client"

import Quote from "./styles/Quote"

export const GET_AUTHOR_QUOTE = gql`
  query GET_AUTHOR_QUOTE($name: String) {
    author(name: $name) {
      quotes {
        text
        id
      }
    }
  }
`

const RandomQuote = ({ name }) => {
  const { loading, error, data } = useQuery(GET_AUTHOR_QUOTE, {
    variables: {
      name,
    },
  })

  return (
    <div>
      <h2>{name}</h2>
      {loading && <div>...Loading</div>}
      {error && <div>Error :(</div>}
      {data &&
        data.author.quotes.map((q) => <Quote key={q.id}>"{q.text}"</Quote>)}
    </div>
  )
}

export default RandomQuote
