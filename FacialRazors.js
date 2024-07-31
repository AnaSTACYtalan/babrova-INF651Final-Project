document.addEventListener('DOMContentLoaded', () => {
    // Create and set up the head section
    const head = document.head;

    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    head.appendChild(metaCharset);

    const title = document.createElement('title');
    title.textContent = 'Stacy Talan Eyebrow Razor';
    head.appendChild(title);

    const linkStylesheet = document.createElement('link');
    linkStylesheet.setAttribute('rel', 'stylesheet');
    linkStylesheet.setAttribute('href', './stacytalan.css');
    head.appendChild(linkStylesheet);

    const linkFavicon = document.createElement('link');
    linkFavicon.setAttribute('rel', 'shortcut icon');
    linkFavicon.setAttribute('href', 'favicon.ico');
    head.appendChild(linkFavicon);

    const nav = document.createElement('nav');
    const navList = document.createElement('ul');
    const navItems = [
        { href: './index.html', text: 'About Us' },
        { href: './OurProducts.html', text: 'Our Products' },
        { href: './ContactUs.html', text: 'Contact Us' }
    ];

    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', item.href);
        a.textContent = item.text;
        li.appendChild(a);
        navList.appendChild(li);
    });

    nav.appendChild(navList);
    head.appendChild(nav);

    // Create and set up the body section
    const body = document.body;

    const imgLogo = document.createElement('img');
    imgLogo.setAttribute('src', 'logo.jpg');
    imgLogo.setAttribute('alt', 'logo');
    imgLogo.setAttribute('id', 'logo');
    body.appendChild(imgLogo);

    const h1 = document.createElement('h1');
    h1.textContent = 'Stacy Talan Eyebrow Razor';
    body.appendChild(h1);

    const imgRazor = document.createElement('img');
    imgRazor.setAttribute('src', 'eyebrow-razor.jpg');
    imgRazor.setAttribute('alt', 'Stacy Talan Eyebrow Razor');
    body.appendChild(imgRazor);

    const paragraphs = [
        'High quality material: Our peach fuzz face razor is made of good quality and has sharp blade that makes it hard to break and cleans small or thin places easily.',
        'Before shaving, soften the area with lotion or shaving cream to have a smooth experience with the razor',
        'Safe and no scratch feeling on skin: This face shaver has attached fine micro guards with each blade that protects your skin.',
        'You can clean it up easily without pulling or catching the hairs and rough feeling on the skin',
        'Multipurpose Uses: The dermaplane razor for women face is a versatile beauty tool. It works beautifully on eye brows, and touch-up women face hairs anytime.',
        'So you can carry it anywhere with you and use on your face with precision',
        'Packaging may vary but quality stays same: The packaging of facial razor might get change, but quality and the quantity of the product stays the same.',
        '1 Razor set contains 3 color combination',
        'Easy usage: Our face razors plastic handle doesn\'t slip from your hand and provide you an easy control and comfortable styling without making your skin rough'
    ];

    paragraphs.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        body.appendChild(p);
        body.appendChild(document.createElement('br'));
    });

    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.innerHTML = 'Copyright &copy; 2020 Stacy Talan<br><a href="mailto:babrovaana@gmail.com">babrovaana@gmail.com</a>';
    body.appendChild(footer);
});
