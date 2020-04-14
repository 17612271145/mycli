const path = require('path')
const config = require('../config')
const baseLoader = require('./loader')
let basePath = function(dirPath){
  return path.resolve(__dirname,'../',dirPath)
}
module.exports = {
  entry:basePath(config.entry || 'src/main.js'),
  output:{
    filename: config.output.filename || '[name].bundle.js',
    path: basePath(config.output.path || 'dist')
  },
  module:{
    rules:config.rules?[...baseLoader,...config.rules]:[...baseLoader],  
  }
}