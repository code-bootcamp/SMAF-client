import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
    mutation createProject($createProjectInput: CreateProjectInput!){
        createProject(createProjectInput:$createProjectInput){
            projectId
        }
    }
`
export const FETCH_LOGIN_USER = gql`
    query fetchLoginUser{
        fetchLoginUser{   
            userName
            email
        }
    }
`