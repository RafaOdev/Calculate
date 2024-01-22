const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '7{9G=C}W6a',
    database: 'test'
});

connection.connect((err) => {
    if(err){
        console.error('erro ao se conectar ao banco de dados:', err);
        return;
    }
    console.log('conexão bem sucessida');
})