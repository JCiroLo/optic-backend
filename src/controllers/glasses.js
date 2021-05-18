const Glasses = require("../models/Glasses");

const glassesCtrl = {};

glassesCtrl.getGlasses = async (_, res) => {
    try {
        const allGlasses = await Glasses.find().sort({ updatedAt: -1 });
        res.json({ stateAction: true, allGlasses });
    } catch (e) {
        res.json({ stateAction: false });
    }
}

glassesCtrl.createGlasses = async ({ body }, res) => {
    try {
        const { frameData } = body;
        delete frameData._id, frameData.createdAt, frameData.updatedAt;
        const newGlasses = await new Glasses({ ...frameData }).save();
        res.json({ stateAction: true, newGlasses: newGlasses._id });
    }
    catch (e) {
        console.log(e)
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
        if (mount === null) throw "Error";
        res.json({ stateAction: true, mount })
    } catch (e) {
        res.json({ stateAction: false });
    }
}

glassesCtrl.updateMount = async ({ body, params }, res) => {
    try {
        await Glasses.findOneAndUpdate({ _id: params.id }, body)
        res.json({ stateAction: true })
    } catch (e) {
        console.log("Erros")
        res.json({ stateAction: false });
    }
}

module.exports = glassesCtrl;