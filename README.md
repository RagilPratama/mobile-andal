# Andal App 📱

Andal mobile application built dengan **Expo** dan **React Native**, menggunakan **modular architecture** untuk scalability dan maintainability yang optimal.

## 📁 Project Architecture

### **Folder Structure Overview**

```
andal/
├── app/                          ← Entry point & routing (Expo Router)
│   ├── index.tsx                 ← Home screen
│   └── _layout.tsx               ← Root layout & navigation setup
│
├── modules/                      ← Feature modules (scalable structure)
│   ├── home/                     ← Home feature module
│   │   ├── components/           ← UI components specific untuk home
│   │   ├── controllers/          ← Business logic & state management
│   │   ├── models/               ← Data models & interfaces
│   │   └── services/             ← API calls & external services
│   │
│   └── template/                 ← Reusable module template
│
├── shared/                       ← Shared resources across modules
│   ├── components/               ← Global UI components (Button, Input, dll)
│   ├── constant/                 ← Constants & static values
│   ├── store/                    ← Global state management (Zustand/Redux)
│   ├── types/                    ← TypeScript types & interfaces
│   └── utils/                    ← Utility functions & helpers
│
├── assets/                       ← Static files
│   ├── fonts/                    ← Custom fonts
│   ├── icons/                    ← Icon assets
│   ├── images/                   ← Image assets
│   └── styles/                   ← Global styles
│
└── [Config files]                ← babel, metro, tailwind, tsconfig, dll

```

---

## 🏗️ Architecture Pattern Explanation

### **Modular Architecture (Feature-Based)**

Setiap feature (seperti `home`, `products`, `cart`) adalah **independent module** yang memiliki struktur sendiri:

```
modules/home/
├── components/        ← UI components untuk home feature saja
├── controllers/       ← Custom hooks & business logic
├── models/           ← TypeScript interfaces & types
└── services/         ← API integration & data fetching
```

### **Layer Explanation**

| Layer | Purpose | Example |
|-------|---------|---------|
| **Components** | UI elements yang dapat di-reuse dalam module | ProductCard, ProductGrid |
| **Controllers** | Business logic & state (custom hooks) | useProductList, useFilters |
| **Models** | TypeScript interfaces & types | Product, CartItem, User |
| **Services** | API calls & external data integration | fetchProducts(), filterByCategory() |
| **Shared** | Global components, types, constants | Button, TextField, API_BASE_URL |

---

## 🎯 Data Flow (Unidirectional)

```
UI Screen
    ↓
Controllers (useHook) ← State Management
    ↓
Services (API Calls)
    ↓
Models (Typed Data)
    ↓
Components (Render)
```

---

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Start Development

```bash
npx expo start
```

Choose your platform:

- Press `i` for iOS simulator
- Press `a` for Android emulator
- Press `w` for web
- Scan QR code dengan Expo Go app

## 🛠️ Tech Stack

- **Framework**: React Native dengan Expo
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind CSS)
- **Routing**: Expo Router (file-based)
- **State Management**: Zustand / Redux
- **Build Tools**: Metro Bundler

---

## 📝 Naming Conventions

- **Files**: lowercase dengan hyphen (`user-profile.tsx`, `auth-service.ts`)
- **Components**: PascalCase (`UserCard.tsx`, `ProductGrid.tsx`)
- **Folders**: lowercase (`components/`, `services/`, `controllers/`)
- **Hooks**: camelCase dengan `use` prefix (`useProducts`, `useAuth`)

---

## 🎓 Best Practices

✅ Keep components **presentational** (UI only)  
✅ Move logic ke **controllers** (custom hooks)  
✅ Use **TypeScript** untuk type safety  
✅ Place **shared resources** di `shared/` folder  
✅ Keep **modules independent** - minimal cross-module dependencies  
✅ Use **constants** untuk hardcoded values  

Happy coding! 🚀
# Andal
# Andal
