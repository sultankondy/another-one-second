const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 4000;

const prayRoute = require('./routes/pray')
const umraGuideRouter = require('./routes/umraGuide')
const blogRouter = require('./routes/blog');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const navigationRouter = require('./routes/navigation')



const run = async () => {
  await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,})
    .then(() => console.log("DB Connection successfull!"))
    .catch((err) => console.log(err));

  app.use(express.json());
  app.use('/pray', prayRoute);
  app.use('/umraguide', umraGuideRouter);
  app.use('/blogs', blogRouter);
  app.use('/auth', authRouter);
  app.use('/users', userRouter);
  app.use('/navigation', navigationRouter);
  app.use('/uploads', express.static('uploads'));

  app.listen(port, () => console.log(
    `Example app listening at http://localhost:${port}`,
  ));
};




module.exports = run;