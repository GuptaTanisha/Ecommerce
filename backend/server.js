//GOD IS GREAT
import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';


dotenv.config();
const app= express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT= process.env.PORT || 5000;
const url = process.env.MONGO_URL;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true})
  .then(() => console.log('DB connected'))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);

app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
app.get('/',(req,res) => {
    res.send('Server is ready')
});

app.use((err,req,res,next) => {
    res.status(500).send({message: err.message});
})

app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`))