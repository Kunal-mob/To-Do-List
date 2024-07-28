let a = document.getElementById("input");
let body = document.getElementById("body");
const combtn = document.getElementsByClassName("combtn");
a.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
      add();
  }
});
function add() {
  if (a.value == "") {
    alert("empty data !");
    return;
  }
  var newdiv = document.createElement("div");
  var div = document.createElement("div");
  var newp = document.createElement("p");
  var complete = document.createElement("button");
  var deletebtn = document.createElement("button");
  // complete.classList('complete')
  deletebtn.addEventListener('click',()=>{
    body.removeChild(newdiv);
  }) 
  complete.addEventListener('click',()=>{
    newdiv.classList.toggle('complete');
  })
  complete.classList.add("combtn")
  deletebtn.classList.add("delbtn")
  complete.textContent= "complete";
  deletebtn.textContent= "delete";
  newdiv.classList.add("task");
  newp.textContent = a.value;
  newdiv.appendChild(newp);
  div.appendChild(complete);
  div.appendChild(deletebtn);
  newdiv.appendChild(div);

  document.getElementById("body").appendChild(newdiv);
  a.value = "";
  return;
};
// 
func