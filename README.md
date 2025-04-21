# Taste Buds - Dining Companion Finder

Taste Buds is a web application that helps users find dining companions based on shared food preferences and interests. The application is built using React, TypeScript, and Tailwind CSS.

## Features

- User authentication (sign up and login)
- User profile management
- Food preference and cuisine selection
- Dining companion discovery
- Filtering based on location, cuisine, dining style, and food preferences

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tastebuds.git
cd tastebuds
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   └── SignUpForm.tsx
│   ├── common/
│   │   └── Navbar.tsx
│   ├── discovery/
│   │   └── CompanionDiscovery.tsx
│   └── profile/
│       └── UserProfile.tsx
├── types/
│   └── user.ts
├── utils/
├── App.tsx
└── main.tsx
```

## Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
