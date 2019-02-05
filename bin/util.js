const fs = require("fs")
class UtilAndServices {

    const accumulator = "" || null
    const currentValue = "" || null 

    constructor(filename) {
        this.filename = filename || (`collection-results${new Date().getDate}`)
        this.reducer = this.reducer.bind(this)
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const saveResults = () => {
        !fs.readdirSync(__dirname + "../../results") ? fs.mkdirSync(__dirname + "../../results") : undefined
        
        fs.writeFile(path.join(__dirname, "../../results", "utf-8", function (err, result) {
            console.log("Finished creating file: ", result)
        })
    }

}

module.exports = UtilAndServices