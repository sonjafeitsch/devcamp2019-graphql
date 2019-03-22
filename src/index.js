const { GraphQLServer } = require('graphql-yoga');


const links = [{
    id: 'link-0',
    url: 'www.example.com',
    description: 'Awesome webpage'
}]

let idCount = links.length;
const resolvers = {
    Query: {
        info: () => 'This is an API',
        feed: () => links,
        link: (parent, args) => {
            console.log(args)
            var filteredLinks = links.filter(a => {
                return a.id === args.id
            })
            console.log(filteredLinks)
            return filteredLinks;
        }
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount}`,
                url: args.url,
                description: args.description
            }
            links.push(link)
            return link
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
})
server.start(() => console.log("Server is running at http://localhost:4000"))