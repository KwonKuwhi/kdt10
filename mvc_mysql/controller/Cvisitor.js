const Visitor = require('../model/Visitor');

//GET / => localhost:PORT/
exports.main = (req,res) => {
    res.render('index');
};

//GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
    // [Before]
    // console.log(Visitor.getVisitors());
    // res.render('visitor',{data: Visitor.getVisitors()});



    // [After]
    Visitor.getVisitors((result)=>{
        console.log('Cvisitor.js >', result);
        res.render('visitor', {data: result});
    })
}
exports.post_visitor = (req,res)=> {
    console.log(req.body);
    const {name, comment}=req.body;
    Visitor.postVisitor(req.body,(result)=>{
        console.log(result);
        res.send({id: result, name,comment});
    });
}