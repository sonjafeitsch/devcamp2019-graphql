const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
    type Query {
        info: String!
        bla: String!
    }
`

const resolvers = {
    Query: {
        info: () => "Huhu",
        bla: () => "Bla"
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(() => console.log("Server is running at http://localhost:3000"))