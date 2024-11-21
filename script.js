document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Form submission intercepted!'); // Debugging
    alert('Form submitted!'); // Test interaction

    emailjs.init('S0zGnki5e8jV2yI19');

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    console.log({ name, email, message }); // Debugging

    emailjs
        .send('service_ra98yyf', 'template_jadi69i', {
            name: name,
            email: email,
            message: message,
        })
        .then(
            () => {
                alert('Email sent successfully!');
                e.target.reset();
            },
            (error) => {
                console.error('EmailJS Error:', error); // Debugging
                alert('Failed to send email. Please try again later.');
            }
        );
});