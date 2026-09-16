import express from 'express';
const app =express();
app.use(express.json());
let users=[
    {id:1,name:"Jahnvi",email:"jahnavi@mail.com"},
    {id:2,name:"Naincy",email:"nirjara@mail.com"}
];
//Get:get request to fetch all users
app.get('/users',(req,res)=>{
    res.json(users);
});
app.post('/users',(req,res)=>{
    const user={
        id:users.length+1,
        name:req.body.name,
        email:req.body.email
    };
    users.push(user);
    res.json(user);
})
app.listen(8000,()=>{
    console.log('server is running  on port http://localhost:8000')
})