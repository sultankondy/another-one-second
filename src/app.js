const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 4000;

const prayRoute = require('./routes/pray')
const umraGuideRouter = require('./routes/umraGuide')
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const navigationRouter = require('./routes/navigation');
const tasbihRouter = require('./routes/tasbih');
const umraRouter = require('./routes/umra'); 
const tourRouter = require('./routes/tour');



const run = async () => {
  await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,})
    .then(() => console.log("DB Connection successfull!"))
    .catch((err) => console.log(err));

  app.use(express.json());
  app.use('/pray', prayRoute);
  app.use('/guides', umraGuideRouter);
  app.use('/auth', authRouter);
  app.use('/users', userRouter);
  app.use('/navigation', navigationRouter);
  app.use('/tasbihs', tasbihRouter); 
  app.use('/umra', umraRouter);
  app.use('/tour', tourRouter);
  app.use('/uploads', express.static('uploads'));


  app.listen(port, () => console.log(
    `Example app listening at http://localhost:${port}`,
  ));
};




module.exports = run;