const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoal, deleteGoal} = require('../controllers/goalController')

// router.get('/', (req,res) => {
//     res.status(200).json({
//         name:'ripaldi'
//     })
// })

// router.post('/', (req,res) => {
//     res.status(200).json({
//         name:'Ripaldi'
//     })
// })

router.get('/', getGoals)
router.post('/', setGoals)

router.put('/',(req,res) => {
    res.json({
        message: "sudah terupdate"
    })    
})

module.exports = router