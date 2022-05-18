import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
    mutation userImageUpload($file: Upload!) {
        userImageUpload(file: $file)
    }
`;
