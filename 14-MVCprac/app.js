const express = require ('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());






const loginRouter = require('./routes/login');
app.use('/', loginRouter);


app.listen(PORT,()=>{
    console.log('sever is opening',PORT);
})