## About

💡 feedget - App to send feedbacks.

---

## Features

- [x] Create a feedback
- [x] Dashboard with all created feedbacks
- [x] Light/Dark Theme
---

## How it works

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/) and Expo app (if using mobile version) [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) or [iOS](https://apps.apple.com/app/expo-go/id982107779). 

Create an account and configure this external service if you want to use a fake mail:

- [Mailtrap](https://mailtrap.io/)


#### Running the server (Backend)

```bash

# Clone this repository
$ git clone repository_app_backend

# Access the project folder in your terminal
$ cd feedget-nwl-return-impulse/server

# Install the dependencies
$ npm install

# In project root rename .env.local.example to .env.local
# Change the variable values according to the instructions in .env.local.example

# Run the application in development mode
$ npm run dev

```

---

#### Running the web application (Frontend)

```bash

# Clone this repository
$ git clone repository_app_web

# Access the project folder in your terminal
$ cd feedget-nwl-return-impulse/web

# Install the dependencies
$ npm install

# In project root rename .env.local.example to .env.local
# Change the variable values according to the instructions in .env.local.example

# Run the application in development mode
$ npm run dev

# The app will open on the port: 3000 - go to http://localhost:3000/

```

---

#### Running the mobile app

```bash

# Clone this repository
$ git clone repository_app_mobile

# Access the project folder in your terminal
$ cd feedget-nwl-return-impulse/mobile

# Install the dependencies
$ npm install

# Install the expo cli
$ npx expo start # Comment explication: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421

# Run the application in development mode
$ npm run start

# Run the application in development mode
$ expo upgrade 49

```

---

## Tech Stack

The following tools were used in the construction of the project:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

- **[Headlessui](https://headlessui.dev/)**
- **[Axios](https://axios-http.com/)**
- **[html2canvas](https://html2canvas.hertzen.com/)**
- **[Mailtrap](https://mailtrap.io/)**
- **[PhosphorIcons](https://phosphoricons.com/)**
- **[Vite](https://vitejs.dev/)**
- **[Tailwindcss](https://tailwindcss.com/)**

#### **Server**  ([Nodejs](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

- **[Prisma](https://www.prisma.io/)**
- **[Nodemailer](https://nodemailer.com/about/)**
- **[Expressjs](https://expressjs.com/pt-br/)**

#### **Mobile**  ([React Native](https://reactnative.dev/)  +  [TypeScript](https://www.typescriptlang.org/))

- **[Expo](https://expo.dev/)**
- **[phosphor-react](https://phosphoricons.com/)**
- **[Axios](https://axios-http.com/)**

---

## License

This project is under the license [MIT](./LICENSE).

---
