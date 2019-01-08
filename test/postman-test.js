const assert = require('assert')
const schema = require("../sample/schema")
const getPostResults = require("../getPostmanAnalytics")
const collection = require("../sample/CPC - New Next Version.postman_test_run.json")

describe("Get analytics from postman", function() {
    it("should return result from running the postman collection", function () {
        const result = getPostResults(collection)
        Object.keys(result) === Object.keys(schema)
    })
})