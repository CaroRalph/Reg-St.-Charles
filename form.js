const form = document.getElementById('form')

form.addEventListener('submit', (e)=>{e.preventDefault();

  const username =
  document.getElementById('username').value; 
  const Email = 
  document.getElementById('Email').value;
  const Password = 
  document.getElementById('Password').value; 

  const confirmPassword =
   document.getElementById('con-pass').value;



if(username===''){
  alert('username is required');
return;
}

if(!validateEmail(Email)){
  alert('invalid email');
  return;
}

if(password.length<8){
  alert('Password must be at least 8 characters');
  return;
}

form.Submit();
})

functionvalidateEmail(email){
  const emailRegex = /^[a-zA-Z0-9.%+-]+@[a-Za-Z0-9.-]+\.[a-ZA-Z]{2,}$/;
}

