const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
    type Query {
        info: String!
        feed: [Link!]!
    }

    type Link {
        id: ID!,
        description: String!,
        url: String!
    }
`

const links = [{
    id: 'link-0',
    url: 'www.example.com',
    description: 'Awesome webpage'
}]


const resolvers = {
    Query: {
        info: () => 'This is an API',
        feed: () => links
    },
    Link: {
        id: (parent) => parent.id,
        url: (parent) => parent.url,
        description: (parent) => parent.description 
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(() => console.log("Server is running at http://localhost:4000"))