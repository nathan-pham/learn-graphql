const { gql } = require("apollo-server")

module.exports = gql`
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
`