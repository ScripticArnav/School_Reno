import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check if pool exists
    if (!pool) {
      return res.status(500).json({ 
        error: 'Database pool not available',
        details: 'Check your database configuration'
      });
    }

    // Test basic connection
    const [result] = await pool.query('SELECT 1 as test');
    
    // Test if schools table exists
    try {
      const [tables] = await pool.query('SHOW TABLES LIKE "schools"');
      const tableExists = tables.length > 0;
      
      return res.status(200).json({
        message: 'Database connection successful',
        test: result[0].test,
        schoolsTableExists: tableExists,
        database: process.env.DB_NAME || 'school_db',
        host: process.env.DB_HOST || 'localhost'
      });
    } catch (tableError) {
      return res.status(200).json({
        message: 'Database connection successful but schools table check failed',
        test: result[0].test,
        schoolsTableExists: false,
        tableError: tableError.message,
        database: process.env.DB_NAME || 'school_db',
        host: process.env.DB_HOST || 'localhost'
      });
    }
    
  } catch (error) {
    console.error('Database test error:', error);
    
    let errorMessage = 'Database connection failed';
    let details = error.message;
    
    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      errorMessage = 'Database access denied';
      details = 'Check your username and password';
    } else if (error.code === 'ECONNREFUSED') {
      errorMessage = 'Cannot connect to database';
      details = 'Check if MySQL server is running';
    } else if (error.code === 'ER_BAD_DB_ERROR') {
      errorMessage = 'Database does not exist';
      details = `Database '${process.env.DB_NAME || 'school_db'}' not found`;
    }
    
    return res.status(500).json({
      error: errorMessage,
      details: details,
      code: error.code,
      database: process.env.DB_NAME || 'school_db',
      host: process.env.DB_HOST || 'localhost'
    });
  }
} 