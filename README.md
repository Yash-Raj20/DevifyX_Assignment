# 🚀 Virtualized List Demo – DevifyX Assignment

A high-performance React.js application that displays and manages **10,000+ list items** efficiently using **virtualization (`react-window`)** and **`React.memo`**. It includes search, sorting, multi-select, bulk actions, theme toggle, and a fully responsive layout.

---

## 📸 Demo Preview

> 📷 _Screenshots
### Light Mode
![Light View](public/Screenshot%202025-06-16%20205050.png)

### Dark Mode
![Dark View](public/Screenshot%202025-06-16%20205222.png)

---

## ✅ Features

### Core Features

- ⚡ **Virtualized Rendering**  
  Only visible items are rendered using `react-window` for ultra-smooth performance, even with thousands of items.

- 📱 **Responsive UI**  
  Layout works perfectly across mobile, tablet, and desktop devices.

- 🔍 **Search Functionality**  
  Real-time, case-insensitive filtering by title.

- ↕️ **Sorting Options**  
  Easily sort list items by `Title` or `Date`.

- 🧾 **Custom List Item Layout**  
  Each item includes:
  - ✅ Checkbox
  - 🖼️ Avatar
  - 🧩 Title + Subtitle
  - 📝 Description
  - 🕒 Status + Date (aligned top-right)

- ☑️ **Multi-Select with Checkbox**  
  Select one or many items from the list easily.

- 🗑️ **Bulk Delete**  
  Instantly delete all selected items with a single click and confirmation.

- 🚫 **Empty State Handling**  
  Friendly UI feedback when no data is available or when search yields no results.

---

### Bonus Features

- 🌗 **Dark/Light Mode Toggle**  
  Toggle between dark and light themes using a clean icon-based switch.

- 🔝 **Scroll to Top Button**  
  Scroll back to top with a floating button once user scrolls down.

- ♿ **Accessibility Features**  
  Keyboard-navigable list items, `aria-labels`, and `tabIndex` for screen readers.

- 💡 **Performance Optimized with `React.memo`**  
  Prevents re-rendering of unchanged list items.

- 🧠 **Clean Modular Architecture**  
  Reusable, readable, and well-separated component-based code structure.

---

## 🧠 Approach

- Utilized `react-window` (`FixedSizeList` or `VariableSizeList`) for efficient rendering.
- Mock data generated dynamically using a utility function with 10,000+ entries.
- Applied `React.memo` to reduce unnecessary re-renders for better performance.
- Used Tailwind CSS for rapid, responsive, and modern UI development.
- Focused on accessibility and keyboard navigation from the start.

---

## 🧱 Technologies Used

- **React** (v18+)
- **react-window**
- **Tailwind CSS**
- **React Icons**
- **React.memo**
- **CRA**

---

## 📁 Project Structure

```bash
├── src
│   ├── components
│   │   ├── ListItem.jsx           # Renders each individual item (avatar, text, status)
│   │   ├── VirtualizedList.jsx    # Wrapper for react-window with virtualization logic
│   │   └── SearchSortBar.jsx      # Search input + sort dropdown
│   ├── data
│   │   └── generateMockData.js    # Utility to generate large mock dataset
│   ├── App.jsx                    # Main component with state management and layout
│   ├── index.js                   # ReactDOM entry point
│   └── styles.css                 # Tailwind and global styles (if needed)
├── public                         # Static assets
├── tailwind.config.js             # Tailwind CSS config
├── package.json                   # Project metadata and dependencies
└── README.md                      # You're here!