
var ExpressJWT = require('express-jwt');

'use strict';

const fs = require('fs');



// console.log("dir name",rawdata)

class UserController {

    login(req, res) {
        // const jwt = ExpressJWT({ secret: 'shhhhhhared-secret', algorithms: ['HS256'] })      
        // res.status(200).json("asdasd")

        let rawdata = fs.readFileSync('./data/users.json');
        let student = JSON.parse(rawdata)
        console.log("teste",student)

        const user_correto = student.filter(user => user.email == req.body['email'] && user.senha == req.body['senha']);

        if(user_correto.length > 0){
            res.status(200).json("SUCESSO")
        }else{
            res.status(200).json("NEGATIVO")
        }
        
    }

    registerUser(req, res) {

        let rawdata = fs.readFileSync('./data/users.json');
        let student = JSON.parse(rawdata)

        const user_correto = student.filter(user => user.email == req.body['email']);

        
        if(user_correto.length > 0){
            res.status(200).json("Usuario ja cadastrado!")
        }else{
            
            student.push(req.body)
            
            let data = JSON.stringify(student);

            fs.writeFileSync('./data/users.json', data);

            res.status(200).json("Usuario cadastrado")
        }

    }

    registerImage(req, res) {

        

        // image = req.FILES["image"]

        // data = json.loads(req.data['data'])
        
        // let student = JSON.parse(data)
        
        console.log("DATA",req.body['data'])


        res.status(200).json("TESTE")


    }

    lista(req, res, next) {
        res.status(201).send('Requisição lista com sucesso!');
    }

    cadastro(req, res, next) {
        res.status(201).send('Requisição cadastro com sucesso!');
    }

    put(req, res, next) {
        let id = req.params.id;
        res.status(201).send(`Requisição recebida com sucesso! ${id}`);
    }

    delete(req, res, next) {
        let id = req.params.id;
        res.status(200).send(`Requisição recebida com sucesso! ${id}`);
    }

}

module.exports = new UserController();