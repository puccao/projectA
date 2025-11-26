const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/products', productRoutes);

app.get('/', (req, res) => res.send('Food & Drink POS Backend!'));

app.listen(4000, () => console.log('Backend running on port 4000'));