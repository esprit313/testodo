const input= document.getElementById("input");
const btn = document.getElementById("btn");
const ul =document.getElementById("list");


btn.addEventListener('click',()=>{

    const text =input.value.trim();
    if(text==="")return;
    const li = document.createElement("li");
    li.textContent=text;
    li.classList.add("styleLi");
    ul.appendChild(li);
    const suppBtn=document.createElement("button");
    suppBtn.textContent="Enlevez";
    suppBtn.classList.add("supp");
    li.appendChild(suppBtn);

    suppBtn.addEventListener('click',()=>{
        li.remove()
    });
    input.value="";
});