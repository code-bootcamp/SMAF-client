import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
    mutation restoreAccessToken {
        restoreAccessToken
    }
`;

export async function getAccessToken() {
    try {
        const graphQLClient = new GraphQLClient("https://backend.smaf.shop/graphql", {
            credentials: "include",
        });
        const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
        const newAccessToken = result.restoreAccessToken;
        console.log("new result", result);
        console.log("뉴에세스토큰", newAccessToken);

        return newAccessToken;
    } catch (error: any) {
        console.log((error instanceof Error).message);
    }
}

// axios로 하는 방법
// axios.post("http://backend06.codebootcamp.co.kr/graphql",{
//     query:`
//     mutation restoreAccessToken {
//         restoreAccessToken {
//           accessToken
//         }
//       }
//     `
// })
