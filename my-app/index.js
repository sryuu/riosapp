const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json('hi')
})

app.get('/news', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://japanwest.api.cognitive.microsoft.com/sts/v1.0/issuetoken', //is this right to post endpoint?
    headers: {
      'azure-stt-key': process.env.REACT_APP_AZURE_STT_KEY,
    },
  };

  axios.request(options).then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.error(error);
  });
})

app.listen(8000, () => console.log(`Server running on port ${PORT}`))