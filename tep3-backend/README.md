# TraderEdge Pro - Backend

Flask-based backend API for TraderEdge Pro trading platform.

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- PostgreSQL
- pip

### Installation
```bash
pip install -r requirements.txt
```

### Database Setup
```bash
# Create PostgreSQL database
createdb traderedge_pro

# Run schema
psql -d traderedge_pro -f comprehensive_database_schema.sql
```

### Environment Variables
```env
DATABASE_URL=postgresql://user:password@localhost/traderedge_pro
JWT_SECRET_KEY=your-secret-key
FLASK_ENV=development
```

### Run Development Server
```bash
python app.py
```

## 📁 Project Structure

```
├── app.py                      # Main Flask application
├── comprehensive_database_schema.sql  # Database schema
└── journal/                    # Flask blueprints
    ├── __init__.py            # App factory
    ├── models.py              # SQLAlchemy models
    ├── auth.py                # Authentication routes
    ├── user_routes.py         # User management
    ├── admin_auth.py          # Admin authentication
    ├── payment_routes.py      # Payment processing
    ├── api_routes.py          # General API endpoints
    └── routes.py              # Trading routes
```

## 🔑 Key API Endpoints

### Authentication (`/api/auth`)
```python
POST /api/auth/login          # User login
POST /api/auth/register       # User registration
POST /api/auth/logout         # User logout
POST /api/auth/verify         # Token verification
```

### User Management (`/api/user`)
```python
GET /api/user/profile         # Get user profile
PUT /api/user/profile         # Update profile
POST /api/user/register       # Complete registration
GET /api/user/dashboard-data  # Dashboard data
```

### Payments (`/api/payment`)
```python
POST /api/payment/validate-coupon     # Coupon validation
POST /api/payment/verify-payment      # Payment verification
POST /api/payment/manual-verification # Manual payment
GET /api/payment/history             # Payment history
```

### Trading Operations (`/api/trades`)
```python
GET /api/trades              # List user trades
POST /api/trades             # Record new trade
PUT /api/trades/:id          # Update trade
DELETE /api/trades/:id       # Delete trade
```

### Risk Management (`/api/risk`)
```python
GET /api/risk/plan           # Get risk plan
POST /api/risk/plan          # Create/update plan
GET /api/risk/trading-plan   # Trading plan details
POST /api/risk/generate-plan # Generate new plan
```

### Signals (`/api/signals`)
```python
GET /api/signals/feed        # Signal feed
POST /api/signals/create     # Create signal (admin)
PUT /api/signals/update      # Update signal
DELETE /api/signals/delete   # Delete signal
```

### Dashboard (`/api/dashboard`)
```python
GET /api/dashboard           # Dashboard overview
POST /api/dashboard          # Save dashboard data
PUT /api/dashboard/equity    # Update equity
```

### Questionnaire (`/api/questionnaire`)
```python
POST /api/questionnaire      # Submit questionnaire
GET /api/questionnaire/:id   # Get responses
PUT /api/questionnaire/:id   # Update responses
```

## 🗄️ Database Schema

### Core Tables
- **users** - User accounts and authentication
- **payment_details** - Payment tracking with immutability
- **questionnaire_details** - Trading preferences
- **user_dashboard_data** - Performance metrics
- **trades** - Individual trade records

### Key Features
- UUID-based identification
- Immutability constraints on payments
- Comprehensive audit trails
- JSON fields for flexible data storage

## 🔐 Authentication & Security

- JWT token-based authentication
- Password hashing with secure algorithms
- Role-based access control
- Admin authentication system
- API rate limiting

## 💳 Payment Integration

### Supported Methods
- **Stripe** - Credit card processing
- **PayPal** - PayPal payments
- **Cryptomus** - Cryptocurrency payments
- **Manual Verification** - Razorpay integration

### Coupon System
- TRADERFREE - Free access
- INTERNAL_DEV_OVERRIDE_2024 - Development pricing

## 📊 Real-time Features

- WebSocket connections for live updates
- Signal broadcasting system
- Performance metrics streaming
- Connection status monitoring

## 🚀 Deployment

### Production Setup
```bash
export FLASK_ENV=production
export DATABASE_URL=your-production-db-url
python app.py
```

### Docker (Optional)
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]
```

## 🔧 Key Dependencies

- Flask 2.x
- SQLAlchemy
- Flask-JWT-Extended
- psycopg2 (PostgreSQL)
- Flask-CORS
- Flask-SocketIO

## 🧪 Testing

```bash
# Run tests
python -m pytest

# Test API endpoints
curl -X GET http://localhost:5000/api/health
```

## 📚 API Documentation

### Response Format
```json
{
  "success": true,
  "data": {},
  "message": "Operation completed",
  "error": null
}
```

### Error Handling
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

## 🔄 Data Flow

1. **User Registration** → Questionnaire → Payment → Dashboard Access
2. **Signal Creation** → WebSocket Broadcast → User Notification → Trade Execution
3. **Payment Processing** → Verification → Membership Activation → Feature Unlock

---

**Note**: This is an extracted version of the working TraderEdge Pro backend. Ensure proper environment configuration for full functionality.
