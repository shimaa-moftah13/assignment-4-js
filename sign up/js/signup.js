var signUpName = document.getElementById('inputName')
var signUpEmail = document.getElementById('inputEmail')
var signUpPassword = document.getElementById('inputPassword')
var userList =[]


if( localStorage.getItem("user") != null){
    bookList =  JSON.parse( localStorage.getItem("user"))
}
else{
    userList =[];
}

function addUser(){
    if(signUpName.value == '' || signUpEmail.value == '' || signUpPassword.value == ''){
        document.getElementById('warningName').innerHTML = '<p>All inputs is required</p>'
    }
    else{
        var object ={
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        }
        
        userList.push(object);
        location.href = '../../login/index.html'
        localStorage.setItem('userList', JSON.stringify(userList));
    }
}

// function displayData(){
//     var form ="";

//     for( i=0; i<userList.length; i++){
//         form += ` <tr>
//         <td> ${i} </td>
//         <td> ${bookList[i].name} </td>
//         <td>
    
//         <a onclick="visitSite(${ userListList[i].url })" class="btn btn-success" href="${ bookList[i].url }"> <i class="fa-solid fa-eye me-2"></i>Visit</a>
//         </td>
        
//         <td>
//               <button class="btn btn-warning btn-sm" onclick="setData(${i})" >update</button>
//               <button onclick="deletebook(${i})" class="btn btn-danger btn-sm">delete</button>
//             </td>
//       </tr>`
//     }

//     document.getElementById ("tableBody").innerHTML=form;
// }
