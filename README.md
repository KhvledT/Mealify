# Mealify React App

A modern restaurant landing page built with React and Bootstrap.

## Features
- Responsive modern design
- Reusable dynamic components
- Advanced form validation
- Unit and integration tests with Jest & React Testing Library

## Getting Started
```bash
npm install
npm run dev
```

## Folder Structure
- `src/components/` : All reusable components
- `src/pages/` : Main site pages (Home, Chefs, Gallery, Contact)
- `src/assets/` and `imgs/` : Images and static assets
- `src/__tests__/` : Unit and integration tests

## Adding a New Component
1. Create a JSX file in `src/components/`
2. Add a header comment (short description, props)
3. Add a test in `src/components/__tests__/`

## Running Tests
```bash
npm test
```

## Developer Notes
- Use header comments for each main component and important function
- All images use lazy loading (`loading="lazy"`)
- All forms use both programmatic and HTML5 validation
- You can easily customize styles via separate CSS files

---

**This project was developed for educational purposes and as a practical exercise in building professional React interfaces.**
