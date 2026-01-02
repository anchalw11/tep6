# Extracted TraderEdge Pro Files - Frontend

This document lists all the files that have been extracted from the working TraderEdge Pro application.

## 📂 Frontend Structure

### Core Application Files
- `src/App.tsx` - Main application component with routing
- `src/main.tsx` - Application entry point
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration

### Page Components

#### Landing/Home Pages
- `src/components/ProductionLandingPage.tsx` - Modern homepage with AI features
- `src/components/LandingPage.tsx` - Classic homepage design
- `src/components/Enhanced3DLandingPage.tsx` - 3D enhanced landing page

#### Authentication
- `src/components/SignIn.tsx` - User login page
- `src/components/SignUp.tsx` - User registration page
- `src/components/EnhancedSignupForm.tsx` - Advanced signup with questionnaire

#### Payment & Membership
- `src/components/CombinedMembershipPlans.tsx` - 4-tier pricing plans
- `src/components/PaymentFlow.tsx` - Payment processing interface
- `src/components/PaymentSuccess.tsx` - Payment confirmation page

#### Core Application
- `src/components/Questionnaire.tsx` - User onboarding questionnaire
- `src/components/Dashboard.tsx` - Main user dashboard
- `src/components/DashboardConcept1.tsx` - Primary dashboard theme
- `src/components/AdminDashboard.tsx` - Administrative interface

#### Specialized Features
- `src/components/RiskManagementPage.tsx` - Risk management tools
- `src/components/RiskManagementPlan.tsx` - Risk plan visualization
- `src/components/MT5BotsPage.tsx` - MT5 automation marketplace
- `src/components/MT5Signup.tsx` - MT5 bot registration
- `src/components/MT5BotDashboard.tsx` - MT5 bot management

### Contexts (State Management)
- `src/contexts/UserContext.tsx` - User authentication state
- `src/contexts/AdminContext.tsx` - Admin authentication state
- `src/contexts/TradingPlanContext.tsx` - Trading plan state
- `src/contexts/SubscriptionContext.tsx` - Subscription management
- `src/contexts/SupabaseAuthContext.tsx` - Supabase authentication

### Services (API Integration)
- `src/services/realTimeDataService.ts` - Real-time data handling
- `src/services/signalService.ts` - Signal management
- `src/services/userDataService.ts` - User data operations
- `src/services/journalService.ts` - Trading journal
- `src/services/api.ts` - Main API client
- `src/services/websocketService.ts` - WebSocket connections

### Custom Hooks
- `src/hooks/useRealTimeSignals.ts` - Real-time signal hook
- `src/hooks/useSafeEffect.ts` - Safe effect hooks

## 🚀 Key Features Included

### Pages
- ✅ Homepage (Production Landing)
- ✅ Sign In/Sign Up
- ✅ Payment Flow & Pricing
- ✅ Questionnaire
- ✅ User Dashboard (multiple themes)
- ✅ Admin Dashboard
- ✅ MT5 Bot Marketplace
- ✅ Risk Management Tools

### Functionality
- ✅ JWT Authentication
- ✅ Real-time WebSocket connections
- ✅ Payment processing (Stripe/PayPal/Crypto)
- ✅ Signal management system
- ✅ Risk management calculator
- ✅ Multi-account tracking
- ✅ Trading journal
- ✅ AI Coach integration

### UI Components
- ✅ Responsive design with Tailwind CSS
- ✅ Multiple dashboard themes
- ✅ Futuristic animations
- ✅ Error boundaries
- ✅ Loading states

## 📋 Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   ```env
   VITE_API_URL=http://localhost:5000/api
   VITE_APP_ENV=development
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🔗 Backend Integration

This frontend expects a Flask backend running on `http://localhost:5000` with the following endpoints:
- `/api/auth/*` - Authentication
- `/api/user/*` - User management
- `/api/payment/*` - Payment processing
- `/api/signals/*` - Signal management
- `/api/dashboard/*` - Dashboard data
- `/api/risk/*` - Risk management
- `/api/trades/*` - Trade operations

## 📝 Notes

- All files are extracted from the working TraderEdge Pro application
- Components include full functionality and styling
- Real-time features require backend WebSocket support
- Payment integration requires proper API keys
- Some features may need additional environment configuration

## 🛠️ Next Steps

1. Set up the backend (see `../tep3-backend/README.md`)
2. Configure environment variables
3. Install dependencies: `npm install`
4. Start development: `npm run dev`
5. Test all features and fix any missing dependencies
