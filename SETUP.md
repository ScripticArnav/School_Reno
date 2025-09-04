# School Directory Setup Guide

## Prerequisites

1. **MySQL Database** - Make sure you have MySQL running
2. **Cloudinary Account** - For image storage
3. **Node.js** - Version 16 or higher

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=school_db

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Node Environment
NODE_ENV=development
```

## Database Setup

1. **Create Database:**
```sql
CREATE DATABASE school_db;
USE school_db;
```

2. **Create Schools Table:**
```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  contact VARCHAR(20) NOT NULL,
  email_id VARCHAR(255) NOT NULL,
  image VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Cloudinary Setup

1. Go to [Cloudinary](https://cloudinary.com/) and create an account
2. Get your Cloud Name, API Key, and API Secret from your dashboard
3. Add these to your `.env.local` file

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Troubleshooting

### Common Issues:

1. **"Database connection not available"**
   - Check if MySQL is running
   - Verify database credentials in `.env.local`
   - Ensure the database exists

2. **"Table 'schools' does not exist"**
   - Run the CREATE TABLE SQL command above

3. **"File upload failed"**
   - Check Cloudinary credentials
   - Ensure image format is JPG, JPEG, or PNG
   - Check file size (max 10MB)

4. **"Failed to save school data"**
   - Check browser console for detailed error messages
   - Verify all form fields are filled
   - Check database connection

## Testing

1. Open http://localhost:3000
2. Try adding a school with all required fields
3. Check the browser console and terminal for any error messages 