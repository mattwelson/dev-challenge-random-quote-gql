import React from "react"
import { useQuery, gql } from "@apollo/client"
import { Link } from "@reach/router"
import { MdArrowForward } from "react-icons/md"

import Button from "./styles/Button"
import Quote from "./styles/Quote"

export const GET_RANDOM_QUOTE = gql`
  query GET_RANDOM_QUOTE {
    random {
      author
      text
    }
  }
`

const RandomQuote = () => {
  const { loading, error, data } = useQuery(GET_RANDOM_QUOTE)

  if (loading) return <div>...Loading</div>
  if (error) return <div>ERROR :(</div>

  return (
    <>
      <Quote>"{data.random.text}"</Quote>
      <Link to={`/a/${data.random.author}`}>
        <Button className='wide'>
          <h3>{data.random.author}</h3>
          <MdArrowForward className='show-on-hover' />
        </Button>
      </Link>
    </>
  )
}

export default RandomQuote
