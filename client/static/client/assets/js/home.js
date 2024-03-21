// AOS init
AOS.init({
    duration: 1500,
})


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidAlphabetInput(input) {
    const alphabetRegex = /^(?:[a-zA-Z\s-]\s*){2,}$/
    return alphabetRegex.test(input);
}

function isValidNumericInput(input) {
    const numericRegex = /^\d{8,}$/;
    return numericRegex.test(input);
}

function isValidFrequencyInput(input) {
    // const numericRegex = /^\d{3,}$/;
    const numericRegex = /^(?:\d{1,2}|3[0-5][0-9]|36[0-5])$/;
    return numericRegex.test(input);
}

// regex controle
document.getElementById('prospec-form').addEventListener('submit', function(event){
    event.preventDefault();

    // values 
    const email = document.getElementById('email').value
    const nom = document.getElementById('nom').value
    const prenom = document.getElementById('prenom').value
    const tel = document.getElementById('phone_number').value
    const frequency = document.getElementById('frequency').value
    const error = document.getElementById('error_message')

    // validation name
    check_First_Name()
    function check_First_Name() {
        if (isValidAlphabetInput(prenom)) {
            // console.log('Ce prénom est valide:', prenom);
            // go check names
            chec_Last_Name();
        } else {
            // console.log('prénom non valid:', prenom);
            error.innerHTML = "Ce prénom n'est pas valid"
        }
    }

    function chec_Last_Name() {
        if (isValidAlphabetInput(nom)) {
            // console.log('Ce nom est valide:', nom);
            // go check names
            if (email === '') {
                // No data provided in the phone number field
                // console.log("No data provided in the email field");
                check_Phone();
            } else {
                // Data is provided in the phone number field
                // console.log("Data provided in the email field:", tel);
                checkEmail();
            }
            
        } else {
            // console.log('Invalid nom:', nom);
            error.innerHTML = "Ce nom n'est pas valid"
        }
    }

    function checkEmail() {
        if (isValidEmail(email)) {
            // console.log('Email is valid:', email);
            // go check phone number
            if (tel === '') {
                // No data provided in the phone number field
                // console.log("No data provided in the phone number field");
                check_Frequency();
            } else {
                // Data is provided in the phone number field
                // console.log("Data provided in the phone number field:", tel);
                check_Phone();
            }
        } else {
            // console.log('Invalid email:', email);
            error.innerHTML = "Adresse mail invalid"
        }
    }

    function check_Phone() {
        if (isValidNumericInput(tel)) {
            // console.log('Numéro valid:', tel);
            // go check phone number 
            check_Frequency();
        } else {
            // console.log('Numéro invalid:', tel);
            error.innerHTML = "Numéro de téléphone invalid"
        }
    }

    function check_Frequency() {
        if (isValidFrequencyInput(frequency)) {
            // console.log('Fréquence valide:', frequency);
            // go check phone number
            // this.submit(); numericRegex
            document.getElementById('prospec-form').submit();
        } else {
            // console.log('Fréquence invalide:', frequency);
            error.innerHTML = "Adresse mail invalid"
        }
    }

    
    
});


function Menu(e){
    let list = document.querySelector('ul')
    const menuR = document.getElementById('menuR');

    e.name === 'menu' ? (
        e.name = "close", list.classList.add('top-[80px]'), 
        list.classList.add('opacity-100'),
        document.getElementById('menuR').style.display = 'flex',
        document.getElementById('sticky').style.filter = 'blur(3px)',
        console.log("menuR display property value:", menuR.style.display),
        OutsideClose()

    ) : (e.name = "menu", list.classList.remove('top-[80px]'), 
        list.classList.remove('opacity-100'),
        document.getElementById('menuR').style.display = 'none',
        document.getElementById('sticky').style.filter = 'blur(0px)',
        console.log("menuR display property value:", menuR.style.display),
        OutsideClose()
    )
}
// OutsideClose()

function OutsideClose() {
    // console.log("========== !!!");
    const menuR = document.getElementById('menuR');
    if (menuR.style.display === 'flex') {
        document.addEventListener('click', function(event) {
        const menuR = document.getElementById('menuR');
            if (!menuR.contains(event.target)) {
                console.log("========== CLOSED !!!");
            }
        });
    }
}

