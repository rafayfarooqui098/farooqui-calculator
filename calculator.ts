#! usr/bin/env node

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enterfirstnumber", type: "number", name: "firstnumber" },
  { message: "Entersecondnumber", type: "number", name: "secondnumber" },
  {
    message: "select one of the operator to perfoam action",
    type: "list",
    name: "opreator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
  },
]);

//conditional statement
if (asnwer.opreator === "Addition") {

console.log(asnwer.firstnumber + asnwer.secondnumber);
}


else if (asnwer.opreator === "Subtraction"){

console.log(asnwer.firstnumber - asnwer.secondnumber )
}

else if (asnwer.opreator === `Multiplication`){

  console.log(asnwer.firstnumber * asnwer.secondnumber)
}

else if (asnwer.opreator === "Division"){

  console.log(asnwer.firstnumber / asnwer.secondnumber)
}

else {

  console.log(`please select correct opreator`)
}