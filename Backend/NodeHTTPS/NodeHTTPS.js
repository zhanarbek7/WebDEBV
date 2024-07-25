import https from "https";

// Define the options for the request
const options = {
  hostname: 'bored-api.appbrewery.com',
  path: '/random',
  method: 'GET'
};

// Make the request
const req = https.request(options, (res) => {
  let data = '';

  // Collect data chunks
  res.on('data', (chunk) => {
    console.log()
    data += chunk;
  });

  // When the response is completes
  res.on('end', () => {
    console.log('Response:', data);
  });
});

// Handle request errors
req.on('error', (e) => {
  console.error('Request Error:', e);
});

// End the request
req.end();
