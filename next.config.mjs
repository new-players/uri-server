/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... other Next.js configurations (if any)
  
    async headers() => [
      {
        source: '*',  // Allow requests from any origin (localhost for development)
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'http://localhost:3000' },
          { key: 'Access-Control-Allow-Methods', value: '*' }, // Allow all methods for development
          { key: 'Access-Control-Allow-Headers', value: '*' }, // Allow all headers for development
        ],
      },
    ],
  };
  
  export default nextConfig;