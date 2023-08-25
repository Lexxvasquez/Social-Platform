const { User } = require('../models');

module.exports = {
    getAllUser(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then((dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    createUser({ body }, res) {
        User.create(body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.json(err));
    },  

    updateUser(req,res) {
        User.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
            .then(userData=>res.json(userData))  
            .catch(err=> res.json(err)); //         req.user._id === req.params.id ?
    },

    removeUser({params},res) {
        User.findOneAndDelete({_id:params.id})
            .then(userData=>res.json(userData))
            .catch(err=> res.json(err));
    }


}