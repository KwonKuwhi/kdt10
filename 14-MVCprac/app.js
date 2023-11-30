const express = require ('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',(req, res)=>{
    res.render('login');
})




const loginRouter = require('./routes/login');
app.use('/', loginRouter);


app.listen(PORT,()=>{
    console.log('sever is openging',PORT);
})