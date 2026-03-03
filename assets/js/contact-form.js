(function() {
    function showEmailSuccess() {
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Email Sent!',
                showConfirmButton: false,
                timer: 900
            });
        }
    }

    function showEmailError(err) {
        var message = 'Something went wrong!';
        if (err && (err.text || err.message)) {
            message = err.text || err.message;
        }
        if (err && err.status === 412 && (!err.text && !err.message)) {
            message = 'EmailJS rejected request (412). Free plan cannot use domain whitelist. Check Email History and reconnect Email Service.';
        }

        if (typeof Swal !== 'undefined') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: message
            });
        } else {
            alert(message);
        }
    }

    function bindContactForm() {
        var form = document.getElementById('contact-form');
        if (!form || typeof emailjs === 'undefined') {
            return;
        }

        if (form.dataset.emailBound === 'true') {
            return;
        }
        form.dataset.emailBound = 'true';

        try {
            emailjs.init('BDr8Qs-jUxeKirf96');
        } catch (error) {
            // no-op when already initialized
        }

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            var submitButton = form.querySelector('button[type=\"submit\"]');
            if (submitButton) {
                submitButton.disabled = true;
            }

            var templateParams = {
                name: ((form.elements.name && form.elements.name.value) || '').trim(),
                email: ((form.elements.email && form.elements.email.value) || '').trim(),
                company: ((form.elements.company && form.elements.company.value) || '').trim(),
                service: ((form.elements.service && form.elements.service.value) || '').trim(),
                message: ((form.elements.message && form.elements.message.value) || '').trim()
            };

            emailjs.send('service_kda5tug', 'template_1ip2c0j', templateParams, 'BDr8Qs-jUxeKirf96')
                .then(function() {
                    showEmailSuccess();
                    form.reset();
                })
                .catch(function(err) {
                    showEmailError(err);
                })
                .finally(function() {
                    if (submitButton) {
                        submitButton.disabled = false;
                    }
                });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindContactForm);
    } else {
        bindContactForm();
    }
})();
