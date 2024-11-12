const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

app.use('/auth', authRoutes);
app.use('/products', productRoutes);

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database connected'))
.catch(err => console.error('Database connection error:', err));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

