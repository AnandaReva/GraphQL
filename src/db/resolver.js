import db from './graphqqlDB.js'

const resolvers = {
    Query: {
        books() {
            return db.books
        },
        users() {
            return db.users
        },
        reviews() {
            return db.reviews
        },
        book(_, args) {
            return db.books.find((book) => book.id === args.id)
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id)
        },
        user(_, args) {
            return db.users.find((user) => user.id === args.id)
        }
    },

    Book: {
        reviews(parent) {
            return db.reviews.filter((r) => r.book_id === parent.book_id)
        }
    },

    Review: {
        user(parent) {
            return db.users.find((a) => a.id === parent.user_id)
        },
        book(parent) {
            return db.books.find((b) => b.id === parent.book_id)
        }
    },
    User: {
        reviews(parent) {
            return db.reviews.filter((r) => r.user_id === parent.id)
        }
    },

    Mutation: {
        addBook(_, args) {
            let book = { // create new game object
                ...args.book, // three dot mean spreading
                id: Math.floor(Math.random() * 10000).toString() // generate :id
            }
            db.books.push(book)
            return book
        },
        updateBook(_, args) {
            db.books = db.books.map((b) => {
                if (b.id === args.id) {
                    return { ...b, ...args.edits }
                }
                // if dont much any data just return back 

                return b
            })
            return db.books.find((b) => b.id === args.id)
        },
        deleteBook(_, args) {
            db.books = db.books.filter((b) => b.id !== args.id)
            return db.books
        }
    }
}


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




export default resolvers;