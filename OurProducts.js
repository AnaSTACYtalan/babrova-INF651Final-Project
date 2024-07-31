document.addEventListener('DOMContentLoaded', () => {
    // Create and set up the head section
    const head = document.head;

    const title = document.createElement('title');
    title.textContent = 'Stacy Talan :: Our Products';
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

    const h1 = document.createElement('h1');
    h1.textContent = 'Stacy Talan';
    wrapper.appendChild(h1);

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

    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    wrapper.appendChild(content);

    const h2 = document.createElement('h2');
    h2.textContent = 'Products That Make Us Proud';
    content.appendChild(h2);

    const productLinks = [
        { href: './FacialRazors.html', text: 'Facial Razors' },
        { href: './Eyeliners.html', text: 'Eyeliners' },
        { href: './PoopBags.html', text: 'Poop Bags' },
        { href: './PoopBagDispensers.html', text: 'Poop Bag Dispensers' }
    ];

    productLinks.forEach(item => {
        const br1 = document.createElement('br');
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', item.href);
        a.textContent = item.text;
        li.appendChild(a);
        content.appendChild(br1);
        content.appendChild(li);
        content.appendChild(document.createElement('br'));
    });

    const h3 = document.createElement('h3');
    h3.textContent = 'Price list for small retail';
    content.appendChild(h3);

    content.appendChild(document.createElement('br'));

    const table = document.createElement('table');
    content.appendChild(table);

    const tableHeaders = ['Name of the Product', 'Quantity', 'Price'];
    const headerRow = document.createElement('tr');

    tableHeaders.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    const tableData = [
        { name: 'Razors', quantity: '10', price: '$5.99' },
        { name: 'Eyeliners', quantity: '20', price: '$2.50' },
        { name: 'Poop Bags', quantity: '50', price: '$10.99' },
        { name: 'Poop Dispensers', quantity: '5', price: '$8.99' }
    ];

    tableData.forEach(item => {
        const tr = document.createElement('tr');

        const tdName = document.createElement('td');
        tdName.textContent = item.name;
        tr.appendChild(tdName);

        const tdQuantity = document.createElement('td');
        tdQuantity.textContent = item.quantity;
        tr.appendChild(tdQuantity);

        const tdPrice = document.createElement('td');
        tdPrice.textContent = item.price;
        tr.appendChild(tdPrice);

        table.appendChild(tr);
    });

    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.innerHTML = 'Copyright &copy; 2020 Stacy Talan<br><a href="mailto:babrovaana@gmail.com">babrovaana@gmail.com</a>';
    content.appendChild(footer);
});
