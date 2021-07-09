let btnSumbit = document.getElementById("btn-submit");

btnSumbit.addEventListener("click", function(){
    alert("It Works");
});

const req = new XMLHttpRequest();
req.open ("GET","https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json");
req.send();
req.onload = () =>{
    if(req.status === 200){
        console.log(JSON.parse(req.response));
    } else{
        alert(`error = ${req.response}`); 
    }
};