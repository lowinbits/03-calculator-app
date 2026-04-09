# Calculator App

A mobile calculator application built with React Native and Expo as part of a hands-on React Native course. This project focuses on core concepts such as component architecture, custom theming, global stylesheets, and file-based routing with Expo Router.

---

## Tech Stack

| Technology | Version |
| --- | --- |
| React Native | 0.81.5 |
| React | 19.1.0 |
| Expo | ~54.0.33 |
| Expo Router | ~6.0.23 |
| TypeScript | ~5.9.2 |
| expo-font | ~14.0.11 |

---

## Features

- Dark theme UI with a custom color palette
- Custom font loading (SpaceMono) via `expo-font`
- Global stylesheet with centralized layout and typography styles
- File-based routing with Expo Router
- New React Native Architecture enabled (`newArchEnabled: true`)
- Portrait-only orientation
- Cross-platform: iOS, Android, and Web

---

## Project Structure

```text
calculator-app/
├── app/
│   ├── _layout.tsx        # Root layout — font loading, global background, StatusBar
│   └── index.tsx          # Main calculator screen
├── assets/
│   ├── fonts/
│   │   └── SpaceMono-Regular.ttf
│   └── images/
├── constants/
│   └── theme.ts           # Color palette and font definitions
├── styles/
│   └── global-styles.ts   # Global StyleSheet (background, container, result text)
├── app.json               # Expo configuration
├── tsconfig.json          # TypeScript configuration (strict mode + path aliases)
└── package.json
```

---

## Color Palette

Defined in `constants/theme.ts`:

| Token | Value | Usage |
| --- | --- | --- |
| `background` | `#000000` | App background |
| `darkGray` | `#2D2D2D` | Button backgrounds |
| `lightGray` | `#9B9B9B` | Secondary buttons |
| `orange` | `#FF9427` | Operator buttons |
| `textPrimary` | `white` | Main result text |
| `textSecondary` | `#666666` | Sub-result text |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [Expo Go](https://expo.dev/go) app installed on your device, or an Android/iOS emulator

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd calculator-app

# Install dependencies
npm install
```

### Running the app

```bash
# Start the Expo development server
npm start

# Run directly on a platform
npm run android
npm run ios
npm run web
```

Scan the QR code with Expo Go (Android) or the Camera app (iOS) to open the app on your device.

---

## Available Scripts

| Script | Description |
| --- | --- |
| `npm start` | Start the Expo development server |
| `npm run android` | Open on Android emulator or device |
| `npm run ios` | Open on iOS simulator or device |
| `npm run web` | Open in the browser |
| `npm run lint` | Run ESLint |

---

## Path Aliases

The project uses `@/` as a root-level path alias, configured in `tsconfig.json`:

```ts
import { globalStyles } from '@/styles/global-styles'
import { Colors } from '@/constants/theme'
```

---

## Learning Goals

This project is part of a React Native course and covers the following concepts:

- Setting up a project with Expo and Expo Router
- Building a custom dark theme with a centralized color palette
- Creating and consuming a global StyleSheet
- Loading and applying custom fonts with `expo-font`
- Structuring a React Native app with a clean folder layout
- Using file-based routing with `Slot` and `_layout.tsx`

---

## License

This project is intended for educational purposes only.
