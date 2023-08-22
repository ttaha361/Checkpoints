const mailInput =  document.querySelector('#mail');
const passInput = document.querySelector('#pass');//going good

const loginButton = document.getElementById('loginButton');
const regButton = document.getElementById('registerButton');

var dataArray = JSON.parse(localStorage.getItem('userStorage'));
if (dataArray == null){ dataArray = [];}

regButton.addEventListener('click', ()=> {
    if(mailInput.value != "" && passInput.value != ""){
        for(i = 0; i < dataArray.length; i++) {
            if (dataArray[i].Mail == mailInput.value) {
                alert('Mail Already Registered');
                return false;
            }

        }
        var newUser = {Mail: mailInput.value, Password: passInput.value, loginCounter: 0};
        dataArray.push(newUser);
        localStorage.setItem('userStorage', JSON.stringify(dataArray));
        alert('Registered')
    }
})


loginButton.addEventListener('click', ()=> {
    if(mailInput.value != "" && passInput.value != "" && dataArray.length != null){
        for(i = 0; i < dataArray.length; i++) {
            if (dataArray[i].Mail == mailInput.value && dataArray[i].Password == passInput.value) {
                alert('Welcome' + " " + mailInput.value);
                dataArray[i].loginCounter += 1;
                localStorage.setItem('userStorage', JSON.stringify(dataArray));
            }
            else if(dataArray[i].Mail == mailInput.value && dataArray[i].Password != passInput.value) {
                alert('Wrong Password');
            }

            else if(dataArray[i].Mail != mailInput.value && dataArray[i].Password == passInput.value) {
                alert('Wrong Mail');
            }
            
        }
        
    } 
})