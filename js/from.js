document.getElementById("login-btn").addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-code').value;
    
    if(phoneNumber === '01818186676' && pinNumber === '1234'){
        
        window.location.href = "/home.html"
    }
    else{
        alert('wrong phone and pin number')
    }



})