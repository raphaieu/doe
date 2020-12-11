const { ApolloServer } = require('apollo-server');
const pool = require('./database');

pool.then(conn => {
    conn.query("SELECT * FROM donations", (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        console.log(fields);
    });    
})

const typeDefs = `
    type Donations {
        id: Int
        value: Float
        description: String
    }
    type Query {
        donations: [Donations]
    }
`;

const donations = [];

const resolvers = {
    Query: {
        async donations() {
            donations = await connection.query("SELECT * FROM donations");
            return donations;
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen();