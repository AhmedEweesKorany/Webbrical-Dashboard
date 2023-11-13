

if (localStorage.getItem("isSmall") === "yes") {
  sidebarId.classList.add("small-sidebar");
} else {
  sidebarId.classList.remove("small-sidebar");
}

const toggleSidebar = () => {
  if (localStorage.getItem("isSmall") === "yes") {
    localStorage.setItem("isSmall", "no");
    sidebarId.classList.remove("small-sidebar");
  } else {
    localStorage.setItem("isSmall", "yes");
    sidebarId.classList.add("small-sidebar");
  }
};

function serach(){
  const text = document.getElementById("search").value
  let data = []
  //gets table
var oTable = document.getElementById('myTable');

//gets rows of table
var rowLength = oTable.rows.length;

//loops through rows    
for (i = 1; i < rowLength; i++){

  //gets cells of current row  
   var oCells = oTable.rows.item(i).cells;

   //gets amount of cells of current row
   var cellLength = oCells.length;

   //loops through each cell in current row
   for(var j = 0; j < cellLength; j++){
      // get your cell info here

      var cellVal = oCells.item(j).innerHTML;
      data.push(cellVal)
   }
}
  console.log(data);
if(data[1].inculdes(text)){
  console.log("doneeeeee")
  document.getElementById("mybody").innerHTML +=``
}
}
serach()