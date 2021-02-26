const { json } = require("body-parser");
const db = require("../models");
const Joke = db.joke;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    console.log(req.body)
    const joke = {
    joke: req.body.joke,
    id_user: req.body.id_user,
    }
    console.log(joke)
    Joke.create(joke).then(data=>{
    res.send(data)
    })
  };
  exports.findjoke = (req, res) => {
    const id = req.param.id
    console.log(id)
    Joke.findAll({
        where: {
          id: {
            [Op.or]: id
          }
        }
    }).then(data=>{
        res.send(data)
    })
  };
  exports.deletejoke = (req, res) => {
    const id = req.params.id
    console.log(id)
    Joke.destroy({
        where: {
        id:id
      }})
      Joke.findAll({id_user:id})
      .then(data=>{
          res.send(data)
      })
  };
  exports.upstatus = (req, res) => {
    const id = req.params.id
    const status = req.body.status

    console.log(id)
    
    Joke.update({status:status}, {
        where: { id:id }
    }).then(data=>{
      res.send(data)  
    })
  };
  