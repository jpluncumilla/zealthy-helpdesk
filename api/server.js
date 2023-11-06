const express = require('express')
const mongoose = require('mongoose')
const Helpdesk = require('./model')
const cors = require('cors')
const app = express()
//JSON Middleware
app.use(express.json(), cors())


app.post('/helpdesk', async (req, res) => {
    try {
        const request = await Helpdesk.create(req.body)
        res.status(200).json(request)

    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})

app.get('/helpdesk', async (req, res) => {
    try {
        const request = await Helpdesk.find({})
        res.status(200).json(request)

    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

app.get('/helpdesk/:id', async (req, res) => {
    try {
        const {id} = req.params
        const request = await Helpdesk.findById(id)
        res.status(200).json(request)

    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

app.patch('/helpdesk/:id', async (req, res) => {
    try {
        const { id } = req.params
        const newStatus = req.body.status
        const updatedRequest = await Helpdesk.findByIdAndUpdate(id, { status: newStatus }, { new: true })

        if (!updatedRequest) return res.status(404).json({ message: 'ID not found' })
        res.status(200).json(updatedRequest)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

app.listen(3001, () => {
    console.log('Node API properly running')
})

mongoose.connect('mongodb+srv://admin:admin123@zealthy.meqygwy.mongodb.net/Help-Desk?retryWrites=true&w=majority').then(
    () => console.log("Connected to DB")
).catch(
    (err) => console.log('Error found:', err)
)