const utils = {};

utils.roll = () => {
    // rolls between 2 - 6
    // no rolling 1 for brandi dog
    return Math.floor(Math.random() * Math.floor(5))+2;
}

module.exports = utils;