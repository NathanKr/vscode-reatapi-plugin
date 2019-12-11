const express = require('express'),PORT = 8080;
const app = express();
const incomes = [
    {description : 'salary 1' ,amount : 10000} ,
    {description : 'salary 2' ,amount : 30000} ];

app.get("/incomes",(req,res) =>{
    res.send(incomes);
})    

app.listen(PORT,() => {
    console.log(`server is listening on port ${PORT}`)
});
