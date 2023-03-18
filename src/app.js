

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;
const hbs = require('hbs');



const template_path = path.join(__dirname,"../template/views")

// telling express that we use hbs file in views folder
app.set('views engine','hbs');
// telling that new foler template under working veiws folder new path
app.set('views',template_path);


// we need to partial also because views is connected and not working alone
const partials_path = path.join(__dirname,"../template/partials");
hbs.registerPartials(partials_path)

// path of static folder
// app.use(express.static());
const static_path = path.join(__dirname,"../public")
app.use(express.static(static_path));




// routing 
app.get("/",(req,res)=>{
    // res.send("Welcome to Lokeshwar prasad page");
    res.render('index.hbs');
});

app.get("/about",(req,res)=>{
    // res.send("Lokeshwar prasad about page");
    res.render('about.hbs');
});

app.get("/weather",(req,res)=>{
    // res.send("This is weather page");
    res.render('weather.hbs');
});

app.get("*",(req,res)=>{
    res.render('404.hbs',{
        errormsg : 'Oops! Page Not Found'
    });
})

app.get("*",(req,res)=>{
    res.send("404 Oops! page not found");
})


// listening at port
app.listen(port,()=>{
    console.log(`Listening at port : ${port}`)
})