// const http = require('http');
// const app = require('../app');

const express = require("express");
const routes = express.Router();
const PostBlog = require("../models/postblog");

// cria um post no blog
routes.post("/blogs", function(req, re, next){
	console.log(req.body);
	PostBlog.create(req.body).then(function(post){
		console.log(post);
		res.send(post);
	}).catch(next);
});

// recebe todos os posts
routes.get("/blogs", function(req, re, next){
	PostBlog.find({}).then(function(post){
		console.log(post);
		res.send(post);
	}).catch(next);
})

// recebe um post do blog
routes.get("/blogs/:id", function(req, res, next){
	PostBlog.findOne({_id: req.params.id}).then(function(post){
		console.log(post);
		res.send(post);
	}).catch(next);
});

// deleta um post
routes.delete("/blogs/:id", function(req, res, next){
	PostBlog.findOneAndDelete({_id: req.params.id}).then(function(post){
		console.log(post);
		res.send(post);
	}).catch(next);
})

module.exports = routes;