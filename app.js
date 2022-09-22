const express=require('express');
const server=express();
const movies= [
    
   { "id":"1",
    "name":"Avengers",
    "year":"2012",
    "rating":"8.1"
},
{ "id":"2",
"name":"The Dark Knight",
"year":"2017",
"rating":"8.5"
},
{ "id":"3",
"name":"Lion King",
"year":"2019",
"rating":"9.2"
},
{ "id":"4",
"name":"FROZEN",
"year":"2016",
"rating":"9.1"
}

]
const obj={
    name:"John",
    age:30,
};
server.get('/',(request,response)=>{
    response.send('HELLO');
});   

server.get('/about',(request,response)=>{
    console.log('ABOUT ROUTE');
   
});

server.get('/movies',(request,response)=>{
    response.send(movies);
   
});
server.get('*',(request,response)=>{
    response.send('404');
   
});
server.listen(4000, ()=>{
    console.log('Server is running on port 4000');

});
