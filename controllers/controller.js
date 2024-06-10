const userModel = require("../models/userSchema")
const fs = require('fs')

const home = async (req, res) => {
    try {
        let data = await userModel.find({})
        res.render('view', { data })
    } catch (error) {
        console.log(error)
        return false
    }
}

const addPage = async (req, res) => {
    try {
        res.render('add')
    } catch (error) {
        console.log(error);
        return false
    }
}

const postAdd = async (req, res) => {
    const { title, info, date, id, star } = req.body
    try {
        if (id) {
            if (req.file) {
                let image = req.file.path
                let data = await userModel.findById(id)
                fs.unlinkSync(data.image)

                await userModel.findByIdAndUpdate(id, { title, info, date, image, star })
                res.redirect('/')
            } else {
                let data = await userModel.findById(id)
                let image = data.image
                await userModel.findByIdAndUpdate(id, { title, info, date, image, star })
                res.redirect('/')
            }
        } else {
            let image = req.file.path
            await userModel.create({ title, info, date, image, star })
            res.redirect('/')
        }
    } catch (error) {
        console.log(error);
        return false
    }
}

const edit = async (req, res) => {
    res.render('edit')
}

const editData = async (req, res) => {
    try {
        let { id } = req.params
        let data = await userModel.findById(id)
        res.render('edit', { data })
    } catch (error) {
        console.log(error);
        return false
    }
}

const deleteData = async (req, res) => {
    let {id} = req.params
    try {
        let data  =await userModel.findById(id)
        fs.unlinkSync(data.image)

        await userModel.findByIdAndDelete(id)
        res.redirect('/')
    } catch (error) {
        console.log(error);
        return false
    }
}

module.exports = { home, addPage, postAdd, edit, editData,deleteData }