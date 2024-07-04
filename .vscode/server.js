const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRouter = require('./routes/auth');
const depositRouter = require('./routes/deposit');
const withdrawRouter = require('./routes/withdraw');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/auth', authRouter);
app.use('/deposit', depositRouter);
app.use('/withdraw', withdrawRouter);

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
