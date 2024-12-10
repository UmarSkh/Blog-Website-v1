//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Welcome to Daily Journal, where ideas come to life! Whether you're looking for expert advice, thought-provoking articles, or just something to read on a lazy afternoon, you've come to the right place. Here at Daily Journal, we aim to provide content that informs, entertains, and inspires. Our blog covers a wide range of topics including: Technology, Lifestyle, Business, Travel, Health & Wellness, and more! Explore our latest posts below, and don't forget to subscribe to stay updated with new content every week.";
const aboutContent = "Welcome to Daily Journal, a place where ideas, stories, and knowledge come to life. Our goal is to provide you with informative, engaging, and thought-provoking content on a wide range of topics. From the latest trends in technology to insightful tips on personal development, we strive to bring you valuable content that not only educates but also inspires. Whether you’re a tech enthusiast, a travel lover, or someone looking for lifestyle inspiration, you’ll find something here that sparks your curiosity. Our team of writers and contributors are passionate about delivering high-quality articles that resonate with our readers. We believe in the power of community and encourage open discussions. Join us on this journey as we explore new ideas, share experiences, and inspire change.";
const contactContent = "We'd love to hear from you! Whether you have a question, feedback, or want to collaborate, feel free to reach out to us.";

const homeStartingObject = {
    title : "Home",
    content : homeStartingContent
}

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];
// posts.push(homeStartingObject);

app.get("/", function(req, res){
    res.render("home", {startingContent : homeStartingContent, posts : posts});
});

app.get("/about", function(req, res){
    res.render("about", {startingContent : aboutContent});
});

app.get("/contact", function(req, res){
    res.render("contact", {startingContent : contactContent});
});

app.get("/compose", function(req, res){
    res.render("compose");
});

app.post("/compose", function(req, res){
    // console.log(req.body.title);
    // console.log(req.body.post);

    const post = {
        title : _.kebabCase(req.body.postTitle),
        content : req.body.postBody
    }

    posts.push(post);

    res.redirect("/");
});


app.get("/posts/:postName", function(req, res){
    const requestedTitle = _.kebabCase(req.params.postName);
    
    posts.forEach(function(post){
        const storedTitle = _.kebabCase(post.title); 
        if(requestedTitle === storedTitle){
            res.render("post", {
                title : post.title,
                content : post.content
            });
        }
    });

});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
