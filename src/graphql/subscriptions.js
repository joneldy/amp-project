/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
