const { ApolloServer, gql } = require("apollo-server-lambda")
import axios from "axios"
//const _ = require('lodash')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    quotePage(page: Int = 1, limit: Int = 100): QuotePage
    author(name: String = "", page: Int = 1, limit: Int = 100): QuotePage
    random: Quote
  }

  type Quote {
    id: ID
    text: String
    author: String
  }

  type QuotePage {
    author: String
    page: Int!
    totalPages: Int!
    quotes: [Quote]!
  }
`

const fetchQuotes = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: { Accept: "application/json" },
    })
    const quoteResult = response.data

    return {
      page: parseInt(quoteResult.currentPage, 10),
      totalPages: quoteResult.totalPages,
      quotes: quoteResult.quotes.map(
        ({ quoteText: text, quoteAuthor: author, _id: id }) => ({
          text,
          author,
          id,
        })
      ),
    }
  } catch (e) {
    console.error(e)
  }
}

const random = async () => {
  try {
    const url = "https://quote-garden.herokuapp.com/api/v2/quotes/random"

    const response = await axios.get(url, {
      headers: { Accept: "application/json" },
    })
    const quoteResult = response.data

    return {
      author: quoteResult.quote.quoteAuthor,
      text: quoteResult.quote.quoteText,
      id: quoteResult.quote._id,
    }
  } catch (e) {
    console.error(e)
  }
}

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    quotePage: async (_root, { page, limit }) =>
      await fetchQuotes(
        `https://quote-garden.herokuapp.com/api/v2/quotes?page=${page}&limit=${limit}`
      ),

    author: async (_root, { page, limit, name }) => ({
      ...(await fetchQuotes(
        `https://quote-garden.herokuapp.com/api/v2/authors/${name}?page=${page}&limit=${limit}`
      )),
      author: name,
    }),
    random,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()
