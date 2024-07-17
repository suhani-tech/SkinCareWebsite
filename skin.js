document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

function printSkinType() {
    const skinTypeSelect = document.getElementById('skin-type');
    const selectedValue = skinTypeSelect.value.toLowerCase().replace(' ', '-');
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Selected Skin Type: ${selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1)}`;

    const targetSection = document.getElementById(selectedValue + '-skin');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}


document.querySelectorAll('#ContactUs a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const existingAccount = localStorage.getItem(email);

    if (existingAccount) {
        const accountData = JSON.parse(existingAccount);
        if (accountData.password === password) {
            document.getElementById('message').innerHTML = "Login successful! Redirecting...";
            setTimeout(() => {
                window.open('dashboard.html', '_blank');  // Opens dashboard.html in a new tab
            }, 2000);
        } else {
            document.getElementById('message').innerHTML = "Incorrect password. Please try again.";
        }
    } else {
        const newAccount = {
            name: name,
            age: age,
            email: email,
            password: password
        };
        localStorage.setItem(email, JSON.stringify(newAccount));
        document.getElementById('message').innerHTML = "Account created successfully! Redirecting...";
        setTimeout(() => {
            window.open('dashboard.html', '_blank');  // Opens dashboard.html in a new tab
        }, 2000);
    }
});

