const express = require("express")
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId

const Employee = require('../models/employee.model')
const {generateCrudMethods} = require("../services")
const employeeCrud = generateCrudMethods(Employee)
const {validateBbId} = require('../middlewares')


router.get('/', (req, res, next)=>{
    employeeCrud.getAll()
    .then(data => res.send(data))
    .catch(err => next(err))
})
router.get('/:id', validateBbId,(req, res, next)=>{
    employeeCrud.getById(req.params.id)
    .then(data => {
        if(data)
        res.send(data)
    else
    raiseRecord404Error(req,res)
        
    .catch(err => next(err))
})
})

router.post('/', (req, res, next)=>{
    employeeCrud.create(req.body)
    .then(data => res.status(201).json(data))
    .catch(err => next(err))
})

router.put('/:id', validateBbId, (req, res)=>{
    employeeCrud.update(req.params.id, req.body)
    .then(data => {
        if(data)
        res.send(data)
    else raiseRecord404Error(req,res)
        
    .catch(err => next(err))
    })
})
router.delete('/:id',validateBbId, (req, res)=>{
    employeeCrud.delete(req.params.id)
    .then(data => {
        if(data)
        res.send(data)
    else raiseRecord404Error(req,res)
        
    .catch(err => next(err))
    })
})

module.exports = router