const express = require('express')
const profile_router = express.Router()

profile_router.get('/', (req, res) => {
    res.send('kake khujchen? proper URL din')
})

profile_router.get('/mim', (req, res) => {
    res.send('Welcome :)')
})

profile_router.get('/redwan', (req, res) => {
    res.send("Keep Calm ! You are in REDWAN's place")
})

profile_router.get('/aditya', (req, res) => {
    res.send('this is the aditya page')
})

profile_router.get('/russell', (req, res) => {
    res.send('This Is The Homepage Of RussellMurad')
})

profile_router.get('/sir', (req,res) => {
    res.send('You are in sir page')
})

profile_router.get('/shaon', (req, res) => {
    res.send('This page belongs to Shaon')
})

profile_router.get('/arif', (req,res) => {
    res.send("Welcome to Arif's World")
})

module.exports = profile_router