const db = require("../data/dbConfig.js")

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find(){
    return db('schemes')
}

function findById(id){
    return db("schemes").where({id: id}).first()
}

function findSteps(id){
    return (
        db('steps')
        .join('schemes', 'schemes.id', 'steps.scheme_id')
        .select("steps.id","schemes.scheme_name", "steps.step_number", "steps.instructions")
        .orderBy("step_number")
        .where({scheme_id: id})
    )
}

function add(scheme){
    return db('schemes').insert(scheme, "id")
}

function update(changes, id){
    return (
        db('schemes').where({id: id}).update()
    )
}

function remove(id){
    return db(`schemes`).where({id: id}).delete()
}