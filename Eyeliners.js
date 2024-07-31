document.addEventListener('DOMContentLoaded', () => {
    // Create and set up the head section
    const head = document.head;

    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    head.appendChild(metaCharset);

    const title = document.createElement('title');
    title.textContent = 'Stacy Talan';
    head.appendChild(title);

    const linkStylesheet = document.createElement('link');
    linkStylesheet.setAttribute('rel', 'stylesheet');
    linkStylesheet.setAttribute('href', './stacytalan.css');
    head.appendChild(linkStylesheet);

    const linkFavicon = document.createElement('link');
    linkFavicon.setAttribute('rel', 'shortcut icon');
    linkFavicon.setAttribute('href', 'favicon.ico');
    head.appendChild(linkFavicon);

    // Create and set up the body section
    const body = document.body;

    const imgLogo = document.createElement('img');
    imgLogo.setAttribute('src', 'logo.jpg');
    imgLogo.setAttribute('alt', 'logo');
    imgLogo.setAttribute('id', 'logo');
    body.appendChild(imgLogo);

    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'wrapper');
    body.appendChild(wrapper);

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
    wrapper.appendChild(nav);

    const br1 = document.createElement('br');
    wrapper.appendChild(br1);

    const h1 = document.createElement('h1');
    h1.textContent = 'Stacy Talan Black Eyeliner';
    wrapper.appendChild(h1);

    const h2_1 = document.createElement('h2');
    h2_1.textContent = 'About the Eyeliner';
    wrapper.appendChild(h2_1);

    const p1 = document.createElement('p');
    p1.textContent = "Stacy Talan Black Eyeliner is a must-have in every woman's makeup bag. Here are some of the features of this amazing product:";
    wrapper.appendChild(p1);

    const ul1 = document.createElement('ul');
    const features = [
        { strong: 'Intense Black Color:', text: 'The eyeliner is highly pigmented and provides an intense black color that lasts all day long.' },
        { strong: 'Easy to Apply:', text: 'The eyeliner has a smooth and creamy texture that glides on easily, making it easy to apply even for beginners.' },
        { strong: 'Long-Lasting:', text: 'The formula is smudge-proof and water-resistant, ensuring that the eyeliner stays in place for hours.' },
        { strong: 'Versatile:', text: 'The eyeliner can be used to create a variety of looks, from a simple everyday look to a bold and dramatic look for a night out.' }
    ];

    features.forEach(feature => {
        const li = document.createElement('li');
        const strong = document.createElement('strong');
        strong.textContent = feature.strong;
        li.appendChild(strong);
        li.append(` ${feature.text}`);
        ul1.appendChild(li);
    });

    wrapper.appendChild(ul1);

    const h2_2 = document.createElement('h2');
    h2_2.textContent = 'Why Choose Stacy Talan Black Eyeliner?';
    wrapper.appendChild(h2_2);

    const p2 = document.createElement('p');
    p2.textContent = "If you're looking for an eyeliner that provides intense black color and stays in place all day long, Stacy Talan Black Eyeliner is the perfect choice for you. The formula is easy to apply and can be used to create a variety of looks. Plus, the brand is known for its high-quality products, so you can trust that you're getting the best of the best.";
    wrapper.appendChild(p2);

    const br2 = document.createElement('br');
    wrapper.appendChild(br2);

    const address = document.createElement('address');
    address.setAttribute('id', 'contact');
    address.innerHTML = 'Sparta, NJ 07871<br><br><span>888-555-5555</span><br><br>';
    wrapper.appendChild(address);

    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.innerHTML = 'Copyright &copy; 2020 Stacy Talan Inc.<br><a href="mailto:babrovaana@gmail.com">babrovaana@gmail.com</a>';
    body.appendChild(footer);
});
