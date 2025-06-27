# Environment Variables for Railway Deployment

## Required Environment Variables

### Database Configuration
- `MONGO_URI`: MongoDB connection string
  - Format: `mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority`
  - Example: `mongodb+srv://user:pass@cluster.ylmrqgl.mongodb.net/PrivacyManagement?retryWrites=true&w=majority`

### Server Configuration
- `PORT`: Port number for the server (Railway will set this automatically)
  - Default: `3000`
  - Railway will override this with their assigned port

## Railway Deployment Notes

1. **Automatic Port Assignment**: Railway automatically assigns and sets the PORT environment variable
2. **Database Connection**: Ensure your MongoDB Atlas cluster allows connections from Railway's IP addresses (0.0.0.0/0 for simplicity)
3. **Environment Variables**: Set the MONGO_URI in Railway's environment variables section
4. **Build Process**: Railway will automatically detect this as a Node.js project and install dependencies

## API Endpoints

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
