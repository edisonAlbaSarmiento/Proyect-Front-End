'use strict';

module.exports = function(News) {

    News.updateNews = async (req, res) => {
        console.log('req', req)
        try {
            const updatedUser = {
            brandId: req.body.brandId,

            }
            const userId = req.params.id
            const fundEmployeeUser = await News.app.models.News.findOne({
            where: { id: userId }
            })
            await fundEmployeeUser.updateAttributes(updatedUser)
            res.set('Content-Type', 'application/json')
            return res.status(200).send(fundEmployeeUser)
        } catch (error) {
            const status = (error && error.response && error.response.status) || 500
            return res.status(status).jsonLog(error)
        }
        }

    News.remoteMethod('updateNews', {
    http: { path: '/newsUpdate/:id', verb: 'put' },
    accepts: [
        { arg: 'req', type: 'object', http: { source: 'req' } },
        { arg: 'res', type: 'object', http: { source: 'res' } }
    ],
    returns: { root: true, type: 'object' }
    })
};
