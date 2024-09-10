const getGoals = (req,res) => {
    res.status(200).json({
        'message' : "Get Goals"
    })
}

const setGoals = (req,res) => {
    console.log(req.body)
    if(!req.body.text){
        res.status(400)
        throw new Error("inputkan data kalian")
    }
    res.status(200).json({
        'message' : "set goals",
        'data' : req.body
    })
}

const updateGoal = (req,res) => {
    req.status(200).json({
        'message' : `Update Goal ${req.params.id}`
    })
}

const deleteGoal = (req,res) => {
    req.status(200).json({
        'message' : `Delete Goal ${req.params.id}`
    })
}

module.exports = {getGoals, setGoals, updateGoal, deleteGoal}