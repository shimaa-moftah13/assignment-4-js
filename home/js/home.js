document.getElementById("userName").innerHTML = localStorage.getItem("userName");


document.getElementById("logout").addEventListener("click", function(){
    localStorage.removeItem("userName");
})