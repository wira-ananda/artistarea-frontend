const express = require('express');
const axios = require('axios');
const cors = require('cors');
const xml2js = require('xml2js');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/articles', async (req, res) => {
  try {
    const response = await axios.get('https://medium.com/feed/@abbscout1987', {
      headers: {
        'Content-Type': 'application/rss+xml',
      },
    });

    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(response.data);

    // Kirim array item dari feed Medium
    const articles = result.rss.channel[0].item;
    res.json(articles); 
  } catch (error) {
    res.status(500).send('Error fetching articles');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
