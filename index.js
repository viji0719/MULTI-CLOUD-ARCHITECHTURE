const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enables CORS for all origins

app.get('/hello', (req, res) => {
  res.send('Hello from Render Backend!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
