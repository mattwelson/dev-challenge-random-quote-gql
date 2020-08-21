import React from "react"
import { useQuery } from "@apollo/client"
import { Link } from "@reach/router"
import { MdSync } from "react-icons/md"

import { GET_RANDOM_QUOTE } from "./RandomQuote"
import Button from "./styles/Button"

const RandomQuote = () => {
  const { refetch } = useQuery(GET_RANDOM_QUOTE)

  return (
    <Link to='/'>
      <Button onClick={() => refetch()}>
        random <MdSync />
      </Button>
    </Link>
  )
}

export default RandomQuote
