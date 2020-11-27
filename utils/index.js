const utils = {};

utils.roll = () => {
    // return Math.floor(Math.random() * 4)+2
    return Math.floor(Math.random() * Math.floor(5))+2;
}

module.exports = utils;