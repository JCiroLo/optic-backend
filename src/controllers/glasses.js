const Glasses = require("../models/Glasses");

const glassesCtrl = {};

glassesCtrl.getGlasses = async (_, res) => {
    try {
        const allGlasses = await Glasses.find({});
        res.json({ stateAction: true, allGlasses });
    } catch (e) {
        res.json({ stateAction: false });
    }
}

glassesCtrl.createGlasses = async ({ body }, res) => {
    try {
        const { glassesData } = body;
        const newGlasses = await new Glasses({ ...glassesData }).save();
        res.json({ stateAction: true, newGlasses: newGlasses._id });
    }
    catch (e) {
        res.json({ stateAction: false });
    }
}

glassesCtrl.deleteGlasses = async ({ params }, res) => {
    try {
        await Glasses.findByIdAndDelete(params.id);
        res.json({ stateAction: true });
    } catch (e) {
        res.json({ stateAction: false })
    }
}

glassesCtrl.getMountById = async ({ params }, res) => {
    try {
        const mount = await Glasses.findById(params.id);
        res.json({ mount })
    } catch (e) {
        res.json({ stateAction: false });
    }
}

module.exports = glassesCtrl;