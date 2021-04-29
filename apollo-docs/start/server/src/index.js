require("dotenv").config()

const { ApolloServer } = require("apollo-server")
const schema = require("./schema")

const server = new ApolloServer({ typeDefs: schema })

server.listen().then(() => console.log(`servering running @ http://localhost:4000`))