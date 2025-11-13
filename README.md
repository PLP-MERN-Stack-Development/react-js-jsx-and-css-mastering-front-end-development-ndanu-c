# TaskMaster

A modern task management application built with React, Tailwind CSS, and React Router. TaskMaster helps you organize your tasks, boost productivity, and stay on top of your to-do list with a beautiful, responsive interface that supports both light and dark themes.

![TaskMaster Screenshot](https://via.placeholder.com/1200x600/1e293b/ffffff?text=TaskMaster+Screenshot)

## Features

- Create, update, and delete tasks
- Light and dark theme support
- Fully responsive design
- Task filtering (All, Active, Completed)
- Task statistics and progress tracking
- Fast and performant
- Local storage for data persistence

## Tech Stack

- React 18
- Tailwind CSS 3
- React Router 6
- Context API for state management
- Heroicons for beautiful icons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/taskmaster.git
   cd taskmaster
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/       # React context providers
├── pages/         # Page components
├── utils/         # Utility functions
├── App.jsx        # Main application component
└── main.jsx       # Application entry point
```

## Customization

### Theme Colors

You can customize the theme colors by editing the `tailwind.config.js` file. The primary color palette is defined there.

### Adding New Pages

1. Create a new component in the `src/pages` directory
2. Add a new route in `src/App.jsx`
3. Add navigation links in the `Navbar` and `Footer` components

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Heroicons](https://heroicons.com/)