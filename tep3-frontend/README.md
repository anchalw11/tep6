# TraderEdge Pro - Frontend

This is the React frontend for TraderEdge Pro, a comprehensive trading signals platform.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17.0+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ProductionLandingPage.tsx    # Main homepage
│   ├── LandingPage.tsx              # Classic homepage
│   ├── SignIn.tsx                   # Login page
│   ├── SignUp.tsx                   # Registration
│   ├── PaymentFlow.tsx              # Payment processing
│   ├── CombinedMembershipPlans.tsx  # Pricing plans
│   ├── Questionnaire.tsx            # User onboarding
│   ├── Dashboard.tsx                # Main dashboard
│   ├── DashboardConcept1.tsx        # Dashboard theme
│   ├── AdminDashboard.tsx           # Admin interface
│   ├── MT5BotsPage.tsx             # MT5 marketplace
│   └── ...
├── contexts/            # React contexts
├── services/            # API services
├── hooks/              # Custom hooks
├── App.tsx             # Main app component
└── main.tsx           # App entry point
```

## 🔑 Key Pages & Components

### Authentication
- **SignIn.tsx** - User login with JWT
- **SignUp.tsx** - User registration
- **EnhancedSignupForm.tsx** - Advanced signup with questionnaire

### Payment & Membership
- **CombinedMembershipPlans.tsx** - 4-tier pricing (Kickstarter, Starter, Pro, Enterprise)
- **PaymentFlow.tsx** - Stripe/PayPal/Crypto payment processing
- **PaymentSuccess.tsx** - Payment confirmation

### Core Application
- **ProductionLandingPage.tsx** - Modern homepage with AI features
- **Questionnaire.tsx** - Trading preference assessment
- **Dashboard.tsx** - Main user dashboard with multiple themes
- **AdminDashboard.tsx** - Administrative interface

### Specialized Features
- **MT5BotsPage.tsx** - MT5 automation marketplace
- **RiskManagementPlan.tsx** - Risk management tools
- **AICoach.tsx** - AI-powered trading assistant

## 🎨 Dashboard Themes

The dashboard supports multiple visual themes:
- **Concept1**: Neural grid holographic (default)
- **Concept2**: Aurora Borealis gradients
- **Concept3**: Neomorphic dark
- **Concept4**: Fluid gradients
- **Concept5**: Advanced holographic

## 🔧 Configuration

### Environment Variables
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_ENV=development
```

### Key Dependencies
- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Framer Motion
- Lucide Icons

## 🚀 Deployment

### Build
```bash
npm run build
```

### Serve
```bash
npm run serve
```

## 📊 Features

- **Real-time Signals**: Live trading signal delivery
- **AI Coach**: Personalized trading guidance
- **Risk Management**: Advanced position sizing
- **Multi-Account**: Portfolio management
- **Prop Firm Tools**: Challenge clearing assistance
- **MT5 Integration**: Automated trading bots

## 🔗 API Integration

The frontend communicates with the Flask backend via REST APIs:
- Authentication: `/api/auth`
- Payments: `/api/payment`
- Signals: `/api/signals`
- Dashboard: `/api/dashboard`
- User Management: `/api/user`

## 🛠️ Development Notes

- Uses React hooks extensively
- Implements real-time WebSocket connections
- Responsive design with Tailwind CSS
- Error boundaries for stability
- Performance optimizations with lazy loading

---

**Note**: This is an extracted version of the working TraderEdge Pro frontend. For full functionality, ensure the backend is properly configured and running.
