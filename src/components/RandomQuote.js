import React from "react"
import { useQuery, gql } from "@apollo/client"

export const GET_RANDOM_QUOTE = gql`
  query GET_RANDOM_QUOTE {
    random {
      author
      text
    }
  }
`

const RandomQuote = () => {
  const { loading, error, data, refetch } = useQuery(GET_RANDOM_QUOTE)

  if (loading) return <div>...Loading</div>
  if (error) return <div>ERROR :(</div>

  return (
    <div>
      <div>{data.random.text}</div>
      <div>{data.random.author}</div>
      <button onClick={() => refetch()}>REFETCH</button>
    </div>
  )
}

export default RandomQuote
