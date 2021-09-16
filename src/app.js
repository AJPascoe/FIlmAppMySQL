const command = process.argv[2];
const { addFilm } = require("./film/film.methods")

const app = async () => {
  switch (command) {
    case "add":
      const filmObj = {
        name: process.argv[3],
        actor: process.argv[4],
        like: process.argv[5],
      };
      addFilm(filmObj); // filmObj is passed into the addFilm function
    // case "list":
        // find all fims form MySQL DB
  }
}

app(); 
