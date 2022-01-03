const db = require('../data/db-config')

async function getNoDLimitByDepth(depth) {
    return db('no_decompression_limit')
        .where('min_depth', '<=', depth)
        .andWhere('max_depth', '>=', depth)
}

module.exports = {
    getNoDLimitByDepth,
}
