import gql from 'graphql-tag';
import apolloClient from './apollo-client';


export function getSearchData(query) {
    return apolloClient.query({
        query: gql`
        query {
            search(type: ISSUE, first: 10, query: "${query}") {
                nodes {
                    ... on Issue {
                        id
                        author {
                            login
                        }
                        createdAt
                        url
                        title
                    }
                }
                issueCount
            }    
        }`,
    });
}