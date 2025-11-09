/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
