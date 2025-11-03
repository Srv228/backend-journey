const lodash = require('lodash')

const names =['Sourav' , 'John' , 'alex' , 'mia']

const capitalize = lodash.map(names,lodash.capitalize)

console.log(capitalize);
