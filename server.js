const express = require('express');
const path = require('path');
const bodyparser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;

// Body-parser middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))


// Set the directory for serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.post('/one1', (req, res) => {
  /*const student1={
    name:'SVECW',
    branch:'IT'
  }*/
  const student1={
    name:req.body.sname,
    branch:req.body.sage
  }
  console.log(req.body);
  res.render('one',{student:student1});
});

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/one',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','one.html'))
})
app.get('/third',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','third.html'))
})
app.post('/third',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','third.html'))
})
app.post('/one',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','one.html'))
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
