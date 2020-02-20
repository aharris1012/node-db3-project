const db = require("../data/dbConfig")

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
    )}
// 
function add(body) {
    return db('schemes')
        .insert(body)
        .then(([id]) => {
            return findById(id);
        })
}

function update(changes, id) {
    return db('schemes')
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id);
        })
}

function remove(id){
    return db(`schemes`).where({id: id}).delete(id)
}