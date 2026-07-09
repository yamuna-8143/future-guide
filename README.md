# FutureGuide - Student Career Guidance Portal

A comprehensive React application that helps students decide what to study after 10th Standard and Intermediate by providing complete information about education paths, career opportunities, eligibility, entrance exams, colleges, required skills, salary, and higher education options.

## Features

- Modern, responsive blue and white UI design
- Dark/Light mode toggle
- Comprehensive course information for After 10th and After Intermediate
- Search and filter functionality
- Detailed course pages with:
  - Course overview
  - Subjects covered
  - Eligibility criteria
  - Skills required
  - Higher education options
  - Career opportunities
  - Entrance exams
  - Top colleges
  - Expected salary
  - FAQs
- Student testimonials
- Contact form
- About page
- 404 Not Found page
- Scroll to top button

## Tech Stack

- React 18
- React Router DOM v6
- Vite
- Plain CSS (no Tailwind or Bootstrap)
- Lucide React icons

## Project Structure

```
src/
├── components/
│   ├── CourseCard/
│   ├── FeatureCard/
│   ├── Footer/
│   ├── LoadingSpinner/
│   ├── Navbar/
│   ├── PageBanner/
│   ├── ScrollToTop/
│   ├── SearchFilter/
│   ├── StreamCard/
│   └── TestimonialCard/
├── data/
│   ├── after10thData.js
│   ├── afterInterData.js
│   └── homeData.js
├── hooks/
│   ├── useScrollToTop.js
│   ├── useSearch.js
│   └── useTheme.js
├── pages/
│   ├── About/
│   ├── After10th/
│   ├── AfterInter/
│   ├── Contact/
│   ├── CourseDetail/
│   ├── Education/
│   ├── Home/
│   └── NotFound/
├── styles/
│   └── *.css
├── utils/
│   └── helpers.js
├── App.jsx
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/futureguide.git
cd futureguide
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

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Pages

1. **Home** - Hero section, features, why choose us, testimonials, CTA
2. **Education** - Choose between After 10th or After Intermediate
3. **After 10th** - 8 course options (MPC, BiPC, MEC, CEC, Diploma, Polytechnic, ITI, Vocational)
4. **After Intermediate** - 14+ degree courses (B.Tech, MBBS, BDS, B.Sc, B.Com, BBA, BA, Pharmacy, Agriculture, Law, Hotel Management, Aviation, Design, etc.)
5. **Course Detail** - Comprehensive information for each course
6. **About** - Mission, values, and team information
7. **Contact** - Contact form and information
8. **404 Not Found** - Custom error page

## Course Information Included

For each course:
- Course overview
- Duration (where applicable)
- Subjects covered
- Eligibility criteria
- Skills required
- Higher education options
- Career opportunities
- Entrance exams
- Top colleges
- Expected salary ranges
- Frequently asked questions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Icons from [Lucide React](https://lucide.dev/)
- Stock photos from [Pexels](https://www.pexels.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
