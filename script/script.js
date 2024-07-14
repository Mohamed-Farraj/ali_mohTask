let formData = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
};
const form = document.getElementById('form');
async function callApi(link = ``){
    let res = await fetch(link,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    data = await res.json();
    console.log("response",data);
    
    if(data.role == 'user' && data.state == true)
    {
        localStorage.setItem('userName',formData.username)
        window.location.href = "./home.html"
    }
    else{
        document.getElementById('stateMsg').classList.remove('d-none');
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    console.log(formData);
    callApi()
})
