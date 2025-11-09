/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      owner
      username
      email
      bio
      profilePicture
      createdAt
      updatedAt
      posts {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        username
        email
        bio
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      owner
      title
      content
      imageUrl
      userID
      likes
      createdAt
      updatedAt
      user {
        id
        owner
        username
        email
        bio
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      comments {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        title
        content
        imageUrl
        userID
        likes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postsByUser = /* GraphQL */ `
  query PostsByUser(
    $userID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUser(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        title
        content
        imageUrl
        userID
        likes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      commenterID
      owner
      content
      createdAt
      updatedAt
      commenter {
        id
        owner
        username
        email
        bio
        profilePicture
        createdAt
        updatedAt
        __typename
      }
      post {
        id
        owner
        title
        content
        imageUrl
        userID
        likes
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        commenterID
        owner
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const commentsByPost = /* GraphQL */ `
  query CommentsByPost(
    $postID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPost(
      postID: $postID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        commenterID
        owner
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const commentsByCommenter = /* GraphQL */ `
  query CommentsByCommenter(
    $commenterID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByCommenter(
      commenterID: $commenterID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        commenterID
        owner
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
