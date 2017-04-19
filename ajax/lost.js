/* TODO: Implement the lost AJAX Handler */
module.exports = {
    get: function (req, res){
        var data = require("./data.json");
        res.success(data);
    }
}