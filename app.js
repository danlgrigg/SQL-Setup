var Sequelize = require ('sequelize');

var connection = new Sequelize('demo_schema', 'root', 'password',{ dialect: "mysql"})

var Email = connection.define ('email', {
    email: {   type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        
        

    }
});

connection.sync().then(function() {
    Email.findAll().then(function(data){
        console.log(data)
    })
});