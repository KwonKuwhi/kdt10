// models: models/index에서 export한 db 객체
const models = require('../models/index');

const Visitor = models.Visitor;

// GET / => localhost:PORT/
exports.main = (req,res) => {
    res.render('index');
};

//GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
    console.log('여기!',Visitor);

    //SELECT * FROM visitor
    Visitor.findAll().then((result) => {
        console.log('findAll > ', result);
        res.render('visitor',{data:result});
    })
}

// POST /visitor
exports.post_visitor = (req,res)=> {
    console.log(req.body);
    const {name, comment}=req.body;

    // Visitor.postVisitor(req.body,(result)=>{
    //     // result : rows.insertId 
    //     console.log(result);
    //     res.send({id: result, name, comment});
    // });


    // INSERT
    Visitor.create({
        name: name,
        comment: comment
    }).then((result) => {
        console.log('create > ',result);
        res.send(result); // 
    })
}

// GET /visitor = > localhost:PORT/visiotr?id=N
exports.get_visitor = (req,res) => {
    console.log(req.query); //{ id: '1' }
    console.log(req.query.id); 
    
    // 모델에 함수 호출
    
    // Visitor.getVisitor(req.query.id, (result)=>{
    //     console.log('get_visitor Cvisitor.js >', result);
    //     res.send(result);
    // })

    // [AFTER]
    // SELECT * FROM visitor WHERE id = ?
    Visitor.findOne({
        where : {id: req.query.id}
    }).then((result)=>{
        console.log('findOne >' , result);
        res.send(result);
    })
    
}


// GET /visitor/:id = > localhost:PORT/visitor/:id

exports.get_visitor2 = (req,res) => {
    console.log(req.params); //{ id: '1' }
    console.log(req.params.id); 
    
    // 모델에 함수 호출
    
    Visitor.findOne({
        where : {id: req.params.id}
    }).then((result)=>{
        console.log('findOne2 >' , result);
        res.send(result);
    })
    
}

// PATCH /visitor
exports.patch_visitor = (req,res)=>{
    console.log(req.body);

    // Visitor.patchVisitor(req.body, (result)=>{
    //     console.log('patchVisitor Cvisitor.js > ', result);
    //     res.send('수정 성공!');
    // })

    // [After]
    // UPDATE visitor

    
    
    Visitor.update({
        name: req.body.name,
        comment: req.body.comment
    },
    {
        where: {id: req.body.id}
    }).then((result)=>{
        console.log('update >', result);
        res.send('수정 성공')
    })
}

// DELETE /visitor
exports.delete_visitor = (req, res) => {
    console.log(req.body);
    console.log(req.body.id);

    // 
    
    //[After]
    // DELETE
    Visitor.destroy({
        where: {id: req.body.id}
    }).then((result)=>{
        console.log('destroy > ',result);
        res.send('삭제 성공!');
    })
}