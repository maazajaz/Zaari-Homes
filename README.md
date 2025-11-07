# Royal Carpets - 3D Portfolio Website

A modern, interactive website for a carpet manufacturer featuring stunning 3D carpet models built with React, Three.js, and Tailwind CSS.

## ✨ Features

- 🎨 **Interactive 3D Carpet Models** - Explore carpets in full 3D with Three.js and React Three Fiber
- 📱 **Fully Responsive Design** - Beautiful UI that works on all devices
- ⚡ **Modern UI/UX** - Clean, contemporary design with smooth animations using Framer Motion
- 🛣️ **Multi-Page Application** - Home, Products, About Us, and Contact pages
- 🎯 **Intuitive Navigation** - Easy-to-use navigation with React Router
- 💅 **Tailwind CSS Styling** - Modern, utility-first CSS framework

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd "roaif website"
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

## 🏗️ Project Structure

```
roaif-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar component
│   │   ├── Footer.jsx          # Footer component
│   │   ├── CarpetModel.jsx     # 3D carpet model
│   │   └── CarpetScene.jsx     # 3D scene setup
│   ├── pages/
│   │   ├── Home.jsx            # Home page with hero section
│   │   ├── Products.jsx        # Products catalog
│   │   ├── About.jsx           # About us page
│   │   └── Contact.jsx         # Contact form page
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles with Tailwind
├── public/                     # Static assets
├── .github/
│   └── copilot-instructions.md # Project guidelines
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Pages

### Home
- Hero section with 3D carpet showcase
- Animated text and call-to-action buttons
- Feature highlights
- CTA section

### Products
- Interactive 3D carpet preview
- Category filtering
- Product grid with details
- Custom order options

### About Us
- Company story and timeline
- Core values
- Milestones and achievements
- Team information

### Contact
- Contact form
- Business hours
- Multiple contact methods
- FAQ section

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features Implemented

### 3D Carpet Model
- Interactive 3D carpet with realistic materials
- Decorative patterns and borders
- Fringe details
- Smooth animations and rotations
- OrbitControls for user interaction

### Modern UI Components
- Responsive navigation bar
- Gradient buttons and accents
- Smooth page transitions
- Hover effects and animations
- Mobile-friendly design

### Styling
- Custom color palette with primary and accent colors
- Google Fonts integration (Inter & Poppins)
- Gradient text effects
- Shadow and elevation system

## 🌟 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### 3D Models
Modify `src/components/CarpetModel.jsx` to customize:
- Carpet dimensions
- Colors and materials
- Patterns and decorations
- Animations

### Content
Update the page components in `src/pages/` to customize:
- Text content
- Images and media
- Product information
- Contact details

## 📝 Notes

- The 3D carpet model is created procedurally - you can replace it with imported 3D models (.glb, .gltf)
- Add real carpet textures to enhance the 3D model realism
- Integrate a backend for the contact form
- Add Google Maps integration for the location map
- Consider adding a product detail page

## 🚀 Deployment

Build the project:
```bash
npm run build
```

The built files will be in the `dist/` directory, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using React, Three.js, and modern web technologies.
