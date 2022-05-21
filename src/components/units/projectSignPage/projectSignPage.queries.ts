import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
    mutation createProject($createProjectInput: CreateProjectInput!){
        createProject(createProjectInput:$createProjectInput){
            projectId
        }
    }
`
export const FETCH_USER = gql`
    query fetchUser($userId:String!){
        fetchUser(userId:$userId){
            
            userName
            email
        }
    }
`