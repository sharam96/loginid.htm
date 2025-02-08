 
        document.getElementById('passwordForm').addEventListener('submit', function(event) { 
            const passwordInput = document.getElementById('password'); 
            const errorMessage = document.getElementById('error'); 
            const regex = /^[a-zA-Z0-9]*$/;  
 
            // Validate password 
            if (!regex.test(passwordInput.value)) { 
                errorMessage.textContent = "Password can only contain letters and numbers."; 
                event.preventDefault(); 
            } else { 
                errorMessage.textContent = "";  
            } 
        }); 
  