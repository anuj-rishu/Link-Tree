# Link Tree Backend

Welcome to the Link Tree Backend project! This project is designed to handle backend operations for the Link Tree application, including sending emails when users fill out the contact form. We use Nodemailer for sending emails, and the code is deploy-ready for platforms like Vercel.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Gmail App Password Setup](#gmail-app-password-setup)
- [Deployment](#deployment)
- [Usage](#usage)
- [Contributing](#contributing)


## Introduction

Link Tree Backend is designed to handle the backend functionalities of the Link Tree application, including sending emails through a contact form using Nodemailer.

## Features

- Handle backend operations for the Link Tree application.
- Send emails when users fill out the contact form.
- Deploy-ready for platforms like Vercel and others.

## Technologies Used

- Node.js
- Express.js
- Nodemailer

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
    \`\`\`bash
    git clone https://github.com/anuj-rishu/Link-Tree.git
    cd Backend
    \`\`\`

2. Install the dependencies:
    \`\`\`bash
    npm install
    \`\`\`
    or
    \`\`\`bash
    yarn install
    \`\`\`

### Gmail App Password Setup

To send emails using Nodemailer, you need to set up an app password for your Gmail account.

1. Go to your [Google Account](https://myaccount.google.com/).

2. Navigate to **Security**.

3. Under **Signing in to Google**, select **App passwords**. You may need to sign in again.

4. In the **Select app** dropdown, choose **Other (Custom name)** and enter a name (e.g., Link Tree Backend).

5. Click **Generate**.

6. Copy the generated app password. You'll use this in your \`.env\` file.

7. Create a \`.env\` file in the root of your project directory and add your email credentials and server port:
    \`\`\`bash
    touch .env
    \`\`\`

8. Open the \`.env\` file and add the following lines:
    \`\`\`env
    EMAIL=your_email@gmail.com
    PASSWORD=your_generated_app_password
    PORT=8000
    \`\`\`

## Deployment

To deploy your Link Tree Backend application, follow these steps:

1. Push your code to a GitHub repository.

2. Choose a deployment platform (e.g., Vercel, Heroku).

3. Follow the platform-specific instructions to deploy your Node.js application. For Vercel:
    - Sign up for a [Vercel account](https://vercel.com/).
    - Connect your GitHub repository to Vercel.
    - Set up your environment variables (\`EMAIL\`, \`PASSWORD\`, \`PORT\`) in the Vercel dashboard.
    - Deploy your application.

## Usage

To start the development server, run:
\`\`\`bash
npm start
\`\`\`
or
\`\`\`bash
yarn start
\`\`\`

This will start the server on \`http://localhost:8000\`.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature-branch\`).
3. Make your changes.
4. Commit your changes (\`git commit -m 'Add some feature'\`).
5. Push to the branch (\`git push origin feature-branch\`).
6. Open a Pull Request.

