# 🔐 Angular Firebase Auth System

Aplicación desarrollada en **Angular 16** que implementa un sistema completo de autenticación usando **Firebase Authentication**.

Permite:

- Registro de usuarios  
- Inicio de sesión  
- Recuperación de contraseña  
- Verificación por correo electrónico  
- Protección de rutas  
- Cierre de sesión  
- Manejo de errores Firebase  
- Estados de carga (loading)  

---

## ⚙️ Requisitos del sistema

Antes de ejecutar el proyecto asegúrate de tener instalado:

- 📦 **Node.js:** `v18+` *(preferiblemente v18.10.0)*
- 📦 **npm:** `v9+`
- 🅰️ **Angular CLI:** `v16.x`
- 🔥 **Cuenta Firebase**

---

## 🔍 Verificar versiones

```bash
node -v
npm -v
ng version
```

---

## 🚀 Instalación

### 1️⃣ Clonar repositorio

```bash
git clone <URL_DEL_REPO>

cd angular-firebase-auth-system
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

## 🔥 Configurar Firebase

Editar o crear:

```bash
src/app/environments/environments.ts
```

Agregar configuración:

```ts
export const environment = {
  production: false,
  firebase: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  }
};
```

Obtén los datos desde:

Firebase Console → Project Settings → SDK setup

---

## ▶️ Ejecutar proyecto

```bash
ng serve
```

Abrir en navegador:

```bash
http://localhost:4200
```

---

## 🧠 Arquitectura del proyecto

### 📦 Components

```bash
components/
├── login/
├── register/
├── password-recover/
├── verify-email/
├── dashboard/
├── shared-loading/
```

---

### ⚙️ Services

```bash
services/
├── firebase-code-error.service.ts
```

Responsable de traducir errores Firebase:

```txt
auth/user-not-found → El usuario no existe
```

---

### 🔐 Authentication Flow

```txt
Registro
 ↓
Verificación Email
 ↓
Login
 ↓
Dashboard protegido
 ↓
Logout
```

---

## ⚙️ Funcionalidades principales

✔ Registro de usuarios  
✔ Login de usuarios  
✔ Logout  
✔ Recuperación de contraseña  
✔ Verificación de email  
✔ Dashboard protegido  
✔ Manejo de errores Firebase  
✔ Loading spinner  
✔ Formularios reactivos  
✔ Validaciones Angular  
✔ Notificaciones con Toastr  

---

## 🛠 Tecnologías utilizadas

- 🅰️ Angular 16  
- 🔥 Firebase Authentication  
- ⚡ TypeScript  
- 🧾 Reactive Forms  
- 🔔 ngx-toastr  
- 🌐 Angular Router  
- ☁ AngularFire  

---

## 📁 Estructura del proyecto

```bash
src/app/

components/
├── dashboard
├── login
├── register
├── password-recover
├── verify-email

services/
├── firebase-code-error.service

utils/
├── firebase-code-error.ts

shared-loading/
├── shared-loading.component
```

---

## 🔥 Buenas prácticas implementadas

- Separación de componentes  
- Servicios reutilizables  
- Manejo centralizado de errores  
- Reactive Forms  
- Validaciones frontend  
- Environment variables  
- Loading states  
- Routing protegido  
- Código desacoplado  

---

## 📄 Licencia

Proyecto desarrollado con fines educativos y para portafolio.
