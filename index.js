const express = require('express');
const axios = require('axios');
const cors = require('cors');
const xml2js = require('xml2js');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());

// Load client secrets from a local file (replace with your own credentials.json file path).
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const TOKEN_PATH = path.join(__dirname, 'token.json');

// Authenticate with Google Sheets API
async function authenticateGoogle() {
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const authClient = await auth.getClient();
  return google.sheets({ version: 'v4', auth: authClient });
}

// API to get articles from Medium RSS feed
app.get('/api/articles', async (req, res) => {
  try {
    const response = await axios.get('https://medium.com/feed/@abbscout1987', {
      headers: {
        'Content-Type': 'application/rss+xml',
      },
    });

    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(response.data);

    const articles = result.rss.channel[0].item;
    res.json(articles);
  } catch (error) {
    res.status(500).send('Error fetching articles');
  }
});

// API to fetch data from Google Spreadsheet
app.get('/api/spreadsheet', async (req, res) => {
  try {
    console.log("Authenticating with Google API...");
    const sheets = await authenticateGoogle();
    console.log("Google API authenticated successfully.");

    const spreadsheetId = '1BEc8-athVqZUtgMwviH_BnucIwf3yjLw42OL7-paXUg'; 
    const range = 'dewan!A1:G';
    console.log("Fetching data from spreadsheet...");

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    console.log("Data fetched successfully.");
    const rows = response.data.values;
    if (rows.length) {
      res.json(rows);
    } else {
      res.status(404).send('No data found in spreadsheet');
    }
  } catch (error) {
    console.error("Error fetching spreadsheet data: ", error); // Logging error
    res.status(500).send('Error fetching spreadsheet data');
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
