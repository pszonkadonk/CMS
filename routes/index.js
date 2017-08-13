const express = require("express");

const constructorMethod = (app) => {
    app.get("/", (req, res) => {
        res.status(200).render("home")
    });
}

module.exports = constructorMethod;