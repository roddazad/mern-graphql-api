const typeDefs = `#graphql
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
}
type Book {
    bookId: Int
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}
type Auth {
    token: String
    user: User
}
type Query {
    me: [User]
}
type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String], description: String, title: String, bookId: Int, image: String, Link:String): User
    removeBook(bookId: Int): User
}

`;
module.exports = typeDefs;
