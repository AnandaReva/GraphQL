export const typeDefs = `#graphql
    type Book {
        id: ID
        title: String!
        author: String!
        year: Int!
        genre: [String!]! # The list field cannot be null, and its elements cannot be null
        #Relationship: every book can has reviews 
        reviews: [Review!] # The list field can be null if there are no reviews

    } 

    type Review {
        id: ID!
        rating: Int! 
        content: String!
        # relationship  every review has game and auhtor
        book: Book! 
        user: User!
    }

    type User {
        id: ID!
        name: String!
        verified: Boolean!
        #Relationship: every User can has reviews
        reviews: [Review!]

    }

    type Query {
        reviews: [Review]   #all reviews
        review(id: ID): Review #single review 
        
        books: [Book]
        book(id: ID): Book

        users: [User]
        user(id: ID): User
    }


    type Mutation {
        addBook(book: AddBookInput!): Book
        deleteBook(id: ID!) : [Book]
        updateBook(id: ID!, edits:EditBookInput!): Book  
    }
    input AddBookInput{
        title: String!
        author: String!
        year: Int!
        genre: [String!]!   
    }
    input EditBookInput{
        title: String
        author: String
        year: Int
        genre: [String!]   
    }
`


// int, float, string, boolean, ID 