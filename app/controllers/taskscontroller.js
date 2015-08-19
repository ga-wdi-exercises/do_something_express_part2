var tasks = [
  {id: 1, body: "firsttodo", completed: false},
  {id: 2, body: "secondtodo", completed: false},
  {id: 3, body: "thirdtodo", completed: false},
  {id: 4, body: "fourthtodo", completed: false},
  {id: 5, body: "fifthtodo", completed: false},
]

function taskSetup(app){

//index route
app.get("/tasks", function (req, res){
  res.json(tasks);
});

//new route
app.get("/tasks/new", function (req, res){
  res.send("new");
});

//show route
app.get("/tasks/:id", function (req, res){
  for(var a = 0; a < tasks.length; a++){
    if (tasks[a].id == req.params.id){
      res.json(tasks[a])
    }
  }
});

//create route
app.post("/tasks", function (req, res){
  var newTask = {id: req.body.id, body: req.body.body, completed: req.body.completed}
  tasks.push(newTask)
  res.send(newTask);
  res.json(newTask);
});

//edit route
app.get("tasks/:id/edit", function (req, res){
  res.send("edit");
});

//update route
app.patch("/tasks/:id", function (req, res){
  res.send("update");
});

//delete route
app.delete("/tasks/:id", function (req, rees){
  res.send("delete");
});
}
//what in your page you are saving to a variable and how you will reference that in your index.js
exports.taskSetup = taskSetup;
