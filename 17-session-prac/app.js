const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.get('view engine' ,'ejs');
app.get('views','./views');

app.use('/static', express.static(__dirname +'/static'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const indexRouter = require('./routes/user');
app.use('/user', indexRouter);

app.get('*',(req,res)=>{
    res.render('404');
})

db.sequelize.sync({force: false}).then(()=>{
    app.listen(PORT,() =>{
        console.log(`http://localhost:${PORT}`);
    })
})
