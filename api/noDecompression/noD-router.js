const router = require('express').Router()
const noD = require('./noD-model')

router.get('/noD', async (req, res, next) => {
    const { depth } = req.body
    try {
        const noDLimit = await noD.getNoDLimitByDepth(depth)
        res.status(200).json(noDLimit)
    } catch (error) {
        next(error)
    }
})

module.exports = router
