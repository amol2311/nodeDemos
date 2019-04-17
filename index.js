//const Joi = require('joi');
 const express = require('express');
 const app =  express();
//to enable json parser
 app.use(express.json());
 const courses =[
     {id:1,name:'Math1', email:'abc@de.com'},
     {id:2,name:'Math2', email:'abc@de.com'},
     {id:3,name:'Math3', email:'abc@de.com'}
 ]
 app.get('/', (req, res) =>{
    res.send("hello world!!");
 });

 app.get('/api/courses' , (req, res) =>{
    res.send(courses);
 });

 app.get('/api/courses/:id' , (req, res) =>{
     const course = courses.find(c => c.id === parseInt(req.params.id));
     if(!course) res.status(404).send('not found');
    res.send(course);
 });

 /** app.post('/api/courses', (req, res) => {
     const schema = {
         name: Joi.string().min(3).required(),
         email: Joi.string().email().required()
     };
     const result =  Joi.validate(req.body, schema);
     console.log("result: "+result);

     if(result.error){
         res.status(400).send(result.error.details[0].message);
         return;
     }
    const course = {
        id : courses.length+1,
        name : req.body.name
    }
    courses.push(course);
    res.status(201).send(course);
 }); **/
 const port = process.env.PORT||3000;
 app.listen(port,()=> console.log('starting port 3000'));