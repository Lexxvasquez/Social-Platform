const { Thought } = require('../models');

module.exports = {
    getAllThought(req, res) {
        Thought.find({})
            .select('-__v')
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .select('-__v')
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No Thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    createThought({ body }, res) {
        Thought.create(body)
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => res.json(err));
    },  

    updateThought(req,res) {
        Thought.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
            .then(ThoughtData=>res.json(ThoughtData))  
            .catch(err=> res.json(err)); //         req.Thought._id === req.params.id ?
    },

    removeThought({params},res) {
        Thought.findOneAndDelete({_id:params.id})
            .then(ThoughtData=>res.json(ThoughtData))
            .catch(err=> res.json(err));
    }


}