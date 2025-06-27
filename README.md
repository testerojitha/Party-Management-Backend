# TMF632 Party Management API

A RESTful API for managing individuals and organizations based on the TMF632 Party Management specification.

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd party-management-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
   PORT=3000
   ```

4. **Start the server**
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # Production mode
   npm start
   ```

## 🚄 Railway Deployment

### Prerequisites
- Railway account ([railway.app](https://railway.app))
- MongoDB Atlas cluster or similar MongoDB service

### Deployment Steps

1. **Connect your repository to Railway**
   - Fork/clone this repository to your GitHub account
   - Connect your GitHub account to Railway
   - Create a new Railway project from your repository

2. **Configure environment variables in Railway**
   - Go to your Railway project dashboard
   - Navigate to the "Variables" tab
   - Add the following environment variable:
     ```
     MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
     ```
   - Railway will automatically set the `PORT` variable

3. **Deploy**
   - Railway will automatically detect this as a Node.js project
   - The deployment will start automatically
   - Monitor the deployment in the Railway dashboard

### Database Setup
Ensure your MongoDB Atlas cluster allows connections from Railway:
- Go to MongoDB Atlas → Network Access
- Add IP Address: `0.0.0.0/0` (allow access from anywhere)
- Or add Railway's specific IP ranges for better security

## 📡 API Endpoints

### Base URL
- **Local**: `http://localhost:3000`
- **Railway**: `https://your-app-name.railway.app`

### Health Check
- `GET /` - API health check and information

### Individual Management
- `GET /tmf-api/party/v5/individual` - Get all individuals
- `POST /tmf-api/party/v5/individual` - Create new individual
- `GET /tmf-api/party/v5/individual/:id` - Get individual by ID
- `PUT /tmf-api/party/v5/individual/:id` - Update individual
- `DELETE /tmf-api/party/v5/individual/:id` - Delete individual

### Organization Management
- `GET /tmf-api/party/v5/organization` - Get all organizations
- `POST /tmf-api/party/v5/organization` - Create new organization
- `GET /tmf-api/party/v5/organization/:id` - Get organization by ID
- `PUT /tmf-api/party/v5/organization/:id` - Update organization
- `DELETE /tmf-api/party/v5/organization/:id` - Delete organization

## 📋 Data Models

### Individual Schema
```javascript
{
  givenName: String,
  familyName: String,
  birthDate: Date,
  gender: String,
  nationality: String,
  status: String,
  contactMedium: [Object],
  languageAbility: [Object],
  skill: [Object],
  individualIdentification: [Object],
  externalReference: [Object],
  partyCharacteristic: [Object],
  taxExemptionCertificate: [Object],
  relatedParty: [Object],
  createdAt: Date,
  updatedAt: Date
}
```

### Organization Schema
```javascript
{
  tradingName: String,
  organizationType: String,
  nameType: String,
  status: String,
  organizationIdentification: [Object],
  contactMedium: [Object],
  externalReference: [Object],
  partyCharacteristic: [Object],
  taxExemptionCertificate: [Object],
  relatedParty: [Object],
  createdAt: Date,
  updatedAt: Date
}
```

## 🛠️ Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js 5.x
- **Database**: MongoDB with Mongoose ODM
- **Validation**: Express-validator
- **Environment**: dotenv
- **Deployment**: Railway

## 🔧 Development

### Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-restart
- `npm run build` - Build command (no-op for Node.js)

### File Structure
```
├── app.js                 # Express app configuration
├── server.js              # Server entry point
├── package.json           # Dependencies and scripts
├── railway.json           # Railway deployment config
├── controllers/           # Request handlers
│   ├── individualController.js
│   └── organizationController.js
├── models/               # Mongoose models
│   ├── Individual.js
│   └── Organization.js
├── routes/               # Express routes
│   ├── individualRoutes.js
│   └── organizationRoutes.js
└── validators/           # Input validation
    ├── individualValidator.js
    └── organizationValidator.js
```

## 🔐 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `MONGO_URI` | MongoDB connection string | Yes | - |
| `PORT` | Server port | No | 3000 |
| `NODE_ENV` | Environment mode | No | development |

## 📦 Dependencies

### Production
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `express-validator` - Input validation
- `dotenv` - Environment variables

### Development
- `nodemon` - Development server with auto-restart

## 🚀 Deployment Status

This API is ready for Railway deployment with:
- ✅ Automatic port detection
- ✅ MongoDB connection handling
- ✅ Error handling and logging
- ✅ Health check endpoint
- ✅ Production-ready configuration
- ✅ Environment variable support

## 📄 License

ISC

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
