import { gql } from "@apollo/client";

export const PROJECT_FILE_UPLOAD = gql`
    mutation projectFileUpload($file: Upload!) {
        projectFileUpload(file: $file)
    }
`;

export const PROJECT_FILE_DELETE = gql`
    mutation deleteProjectFile($projectFileId: String!) {
        deleteProjectFile(projectFileId: $projectFileId)
    }
`;

export const PROJECT_FILE_FETCH = gql`
    query fetchProjectFile($projectFileId: String!) {
        fetchProjectFile(projectFileId: $projectFileId)
    }
`;

export const PROJECT_FILES_FETCH = gql`
    query fetchProjectFiles($projectId: String!) {
        fetchProjectFiles(projectId: $projectId) {
            projectFileId
            filename
            fileURL
        }
    }
`;

export const CREATE_PROJECT_FILE = gql`
    mutation createProjectFile($filename: String!, $fileURL: String!, $projectId: String!) {
        createProjectFile(filename: $filename, fileURL: $fileURL, projectId: $projectId) {
            projectFileId
        }
    }
`;
