# Billshare

*A next-generation, mobile-first app for hassle-free expense sharing, built with React Native (Expo) and TypeScript.*

## ✨ Features

- **User Authentication:** Secure sign-in via mobile number (OTP) or Google account.
- **Smart Expense Addition:** Add expenses with descriptions, amounts, and optional attachments (like receipts).
- **Flexible User Selection:** Pick contacts from your address book or enter them manually; supports searching and multi-select.
- **Advanced Bill Splitting:** Split equally, by percentage, or precise amounts — with AI-powered suggestions and rounding for fairness.
- **Clear Settlement Summary:** Instantly see who owes whom and how much, with settlement links or reminders.
- **Comprehensive Transaction History:** Browse, search, and filter all past expenses and settlements, grouped by date or user.
- **Group Organization:** Create and manage groups (e.g., trips, roommates) for seamless expense tracking.
- **Modern, Accessible UI:** Consistent dark-themed design inspired by Figma, with large touch targets and screen reader support.
- **Mobile-Optimized:** Snappy performance, smooth animations, responsive across device sizes, and offline-friendly.

## 🛠️ Tech Stack

| Technology           | Description                                    |
|----------------------|------------------------------------------------|
| React Native (Expo)  | Cross-platform app development                 |
| TypeScript           | Strongly-typed JavaScript for reliability      |
| Expo Router          | Clean, scalable navigation structure           |
| Expo Contacts        | Native contact picker integration              |
| Expo Google Fonts    | PT Sans typography for legibility              |
| AsyncStorage         | Local persistent state                         |
| SecureStore          | Encrypted secure data storage                  |
| Expo Notifications   | Push notifications (optional)                  |
| Figma                | UI prototyping & asset handoff                 |

## 🚀 Getting Started

1. **Clone the Repository**
   ```sh
   git clone https://github.com/siefer2005/billshare.git
   cd billshare
   ```

2. **Install Dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the App**
   - Start the development server:
     ```sh
     npx expo start
     ```
   - Scan the QR code with Expo Go (iOS/Android) or run in your simulator/emulator.

## 📁 Project Structure

| Folder         | Purpose                                    |
|----------------|--------------------------------------------|
| `app/`         | Screens, navigation config                 |
| `components/`  | Reusable UI elements                       |
| `assets/`      | Images, font files, icons                  |
| `constants/`   | Theme, color, and style definitions        |
| `hooks/`       | Custom React hooks                         |
| `utils/`       | Shared helper functions/utilities          |
| `services/`    | API integrations and back-end logic        |

## 🖌️ Design

- **Visual Identity:** Modern, minimal UI based on a custom Figma design, visually distinct from similar apps.
- **Typography:** PT Sans font family for all text.
- **Color Theme:** Consistent, accessible dark mode with vibrant accent colors.
- **UI Components:** Neumorphic cards, rounded action buttons, animated charts.
- **Accessibility:** High contrast, support for large fonts, labeled UI elements.

## 🧩 Key Screens

- **Home:** Quick overview of balances, upcoming repayments, and groups.
- **Add Expense:** Streamlined multi-step form with category selection.
- **Group Details:** Group balances, member activity, and total expenses.
- **History:** Filtering and search across all previous expenses and settlements.
- **Profile:** Manage your account, notification preferences, and linked payment methods.

## 🙌 Contributing

- **Fork** the repo
- **Create a branch:**  
  ```sh
  git checkout -b feature/YourFeature
  ```
- **Commit changes:**  
  ```sh
  git commit -am 'Add new feature'
  ```
- **Push:**  
  ```sh
  git push origin feature/YourFeature
  ```
- **Open a Pull Request** and describe your change

Please read the `CONTRIBUTING.md` for guidelines and code standards.

## 📄 License

MIT

### Made with ❤️ using React Native, Expo, and a passion for better bill-splitting.

**Bonus Ideas to Enhance Your README:**

- Add badges (build passing, license, downloads, coverage, etc.).
- Include screenshots or GIFs of the app in action.
- Link to your Figma file or design system guide.
- List planned features, roadmap, or a changelog.
- Acknowledge contributors and third-party libraries.
