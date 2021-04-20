
const router = require('express').Router();
const express = require('express');

  ///////////
  router.get('/home',async (req,res)=> {
    res.render('index');
    });
//////////////////////////////

router.get('/inicio',async (req,res)=> {
    res.render('inicio');
    });
////////////

module.exports=router;
