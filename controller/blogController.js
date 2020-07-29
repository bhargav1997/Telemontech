const Model = require('../model/blogModel');

exports.getAllPost = async (req, res) => {
    // const data = await Model.insertMany({ _id: 1, title: 'test', image: 'test_image', htmlContent: "<html></html>" })
    const data = await Model.find()
    res.status(200).json({ status: 'success', data })
}

exports.createPost = async (req, res) => {
    // console.log(req.body)

    let path = req.files.image.path
    path = path.replace("uploads\\img\\", "");
    const id = await Model.countDocuments()
    req.body._id = id + 1
    req.body.image = path
    // console.log(req.body)
    const data = await Model.create(req.body);
    res.status(200).json({ status: 'success' })
}