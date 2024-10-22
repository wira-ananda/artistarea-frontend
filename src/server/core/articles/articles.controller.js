//Belum Terpakai
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/articles', async (req, res) => {
  try {
    console.log("Fetching articles from Medium..."); // Log untuk melihat kapan permintaan dimulai
    const response = await axios.get('https://medium.com/@abbscout1987/latest?format=json');
    console.log("Response received:", response.data); // Log respons

    const jsonData = JSON.parse(response.data.replace("])}while(1);</x>", ""));
    const mediumArticles = jsonData.payload.references.Post;

    const articlesArray = Object.values(mediumArticles).map((article) => ({
      title: article.title,
      url: `https://medium.com/@abbscout1987/${article.id}`,
    }));

    res.json(articlesArray); // Kirimkan array artikel ke frontend
  } catch (error) {
    console.error("Error fetching articles:", error); // Log kesalahan
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});


app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
