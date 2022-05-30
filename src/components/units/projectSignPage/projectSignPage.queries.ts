import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
    mutation createProject($createProjectInput: CreateProjectInput!) {
        createProject(createProjectInput: $createProjectInput) {
            projectId
        }
    }
`;
export const UPDATE_PROJECT = gql`
    mutation updateProject($projectId: String!, $updateProjectInput: UpdateProjectInput!) {
        updateProject(projectId: $projectId, updateProjectInput: $updateProjectInput) {
            projectId
        }
    }
`;

export const UPLOAD_FILE = gql`
    mutation projectImageUpload($file: Upload!) {
        projectImageUpload(file: $file)
    }
`;

// 프로젝트 조회
export const FETCH_PROJECT = gql`
    query fetchProject($projectId: String!) {
        fetchProject(projectId: $projectId) {
            projectId
            projectName
            projectIntro
            projectDetailIntro
            projectImageURL
            startDate
            endDate
            status
            projectColor
            createAt
            address {
                projectAddressId
                address
                detailAddress
            }
        }
    }
`;
