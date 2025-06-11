# React Native StarterKit with Multiple Environments

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## 🚀 Getting Started

> **Note**: Ensure you’ve completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

---

## 📦 Multi-Environment Support

This project supports **multiple environments**:

- `.env.development`
- `.env.uat`
- `.env.production`

### Tools Used

- ✅ `react-native-config` for managing `.env` files
- ✅ Android Product Flavors
- ✅ iOS Xcode Schemes
- ✅ Dynamic App Names per environment

### How It Works

1. Create `.env` files:
   ```sh
   .env.development
   .env.uat
   .env.production


   ```
2. Use the correct environment file when building or running the app.

---

## 🚚 Fastlane & Firebase App Distribution

### Fastlane

[Fastlane](https://fastlane.tools/) automates building, signing, and distributing your app. It streamlines deployment for both Android and iOS, reducing manual steps and errors.

- Automated build and release pipelines
- Code signing management
- Customizable lanes for different environments

### Firebase App Distribution

[Firebase App Distribution](https://firebase.google.com/products/app-distribution) lets you quickly distribute pre-release versions to testers.

- Seamless integration with Fastlane
- Easy tester management and feedback collection
- Supports both Android and iOS

**Tip:** Use Fastlane to upload builds directly to Firebase App Distribution for efficient testing workflows.
