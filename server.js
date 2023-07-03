const express=require('express')
const app=express()
const db=require('./db')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","hbs")
app.get('/',(req,res)=>{
    db.getALLpersons().then((persons)=>{
        res.render('persons', {persons});
    

    }).catch((err)=>{
       res.send(err)  
        
    })

app.get('/add',(req,res)=>{
    res.render('person_add')
})


    }
)
app.post('/add',(req,res)=>{
db.addNewperson(req.body.name,req.body.age,req.body.city).then(()=>{
    res.redirect('/')

}).catch((err)=>{
    res.send(err)
})
})


app.listen(5000,()=>{
    console.log("server is started at http://localhost:5000")

})