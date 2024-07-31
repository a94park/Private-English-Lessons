document.addEventListener('DOMContentLoaded', function () {
    const contactTypeSelect = document.getElementById('c-method');
    const phoneField = document.getElementById('phone-field');
    const emailField = document.getElementById('email-field');
    const textfield = document.getElementById('text-field');
    const kakaofield = document.getElementById('kakao-field');

    contactTypeSelect.addEventListener('change', function () {
        const selectedValue = contactTypeSelect.value;
        
        phoneField.style.display = 'none';
        emailField.style.display = 'none';
        textfield.style.display = 'none';
        kakaofield.style.display = 'none';

        if (selectedValue === 'phone-call') {
            phoneField.style.display = 'block';
        }
        else if (selectedValue === 'e-mail') {
            emailField.style.display = 'block';
        }
        else if (selectedValue === 'kakao') {
            kakaofield.style.display = 'block';
        }
        else if (selectedValue === 'text-message') {
            textfield.style.display = 'block';
        }


    })});