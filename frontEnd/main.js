window.addEventListener("DOMContentLoaded",showonscreen);

function showonscreen(){
    axios.get('http://localhost:4000')
        .then(expenses=>{
            //console.log(expenses.data)
            for(let i=0;i<expenses.data.length;i++){
                addNewLineElement(expenses.data[i]);
            }
        })
        .catch(err=>console.log(err))
    ;    
}

const form=document.getElementById('form');

form.addEventListener('submit',sendData);

function sendData(e){
    e.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
    //console.log(e);
    url='http://localhost:4000';

    if(name.length>0 && email.length>0 && phone.length>0){
        const obj={
            name:name,
            email:email,
            phone:phone
        }
        //console.log('req ',obj);
        axios.post(url,obj).then((res)=>{
            addNewLineElement(obj);
        console.log('Request Sent',res.data)}).catch(err=>console.log(err))
    }

}

function addNewLineElement(object){
    console.log('adding new element');
    var items = document.getElementById('items');
    var li=document.createElement('li');
    li.className='list-item';
    li.appendChild(document.createTextNode(object.name+' '+ object.email+" "+object.phone));
    items.append(li);
}