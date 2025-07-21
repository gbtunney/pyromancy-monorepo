const { Prettier, merge } = require('@snailicide/build-config')
module.exports = merge(Prettier.config, {
    plugins: ['@prettier/plugin-php', '@prettier/plugin-xml'],
})
