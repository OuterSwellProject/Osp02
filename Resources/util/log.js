exports.info = function(str) {
    Ti.API.info(new Date() + ': ' + str);
};
 
exports.debug = function(str) {
    Ti.API.debug(new Date() + ': ' + str);
};

exports.error = function(str) {
    Ti.API.error(new Date() + ': ' + str);
};