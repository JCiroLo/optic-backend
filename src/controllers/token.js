const token = process.env.TOKEN;

const Glasses = require("../models/Glasses"); //---------

const tokenCtrl = {};

tokenCtrl.validateToken = ({ body }, res) => {
    if (!body.token) {
        res.json({ validate: false });
        return;
    }
    if (body.token === token) {
        res.json({ validate: true });
    }
    else {
        res.json({ validate: false });
    }
}

tokenCtrl.validateFB = async (req, res) => {
    console.log(req.params.email, req.params.pass)
    res.json(true);
}

module.exports = tokenCtrl;