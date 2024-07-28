import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import resolvers from "./src/db/resolver.js"
//types
import { typeDefs } from "./src/db/schema.js";

 
/* 
 query BookQuery($id: ID!) {
    book(id: $is){
    title,
    year,
    genre
        reviews(
            rating,
            content
        )
    }
} */


const server = new ApolloServer({
    typeDefs,
    resolvers
})


const port = 3000;
const { url } = await startStandaloneServer(server, {
    listen: { port }
})

//http://localhost:3000/
console.log(`Server running at http://localhost:${port}/`);