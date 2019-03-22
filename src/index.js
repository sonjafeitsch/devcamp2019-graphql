const { GraphQLServer } = require('graphql-yoga');


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