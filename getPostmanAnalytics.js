#!/usr/bin/env node

"use strict"

/**
 * @description This function is for gathering results after running your Postman runner, extract your result into a file and print analyzed data.
 * @constructor getPostmanAnalytics
 * @class getPostmanAnalytics
 * @param collection
 * @example getPostmanAnalytics(collection)
 * @author dev360
 */

function getPostmanAnalytics(collection) {    

    var totalTime = collection.totalTime;

    const results = {
        name: collection.name,
        pass: collection.totalPass,
        fail: collection.totalFail,
        totalTime,
        averageTime: (totalTime/60).toFixed(2),
        date: new Date(collection.timestamp)
    }
    
    console.log("Collection Name: %s", collection.name)
    console.log(`Total Pass: ${collection.totalPass}`)
    console.log(`Total Fail: ${collection.totalFail}`)
    console.log(`Total time: ${totalTime}`)
    console.log(`Total Average Time: ${(totalTime/60).toFixed(2)}`)
    console.log(`Date of results: ${new Date(collection.timestamp)}`)

    return results
}

// var total = createTotal().reduce(reducer);
// var average = total/createTotal().length;
// Average from the results;
/*var data =*/ 

// fs.writeFileSync('upcsList.js', data)

// createTotal()
// console.log("The average time taken: ", average);

module.exports = getPostmanAnalytics