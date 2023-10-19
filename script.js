const addbtn = document.querySelector(".add-btn");
const clearbtn = document.querySelector(".clear-btn");
const textfeeld = document.querySelector(".input-text");
const tasks = document.querySelector(".h3");
const row = document.querySelector(".row");
let count = 1;


clearbtn.addEventListener("click", () => {
    textfeeld.value = "";
 
});

function delete_1(num){
    document.querySelector('div-'+num).innerHTML=null;
    
};
    

 function result_1(num){
    document.querySelector('di-'+num).style.background="green";
   
    
    


};

addbtn.addEventListener("click", () => {
    if (textfeeld.value === "") {
        alert("Plz write something");
    } else {
        row.style.display = "block";
        row.innerHTML += `
        <div-${count} class="add-task" style="padding:10px;">
        <div>
        <di-${count} style=" background-color:white; padding:5px; height:40px;  border-radius:30px;">
        <label class="h3"> ${
            textfeeld.value
        }</label>
         <button onclick="result_1(${count})" style="margin-left:60%; background-color:white;text-decoration: none;" >☑</button>
       <button onclick="delete_1(${count})" style="background-color:white;text-decoration: none;">❌</button>
       </div>
       </di-${count}>
       </div-${count}> 
`
        textfeeld.value = "";
        count++;
    }
});
