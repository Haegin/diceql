'use strict'

const gql = x => x[0]

const Router = require('koa-router')
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa')
const { GraphQLScalarType } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')

const router = new Router()

const Roller = require('../roller')

const schema = makeExecutableSchema({
  pretty: true,
  debug: process.env.NODE_ENV !== 'production',
  typeDefs: gql`
    type Query {
      roll(desc: String): Roll
    }

    type Roll {
      results: [Int]
      count: Int
      size: Int
      max: Int
      min: Int
    }
  `,
  resolvers: {
    Query: {
      roll(obj, args) {
        return Roller(args.desc)
      },
    },
  },
})

router
  .post('/graphql', graphqlKoa({ schema }))
  .get('/graphql', graphqlKoa({ schema }))
  .get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))

module.exports = router
