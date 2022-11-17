const { join, resolve } = require('path');
module.exports = () => {
    return {
        resolve: {
            alias: {
                'instant.page': resolve(
                    join(__dirname, '..', 'node_modules', 'instant.page')
                )
            }
        }
    };
}
