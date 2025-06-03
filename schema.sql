-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  author VARCHAR(255) NOT NULL DEFAULT 'By Yatish Kumar Goel, Advocate',
  summary TEXT,
  content TEXT NOT NULL,
  image VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON blogs(created_at DESC);