<h1 align="center">🔐 Angular Firebase Auth</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-16-DD0031?logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/Firebase-Authentication-FFCA28?logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/AngularFire-Integration-FFCA28?logo=firebase&logoColor=black" alt="AngularFire" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Completed" />
</p>

<p align="center">
  <a href="https://github.com/alobuuls/angular-firebase-auth" target="_blank"><img src="https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white" alt="Repository" /></a>
  <a href="https://github.com/alobuuls/angular-firebase-auth/stargazers" target="_blank"><img src="https://img.shields.io/github/stars/alobuuls/angular-firebase-auth?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/alobuuls/angular-firebase-auth/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/alobuuls/angular-firebase-auth" alt="Last Commit" /></a>
</p>

---

## 📑 Table of Contents

* [🔐 Angular Firebase Auth](#-angular-firebase-auth)

  * [🌐 Live Demo](#-live-demo)
  * [📖 Description](#-description)
  * [⚙️ System Requirements](#️-system-requirements)
  * [🚀 Project Installation](#-project-installation)
  * [🔥 Firebase Configuration](#-firebase-configuration)
  * [▶️ Run the Project](#️-run-the-project)
  * [🧠 Project Architecture](#-project-architecture)
  * [✨ Features](#-features)
  * [🛠 Technologies Used](#-technologies-used)
  * [📁 Project Structure](#-project-structure)
  * [🔥 Best Practices Implemented](#-best-practices-implemented)
  * [🎯 Project Goal](#-project-goal)
  * [📄 License](#-license)

---

## 🌐 Live Demo

🔗 https://alobuuls.github.io/angular-firebase-auth/

---

## 📖 Description

> [!NOTE]
> An Angular 16 application that implements a complete authentication workflow using Firebase Authentication and AngularFire.

The project demonstrates user registration, login, password recovery, email verification, protected areas, centralized Firebase error handling, loading states, and modern Angular development practices.

---

## ⚙️ System Requirements

Before running the project, make sure you have installed:

- 📦 **Node.js:** `v16.14.x – v18.x` *(recommended: v18.10.0 LTS)*
- 📦 **npm:** `v8+`
- 🅰️ **Angular CLI:** `v16.x`
- 🔥 **Firebase Project**

## Recommended using nvm

```bash
nvm install 18
nvm use 18
```

---

## 🔍 Verify Installed Versions

Run the following commands in your terminal:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Project Installation

### 1️⃣ Clone the repository

```bash
git clone git@github.com:alobuuls/angular-firebase-auth.git

cd angular-firebase-auth
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## 🔥 Firebase Configuration

Create or update:

```ts
src/app/environments/environments.ts
```

Add your Firebase configuration:

```ts
export const environment = {
  production: false,
  firebase: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
  },
};
```

Enable the following provider:

* Email / Password Authentication

From:

```text
Firebase Console
→ Authentication
→ Sign-in method
```

---

## ▶️ Run the Project

Start the development server:

```bash
ng serve
```

Then open:

```text
http://localhost:4200
```

---

## 🧠 Project Architecture

The application follows a component-based architecture with centralized Firebase error management and authentication workflows.

### 🔥 Authentication Components

Responsible for:

* User registration
* User login
* Password recovery
* Email verification
* User interaction flows

### ⚙️ Firebase Error Service

Responsible for:

* Firebase error translation
* Error message centralization
* User-friendly notifications

### ⏳ Shared Loading Component

Responsible for:

* Loading state visualization
* Reusable spinner implementation
* User feedback during requests

### 🏠 Dashboard Component

Responsible for:

* Authenticated user area
* Protected content
* Session management

---

## ✨ Features

* 🔑 User Login
* 📝 User Registration
* 📧 Email Verification
* 🔄 Password Recovery
* 🚪 Logout Functionality
* 🔥 Firebase Authentication Integration
* ⚙️ Firebase Error Handling
* ⏳ Loading States
* 📋 Reactive Forms
* ✅ Angular Form Validations
* 🔔 Toastr Notifications
* 🚀 AngularFire Integration

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| Angular 16 | Front-End Framework |
| TypeScript | Application Logic |
| Firebase Authentication | User Authentication |
| AngularFire | Firebase Integration |
| Reactive Forms | Form Management |
| Angular Router | Navigation |
| ngx-toastr | Notifications |
| RxJS | Reactive Programming |

---

## 📁 Project Structure

```text
angular-firebase-auth/

├── src/
│
├── app/
│   ├── components/
│   │   ├── login/
│   │   ├── register/
│   │   ├── password-recover/
│   │   ├── verify-email/
│   │   └── dashboard/
│   │
│   ├── services/
│   │   └── firebase-code-error.service.ts
│   │
│   ├── shared-loading/
│   │   ├── shared-loading.component.ts
│   │   └── shared-loading.component.html
│   │
│   ├── utils/
│   │   └── firebase-code-error.ts
│   │
│   ├── environments/
│   │   ├── environments.ts
│   │   └── environments.prod.ts
│   │
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
│
├── firebase.json
├── angular.json
├── package.json
└── README.md
```

---

## 🔥 Best Practices Implemented

* Reactive Forms
* Separation of Concerns
* Centralized Error Handling
* Reusable Components
* Service-based Architecture
* Environment Configuration
* Loading State Management
* Strong Typing with TypeScript
* Modular Project Structure
* Firebase Integration Best Practices

---

## 🎯 Project Goal

Practice and strengthen Angular authentication concepts through the implementation of a real-world Firebase Authentication workflow.

Key concepts covered:

* Firebase Authentication
* AngularFire
* Reactive Forms
* Password Recovery
* Email Verification
* Error Handling
* Loading States
* Notifications
* TypeScript Best Practices
* Front-End Architecture

---

## 📄 License

This project is intended for educational and portfolio purposes.

Created by **Alondra Francisco**.
