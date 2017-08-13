const express = require("express");
const users = require('../data/users');
const xss = require("xss");

const constructorMethod = (app) => {
    app.get("/", (req, res) => {
        res.status(200).render("home")
    });

    app.post('/register',
        (req, res) => {
            let username = xss(req.body.username);
            let password = xss(req.body.password);
            let name = xss(req.body.name);
            users.addUser(username, password).then((registeredUser) => {
            res.status(200).redirect('/login?registration=true');
            })
            .catch((err) => { 
                res.status(401).render('webPages/register',
                         {error: err, username: username});
            });
        });
}

module.exports = constructorMethod;