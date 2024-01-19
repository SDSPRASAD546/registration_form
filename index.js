const http = require("http");
const fs = require("fs");
const { error } = require("console");

let home_content = "";
let register_contetn = "";
let project1 = "";

fs.readFile("home.html",(error,home)=>{
    if(error){
        throw error;
    }

    home_content = home
}
);

fs.readFile("registration.html",(err,register)=>{
    if(err){
        throw err;
    }

    register_contetn = register;
});
fs.readFile("project.html",(err,project)=>{
    if(err){
        throw err;
    }

    project1 = project;
})


http.createServer((request,response)=>{
    let url = request.url;
    response.writeHead(200,{"cotent-type":"text/html"});
    
    
    switch(url){
        case "/register":
            response.write(register_contetn);
            response.end();
            break;
        case "/project":
            response.write(project1);
            response.end();
            break;
        default:
            response.write(home_content);
            response.end();
            break;
    }

}



).listen(5000)