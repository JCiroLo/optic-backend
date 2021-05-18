const token = 'OP23k';

const tokenCtrl = {};

tokenCtrl.validateToken = ({ body }, res) => {
    console.log(body.token);
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