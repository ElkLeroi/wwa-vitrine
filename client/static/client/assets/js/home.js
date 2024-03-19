function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidAlphabetInput(input) {
    const alphabetRegex = /^[a-zA-Z]{2,}$/;
    return alphabetRegex.test(input);
}

function isValidNumericInput(input) {
    const numericRegex = /^\d{8,}$/;
    return numericRegex.test(input);
}

// 



        function Menu(e){
            let list = document.querySelector('ul')
            const menuR = document.getElementById('menuR');

            e.name === 'menu' ? (
                e.name = "close", list.classList.add('top-[80px]'), 
                list.classList.add('opacity-100'),
                console.log("Done"),
                document.getElementById('menuR').style.display = 'flex',
                document.getElementById('sticky').style.filter = 'blur(3px)',
                console.log("menuR display property value:", menuR.style.display),
                OutsideClose()

            ) : (e.name = "menu", list.classList.remove('top-[80px]'), 
                list.classList.remove('opacity-100'),
                document.getElementById('menuR').style.display = 'none',
                document.getElementById('sticky').style.filter = 'blur(0px)',
                console.log("menuR display property value:", menuR.style.display)
            )
        }
        
        function OutsideClose() {
            console.log("Here we go !!!");
            if (menuR.style.display === 'flex') {
                document.addEventListener('click', function(event) {
                const menuR = document.getElementById('menuR');
                    if (!menuR.contains(event.target)) {
                        document.getElementById('menuR').style.display = 'none';
                        document.getElementById('sticky').style.filter = 'blur(0px)';
                    }
                });
            }
        }
        
        
    </script>

