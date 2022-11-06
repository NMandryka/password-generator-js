window.addEventListener('DOMContentLoaded', () => {

    const generateRandomPassword = (length, includeNumbers, includeSymbols, includeLowercase, includeUppercase) => {

        const numbers = [1,2,3,4,5,6,7,8,9],
              symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '>', '<', '?', '/', '_'],
              characterCodes = Array.from(Array(26)).map((useless, i) => i + 97),
              lowercaseLetters = characterCodes.map(code => String.fromCharCode(code)),
              uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());

        if(!includeLowercase && !includeSymbols && !includeNumbers && !includeUppercase) return ''

        const availableCharacters = [
            ...(includeNumbers ? numbers : []),
            ...(includeSymbols ? symbols : []),
            ...(includeLowercase ? lowercaseLetters : []),
            ...(includeUppercase ? uppercaseLetters : []),
        ];

        let password = '';

        for(let i = 0; i < length; i++) {

            const randomIndex = Math.floor(Math.random() * availableCharacters.length);
            password += availableCharacters[randomIndex];
            
        }
        
        return password;
    }

    const copyBtn = document.querySelector('.copy'),
          includeSymbols = document.querySelector('#symbols'),
          includeNumbers = document.querySelector('#numbers'),
          includeLowercase = document.querySelector('#lowercase'),
          includeUppercase = document.querySelector('#uppercase'),
          range = document.querySelector('#length'),
          lengthText = document.querySelector('#lengthText'),
          passwordInput = document.querySelector('#password');

    function changePassword() {
        copyBtn.classList.remove('copied');
        passwordInput.value = generateRandomPassword(range.value, includeNumbers.checked, includeSymbols.checked, includeLowercase.checked, includeUppercase.checked)
    }

    range.addEventListener('input', () => {
        lengthText.textContent = range.value; 
        changePassword();
    })

    includeUppercase.addEventListener('change', () => {
        changePassword();
    })

    includeNumbers.addEventListener('change', () => {
        changePassword();
    })

    includeSymbols.addEventListener('change', () => {
        changePassword();
    })

    includeLowercase.addEventListener('change', () => {
        changePassword();
    })

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(passwordInput.value);
        copyBtn.classList.add('copied');
    })
    
})
