# Billshare

A modern, mobile-first expense sharing app built with React Native (Expo) and TypeScript.

## ✨ Features

- **User Authentication**: Sign in with mobile number or Google account
- **Add Expense**: Add expenses with description, amount, and date
- **User Selection**: Pick users from your contacts to split expenses
- **Bill Splitting**: Split by equal, percentage, or exact amounts (with AI-powered rounding)
- **Settlement Summary**: See who owes whom and how much
- **Transaction History**: View all past transactions and details
- **Groups**: Organize expenses by groups (e.g., trips, roommates)
- **Modern UI**: Clean, dark-themed design inspired by Figma
- **Mobile-First**: Responsive, touch-friendly, and accessible

## 🛠️ Tech Stack

- [React Native](https://reactnative.dev/) (Expo)
- TypeScript
- Expo Router (navigation)
- Expo Contacts (user selection)
- Expo Google Fonts (PT Sans)
- AsyncStorage, SecureStore

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/siefer2005/billshare.git
   cd billshare
   ```
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the Expo app**
   ```bash
   npx expo start
   ```
4. **Run on your device**
   - Use the Expo Go app (iOS/Android) or an emulator/simulator

## 📁 Project Structure

```
Billshare/
  app/                # App screens and navigation
  components/         # Reusable UI components
  assets/             # Fonts and images
  constants/          # Theme and color constants
  hooks/              # Custom hooks
  ...
```

## 🖌️ Design
- Inspired by modern Figma UI (see `/app/(tabs)/index.tsx` for the home screen replica)
- Uses PT Sans for all typography
- Consistent dark theme across all screens

## 🤝 Contributing

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📄 License

MIT

---

> Made with ❤️ using React Native and Expo
