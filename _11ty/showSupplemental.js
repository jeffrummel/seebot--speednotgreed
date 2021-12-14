// const decycle = require('json-cycle').decycle

// module.exports = function(collection) {
//   let destination = {}

//   collection.getAllSorted().forEach(item => {
//     let decycled = JSON.stringify(decycle(collection), null, 2)
//     let destination = item.data.slug
//     let supplemental = item.data.supplmental
    
//     if (typeof destination !== 'string')
//       return
//     if (Array.isArray(editions[destination, supplemental]) )
//       editions[destination, supplemental].push(item)
//     else 
//       editions[destination, supplemental] = [item]
//   })
//   return destination
// }