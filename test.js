// test.js
// Simple smoke test for Auth API

const http = require('http');

console.log("Running simple smoke test for Auth API...");

// Check root route
http.get({ hostname: 'localhost', port: process.env.PORT || 3000, path: '/' }, (res) => {
  console.log('Status code:', res.statusCode);
  if (res.statusCode === 200) {
    console.log("✅ Root route is working");
  } else {
    console.log("❌ Root route failed");
  }
  process.exit(0);
}).on('error', (err) => {
  console.error("❌ Cannot reach server (expected if server not running locally):", err.message);
  process.exit(1);
});
