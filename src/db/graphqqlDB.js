// Data for books
let books = [
    { id: '1', title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: ["Fiction", "Drama"] },
    { id: '2', title: "1984", author: "George Orwell", year: 1949, genre: ["Dystopian", "Political"] },
    { id: '3', title: "Moby Dick", author: "Herman Melville", year: 1851, genre: ["Adventure", "Fiction"] },
    { id: '4', title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: ["Romance", "Classic"] },
    { id: '5', title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: ["Fiction", "Classic"] },
    { id: '6', title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: ["Fiction", "Classic"] },
    { id: '7', title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: ["Dystopian", "Science Fiction"] },
    { id: '8', title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, genre: ["Romance", "Gothic"] },
    { id: '9', title: "Wuthering Heights", author: "Emily Brontë", year: 1847, genre: ["Romance", "Gothic"] },
    { id: '10', title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genre: ["Fantasy", "Adventure"] }
];


// Data for users
let users = [
    { id: '1', name: "Harper Lee", verified: true },
    { id: '2', name: "George Orwell", verified: true },
    { id: '3', name: "Herman Melville", verified: true },
    { id: '4', name: "Jane Austen", verified: true },
    { id: '5', name: "F. Scott Fitzgerald", verified: true },
    { id: '6', name: "J.D. Salinger", verified: true },
    { id: '7', name: "Aldous Huxley", verified: true },
    { id: '8', name: "Charlotte Brontë", verified: true },
    { id: '9', name: "Emily Brontë", verified: true },
    { id: '10', name: "J.R.R. Tolkien", verified: true }
];
// Data for reviews
let reviews = [
    { id: '1', book_id: '1', user_id: '1', rating: 5, content: "A masterpiece of modern literature." },
    { id: '2', book_id: '2', user_id: '1', rating: 4, content: "A chilling vision of the future." },
    { id: '3', book_id: '1', user_id: '2', rating: 3, content: "A bit long but worth the read." },
    { id: '4', book_id: '3', user_id: '3', rating: 5, content: "A beautiful love story with depth." },
    { id: '5', book_id: '4', user_id: '4', rating: 4, content: "A poignant reflection on the American Dream." },
    { id: '6', book_id: '5', user_id: '4', rating: 4, content: "An engaging and introspective novel." },
    { id: '7', book_id: '6', user_id: '5', rating: 4, content: "A provocative exploration of society." },
    { id: '8', book_id: '7', user_id: '6', rating: 5, content: "A timeless classic with strong themes." },
    { id: '9', book_id: '8', user_id: '7', rating: 4, content: "A dark and compelling read." },
    { id: '10', book_id: '9', user_id: '8', rating: 5, content: "An adventurous tale that captivates." },
    { id: '10', book_id: '10', user_id: '9', rating: 5, content: "Superb." }
];


export default { books, reviews, users }