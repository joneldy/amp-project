# Elastik - Social Media Application

A full-stack React application for social media interactions, built with AWS Amplify, GraphQL, and React.

## Project Overview

Elastik is a social media platform where users can create posts, leave comments, and interact with other users. The application uses:
- **Frontend**: React 19 with Create React App
- **Backend**: AWS Amplify with AppSync (GraphQL API)
- **Database**: DynamoDB
- **Authentication**: AWS Cognito

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- AWS Account (for backend deployment)
- AWS Amplify CLI (optional, for backend management)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-elastik-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   Or with yarn:
   ```bash
   yarn install
   ```

3. **Configure AWS (if needed)**
   - The project comes with pre-configured AWS settings in `src/aws-exports.js`
   - If you need to update the backend, ensure your AWS credentials are configured:
     ```bash
     aws configure
     amplify configure
     ```

4. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

### Verify Setup
- The app should load without errors
- You should see the default Create React App page
- Cognito authentication is integrated and ready to use

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Documentation

For more detailed development guidance, see [CLAUDE.md](./CLAUDE.md) which includes:
- Project architecture and data models
- AWS Amplify Gen 1 configuration
- GraphQL schema and directives
- Common development tasks

### Additional Resources

- [React Documentation](https://reactjs.org/)
- [Create React App Docs](https://facebook.github.io/create-react-app/docs/getting-started)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [AWS AppSync Documentation](https://docs.aws.amazon.com/appsync/)
- [GraphQL Documentation](https://graphql.org/)
