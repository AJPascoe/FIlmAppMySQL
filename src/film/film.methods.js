const Film = require("./fim.model");

exports.addFilm = async (filmObj) => {
    try {
        await Film.sync();
        await Film.create(filmObj);
    } catch (error) {
        console.log(error);
    }
};

