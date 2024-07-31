document.addEventListener('DOMContentLoaded', () => {
    // Create and set up the head section
    const head = document.head;

    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    head.appendChild(metaCharset);

    const title = document.createElement('title');
    title.textContent = 'Pet Set Poop Bags';
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

    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Pet Set Poop Bags';
    header.appendChild(h1);
    body.appendChild(header);

    const main = document.createElement('main');
    const section = document.createElement('section');
    main.appendChild(section);

    const container = document.createElement('div');
    container.classList.add('container');
    section.appendChild(container);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    container.appendChild(productInfo);

    const infoList = document.createElement('ul');
    const infoItems = [
        'ENVIRONMENT MATTERS: 38% Biobased dog poop bags meet USDA Certified and use recycled materials in our packaging and roll core to offer a much green way to dispose of dog waste.',
        'LARGE DOG POOP BAGS: Bags with dimensions 9*13 inches, flat bottom, large enough for all sizes dogs and cats. Each roll with dimensions 1.18*2.36 inches fits all standard-size leash dispensers.',
        'New Version: Be a part of sustainable living is always the purpose of PET N PET. These poop bags are made of less plastic and more bio based materials. They may feel softer than before but actually 16.66% thicker, absolutely strong enough. Let\'s benefit our earth from now.',
        'EASY TO USE: The sticker doggie poop bags is serrated down the middle without tearing the first bag when you use it. Doggy bags with a unique tear perforation and "Open" arrow, easy to tear off, open and detach from the roll.'
    ];

    infoItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        infoList.appendChild(li);
    });

    productInfo.appendChild(infoList);

    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');
    container.appendChild(productDetails);

    const h2 = document.createElement('h2');
    h2.textContent = 'Product Details:';
    productDetails.appendChild(h2);

    const detailsList = document.createElement('ul');
    const detailsItems = [
        'Brand: Pet Set by Stacy Talan',
        'Dimensions: 9 x 13 inches',
        'Composition: at least 38% biobased materials, with recycled packaging and roll core',
        'Dispenser: fits most standard-size poop bag rolls, clips onto leash or purse',
        'Color: green'
    ];

    detailsItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        detailsList.appendChild(li);
    });

    productDetails.appendChild(detailsList);

    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', 'PoopBag1.jpg');
    imgProduct.setAttribute('alt', 'Poop Bag Dispenser');
    productDetails.appendChild(imgProduct);

    body.appendChild(main);

    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.innerHTML = 'Copyright &copy; 2020 Stacy Talan<br><a href="mailto:babrovaana@gmail.com">babrovaana@gmail.com</a>';
    body.appendChild(footer);
});
