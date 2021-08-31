const express=require('express');
const app=express();
const port=8000;

//Dynamically route supporting files:
app.use(express.static(__dirname+'/public'));

//Default SPA Page - all page request will default to index.html:
app.get('/*',function(req,res){
  res.sendFile(__dirname+'/public/index.html');
});

app.listen(port);
console.log(`Listening on http://localhost:${port}`);
