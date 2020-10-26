import {gql} from '@apollo/client';

export const NEWS1 = gql`
query {
  newsfeeds{
    id,
    newsTitle,
    newsDescription,
    thumbnail{url},
    likesCounter,
    isFavourite,
    isLiked
  }
}
`;