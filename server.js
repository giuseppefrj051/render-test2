const express = require('express');
const app = express();
app.use(express.static('web'));

const port = process.env.PORT || 3000;
var server = app.listen(port, listening);
function listening() {console.log(`listening at port ${port} ...`)};


function autoRun() {
    setInterval(callAllAutoFunc, 3000); 
  };

  function callAllAutoFunc(){
    var d = new Date();
    var dFormated = d.toLocaleString();
    console.log(`working ${dFormated}`)
  }

  autoRun();