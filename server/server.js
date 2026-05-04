const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route registration
app.get('/', (req, res) => {
    res.send('Welcome to Interest Matcher API');
});

// Additional routes can be added here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
