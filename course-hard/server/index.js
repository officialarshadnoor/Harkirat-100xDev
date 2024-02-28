const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/admin'. adminROuter);
app.use('/user', userRouter);

// Connect to mongoDB
mongoose.connect('', {userNewUrlParser: true, useUnifiedTopology: true, dbName: 'course'});

app.listen(3000, () => console.log('Server is running on port 3000'));