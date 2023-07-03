const mysql =require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    database: 'mytestdb',
    password:'mypass',

  });
  function getALLpersons(){
    return new Promise(function(resolve,reject){
    connection.query(
        `SELECT * from persons`,
        function(err,rows,cols){
            if(err){ reject (err);}
            else{
                resolve(rows)
                console.log(rows)
            }


        }
    )
    })

}
function addNewperson(name,age,city){
    return new Promise(function(resolve,reject){
        connection.query(
  `INSERT INTO persons (name,age,city) values(?,?,?)`,
    [name,age,city ],
    function(err,results){
        if(err){
            reject(err)
        }
        else{
            resolve()
        }
    }
        )

    })
}

module=module.exports={
    getALLpersons,addNewperson
}