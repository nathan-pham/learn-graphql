const { gql } = require("apollo-server")

module.exports = gql`
# objects that exist in data graph
type User {
    id: ID!
    email: String!
    token: String
    trips: [Launch]!
} 

type Launch {
    id: ID!
    site: String
    rocket: Rocket
    mission: Mission
    isBooked: Boolean!
}

type Rocket {
    id: ID!
    name: String
    type: String    
}

type Mission {
    type: String
    missionPatch(size: PatchSize): String
}

enum PatchSize {
    SMALL
    LARGE
}

# fetching data
type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    me: User
}

# mutating data
type Mutation {
    bookTrips(id: [ID]!): TripUpdateResponse!
    cancelTrip(id: ID!): TripUpdateResponse!
    login(email: String): User
}

type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
}
`