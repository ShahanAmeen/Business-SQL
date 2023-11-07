const connection = require("./connections.js")
const inquirer = require("inquirer")


function start(){
    inquirer.prompt([
        {
            type:"list",
            message: "What would you like to do?",
            name: "mainPrompt",
            choices: ["Show All Departments", "Show All Roles", "Show All Employees", "Add Department", "Add Role", "Add Employee"]//add other choices here in array
        },
    ]).then(answer =>{
        if(answer.mainPrompt === "Show All Departments"){
            showDepartments()
        }
        else if(answer.mainPrompt === "Show All Roles"){
            showRoles()
        }
        else if(answer.mainPrompt === "Show All Employees"){
            showEmployees()
        }else if(answer.mainPrompt === "Add Department"){
            AddDepartment()
        }else if(answer.mainPrompt === "Add Role"){
            AddRole()
        }else if(answer.mainPrompt === "Add Employee"){
            AddEmployee()
        }
        //so on
    })
}



function showDepartments(){
    connection.query("SELECT * FROM deparment", (err, res)=>{
        if (err) throw err
        console.table(res)
        start()
    })
}
function showRoles(){
    connection.query("SELECT * FROM role", (err, res)=>{
        if (err) throw err
        console.table(res)
        start()
    })
}
function showEmployees(){
    connection.query("SELECT * FROM employee", (err, res)=>{
        if(err) throw err
        console.table(res)
        start()
    })
}

function AddDepartment(){
    inquirer.prompt([
    {type:"input",
    name:"Add_Department",
    message:"Please enter of the new department you would like to add"
    }
    ])
    .then(answer =>{
     connection.query("insert into deparment set ?", 
     {
        name: answer.Add_Department
     }) 
     start()  
    })
    
}

function AddRole(){

    inquirer.prompt([
    {
    type:"input",
    name:"Add_Title",
    message:"What is the title for the new role?"
    },
    {
    type:"input",
    name:"Add_Salary",
    message:"What is the salary for the new role?"
    },
    {
     type:"list",
     name:"Add_Department_id",
     message:"What is the department_id for this role?",
    // integer choices match INT type in schema
     choices:[1,2]
    },
    ])
    .then(answer => {
     connection.query("insert into role set ?", 
     {
        title: answer.Add_Title,
        salary: answer.Add_Salary,
        deparment_id: answer.Add_Department_id
     }, function(err){
        if (err) throw err
            start() 
     })  
  
    })
    
}
function AddEmployee(){
    inquirer.prompt([
    {
    type:"input",
    name:"first_name",
    message:"What is the first name for the empkoyee?"
    },
    {
    type:"input",
    name:"last_name",
    message:"What is the last name for the employee?"
    },
    {
     type:"list",
     name:"Role_Id",
    message:"What is the role_id for this employee",
    // integer choices match INT type in schema
    choices:[1,2,3,4]
    },
    {
    type:"list",
    name:"Manager_ID",
    message:"What is the manger id for this employee",
    // integer choices match INT type in schema
     choices:[1,2,3,4]
    },
    ])
    .then(answer =>{
     connection.query("insert into employee set ?", 
     {
        first_name: answer.first_name,
         last_name: answer.last_name,
         role_id: answer.Role_Id,
        manager_id:  answer.Manager_ID
     })  
     start()  
    })
    
}





start()