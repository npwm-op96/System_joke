const { json } = require("body-parser");
const db = require("../models");
const Joke = db.joke;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
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
    const id = req.param.id_user
    console.log(id)
    Joke.findAll({
        where: {
          id_user: {
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
    .then(data=>{
        res.json({message:"delete success"})
    })
  };
  exports.upstatus = (req, res) => {
    const id = req.params.id
    const status = req.body.status

    console.log(id)
    Joke.update({status:status}, {
        where: { id:id }
    })
    .then(data=>{
        res.json({message:" update status success",
        data:data})
    })
  };
  