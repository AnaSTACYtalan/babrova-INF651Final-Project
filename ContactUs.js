(input);

        const label = document.createElement('label');
        label.setAttribute('for', product.id);
        label.textContent = product.text;
        productSection.appendChild(label);
        productSection.appendChild(document.createElement('br'));
    });

    form.appendChild(document.createElement('br'));

    const oldornewSection = document.createElement('section');
    oldornewSection.setAttribute('class', 'oldornew');
    const oldornewSpan = document.createElement('span');
    oldornewSpan.textContent = 'Is this request about an existing order?';
    oldornewSection.appendChild(oldornewSpan);
    oldornewSection.appendChild(document.createElement('br'));

    const oldornewYes = document.createElement('input');
    oldornewYes.setAttribute('type', 'radio');
    oldornewYes.setAttribute('name', 'oldornew');
    oldornewYes.setAttribute('id', 'yes');
    oldornewYes.setAttribute('value', 'yes');
    oldornewSection.appendChild(oldornewYes);

    const oldornewYesLabel = document.createElement('label');
    oldornewYesLabel.setAttribute('for', 'yes');
    oldornewYesLabel.textContent = 'Yes';
    oldornewSection.appendChild(oldornewYesLabel);

    const oldornewNo = document.createElement('input');
    oldornewNo.setAttribute('type', 'radio');
    oldornewNo.setAttribute('name', 'oldornew');
    oldornewNo.setAttribute('id', 'no');
    oldornewNo.setAttribute('value', 'no');
    oldornewSection.appendChild(oldornewNo);

    const oldornewNoLabel = document.createElement('label');
    oldornewNoLabel.setAttribute('for', 'no');
    oldornewNoLabel.textContent = 'No';
    oldornewSection.appendChild(oldornewNoLabel);

    form.appendChild(oldornewSection);
    form.appendChild(document.createElement('hr'));
    form.appendChild(document.createElement('br'));

    const ratingSection = document.createElement('section');
    ratingSection.setAttribute('class', 'rating');
    const ratingLabel = document.createElement('label');
    ratingLabel.setAttribute('for', 'experience');
    ratingLabel.textContent = 'How is your overall experience with Stacy Talan so far?';
    ratingSection.appendChild(ratingLabel);
    ratingSection.appendChild(document.createElement('br'));

    const ratingSpanBad = document.createElement('span');
    ratingSpanBad.textContent = 'Bad';
    ratingSection.appendChild(ratingSpanBad);

    const ratingInput = document.createElement('input');
    ratingInput.setAttribute('type', 'range');
    ratingInput.setAttribute('name', 'experience');
    ratingInput.setAttribute('id', 'experience');
    ratingInput.setAttribute('value', '3');
    ratingInput.setAttribute('min', '1');
    ratingInput.setAttribute('max', '5');
    ratingSection.appendChild(ratingInput);

    const ratingSpanGood = document.createElement('span');
    ratingSpanGood.textContent = 'Good';
    ratingSection.appendChild(ratingSpanGood);

    form.appendChild(ratingSection);
    form.appendChild(document.createElement('hr'));

    const submissionSection = document.createElement('section');
    submissionSection.setAttribute('class', 'submission');
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');
    submissionSection.appendChild(submitButton);
    form.appendChild(submissionSection);

    content.appendChild(document.createElement('br'));

    const h3Contact = document.createElement('h3');
    h3Contact.textContent = 'We are also happy to answer any additional questions or help you with returns via phone or email.';
    content.appendChild(h3Contact);

    const emailP = document.createElement('p');
    emailP.textContent = 'Email: babrovaana@gmail.com';
    content.appendChild(emailP);

    content.appendChild(document.createElement('br'));

    const phoneP = document.createElement('p');
    phoneP.textContent = 'Phone number: +1 9173455388';
    content.appendChild(phoneP);

    content.appendChild(document.createElement('br'));

    const h3StoreHours = document.createElement('h3');
    h3StoreHours.textContent = 'Store Hours:';
    content.appendChild(h3StoreHours);

    const hoursP = document.createElement







