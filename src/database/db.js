

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./src/database/database.db");

db.serialize( () => {
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
    
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `

//     const values = [
//         "https://images.unsplash.com/photo-1565204294092-1b0870bd37d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//         "Papersider",
//         "Rua Beco Diagonal, Boqueirão",
//         "nº 9/34",
//         "São Paulo",
//         "Praia Grande",
//         "Papéis e Papelão"
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err);
//         }

//         console.log("Cadastrado com Sucesso!");
//         console.log(this);
//     }

//     db.run(query, values, afterInsertData);

//     // db.all(`SELECT * FROM places`, function(err, rows) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Aqui estão os registros!");
//     //     console.log(rows);
//     // })

    // db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Deletado com Sucesso!");
    // })

})

module.exports = db;