const axios = require('axios');
const express = require('express');
const app = express();

app.get('/spotify-token', async (req, res) => {
  const base64Credentials = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', 
      new URLSearchParams({
        grant_type: 'client_credentials'
      }), 
      {
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application-www-form-urlencoded',
          'Authorization': 'Basic ' + base64Credentials
        }
      }
    );

    res.json(response.data.access_token);
  } catch (error) {
    res.status(error.response.status).json({ message: 'Error fetching token' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));