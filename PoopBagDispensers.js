document.addEventListener('DOMContentLoaded', () => {
    // Create and set up the head section
    const head = document.head;

    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    head.appendChild(metaCharset);

    const title = document.createElement('title');
    title.textContent = 'Pet Set Poop Bag Dispensers';
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
    h1.textContent = 'Pet Set Poop Bag Dispensers';
    header.appendChild(h1);
    body.appendChild(header);

    const main = document.createElement('main');
    body.appendChild(main);

    // Create first section
    const section1 = document.createElement('section');
    main.appendChild(section1);

    const h2_1 = document.createElement('h2');
    h2_1.textContent = 'Product Description';
    section1.appendChild(h2_1);

    const ul1 = document.createElement('ul');
    const descriptionItems = [
        'Made of durable, leak-proof plastic',
        'Dimensions: 9x13 inches (perfect size to clean up your pet\'s mess)',
        'Available in six different colors: black, blue, yellow, red, light green, and dark green',
        'Made with at least 50% recycled materials for a more environmentally friendly option',
        'Includes a roll of 15 waste bags',
        'Comes with a dispenser that conveniently clips onto a leash or purse',
        'Fits most standard poop bag rolls'
    ];

    descriptionItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul1.appendChild(li);
    });

    section1.appendChild(ul1);

    // Create second section
    const section2 = document.createElement('section');
    main.appendChild(section2);

    const h2_2 = document.createElement('h2');
    h2_2.textContent = 'Available Colors';
    section2.appendChild(h2_2);

    const productImagesDiv = document.createElement('div');
    productImagesDiv.classList.add('product-images');
    section2.appendChild(productImagesDiv);

    const imageItems = [
        { src: 'https://dummyimage.com/300x300/000/fff', alt: 'Pet Set Poop Bags - Black' },
        { src: 'https://dummyimage.com/300x300/00f/fff', alt: 'Pet Set Poop Bags - Blue' },
        { src: 'https://dummyimage.com/300x300/ff0/000', alt: 'Pet Set Poop Bags - Yellow' },
        { src: 'https://dummyimage.com/300x300/f00/fff', alt: 'Pet Set Poop Bags - Red' },
        { src: 'https://dummyimage.com/300x300/090/fff', alt: 'Pet Set Poop Bags - Dark Green' }
    ];

    imageItems.forEach(item => {
        const img = document.createElement('img');
        img.setAttribute('src', item.src);
        img.setAttribute('alt', item.alt);
        productImagesDiv.appendChild(img);
    });

    // Create footer
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.innerHTML = 'Copyright &copy; 2020 Stacy Talan<br><a href="mailto:babrovaana@gmail.com">babrovaana@gmail.com</a>';
    body.appendChild(footer);
});
