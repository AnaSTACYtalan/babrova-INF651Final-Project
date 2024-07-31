<!DOCTYPE html>
<html>
<head>
    <title>Stacy Talan</title>
    <link rel="shortcut icon" href="./favicon.ico"/>
    <style>
        /* Adding some basic styles to ensure the page looks okay until the JavaScript applies the full styles */
        body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 97%;
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const styleRules = {
                'img': {
                    width: '300px',
                    height: '300px',
                    marginRight: '20px',
                    maxWidth: '100%',
                    height: 'auto',
                },
                '.product-container': {
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px',
                },
                'ul.a': {
                    listStyleType: 'circle',
                },
                'body': {
                    color: '#666666',
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '97%',
                },
                'h1': {
                    color: '#FFFFFF',
                    backgroundColor: '#000033',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right top',
                    padding: '10px',
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    marginBottom: '0',
                },
                'h2': {
                    color: '#3399CC',
                    fontFamily: 'Georgia, "Times New Roman", serif',
                },
                'dt': {
                    color: '#f4cccc',
                },
                '.resort': {
                    color: '#a35c94',
                    fontWeight: 'bold',
                },
                'h3': {
                    color: '#000033',
                    fontFamily: 'Georgia, "Times New Roman", serif',
                },
                '#wrapper': {
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    minWidth: '960px',
                    width: '80%',
                    backgroundColor: '#f5e8e8',
                },
                '#content': {
                    padding: '1px 20px 55px 30px',
                    marginLeft: '190px',
                    listStylePosition: 'inside',
                    backgroundColor: '#ffffff',
                },
                '#contact': {
                    fontSize: '90%',
                    padding: '1px 20px 20px 5px',
                },
                '#footer': {
                    padding: '20px',
                    fontSize: '75%',
                    fontStyle: 'italic',
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    backgroundColor: '#ffffff',
                    marginLeft: '190px',
                    clear: 'both',
                },
                '#content img, #content video, #content embed': {
                    float: 'left',
                    paddingRight: '20px',
                },
                'nav ul': {
                    listStyleType: 'none',
                    padding: '20px',
                },
                'nav a': {
                    fontSize: '1.2em',
                    textDecoration: 'none',
                    transition: 'color 3s ease-out',
                },
                'nav a:visited': {
                    color: '#344873',
                },
                'nav a:hover': {
                    color: '#ffffff',
                },
                'header, hgroup, nav, footer, figure, figcaption, aside, section, article': {
                    display: 'block',
                },
                '#mobile': {
                    display: 'none',
                },
                '#desktop': {
                    display: 'inline',
                },
                'label': {
                    float: 'left',
                    display: 'block',
                    textAlign: 'right',
                    width: '120px',
                    paddingRight: '10px',
                },
                'input, textarea': {
                    display: 'block',
                    marginBottom: '20px',
                },
                '#gallery': {
                    position: 'relative',
                    height: '200px',
                },
                '#gallery ul': {
                    listStyleType: 'none',
                    width: '300px',
                },
                '#gallery li': {
                    display: 'inline',
                    float: 'left',
                    padding: '10px',
                },
                '#gallery img': {
                    borderStyle: 'none',
                },
                '#gallery a': {
                    textDecoration: 'none',
                    textAlign: 'left',
                    color: 'blue',
                },
                '#gallery span': {
                    position: 'absolute',
                    left: '-1000px',
                    opacity: '0',
                },
                '#gallery a:hover span': {
                    position: 'absolute',
                    top: '16px',
                    left: '320px',
                    textAlign: 'center',
                    opacity: '1',
                },
                'figure': {
                    position: 'absolute',
                    left: '280px',
                    textAlign: 'center',
                    opacity: '.25',
                },
                '@media only screen and (max-width: 768px)': {
                    'body': {
                        margin: '0',
                    },
                    '#wrapper': {
                        minWidth: '0',
                        width: 'auto',
                    },
                    '#content': {
                        marginLeft: '0',
                    },
                    'nav': {
                        float: 'none',
                        width: 'auto',
                        padding: '0',
                    },
                    'nav ul': {
                        textAlign: 'center',
                    },
                    'nav li': {
                        padding: '0 0.75em 0 .75em',
                        display: 'inline',
                    },
                    '#footer': {
                        marginLeft: '0',
                    },
                },
                'table': {
                    border: '1px solid #3399CC',
                    width: '80%',
                    borderSpacing: '0',
                },
                'td, th': {
                    padding: '5px',
                    border: '1px solid #3399CC',
                },
                'td': {
                    textAlign: 'center',
                },
                '#text': {
                    textAlign: 'left',
                },
                'tr:nth-of-type(odd)': {
                    backgroundColor: '#F5FAFC',
                },
                '@media only screen and (max-width: 480px)': {
                    'body': {
                        margin: '0',
                    },
                    '#wrapper': {
                        width: 'auto',
                        minWidth: '0',
                        margin: '0',
                    },
                    '#content': {
                        padding: '0.1em 1em 0.1em 1em',
                        fontSize: '90%',
                        margin: '0',
                    },
                    'h1': {
                        margin: '0',
                        fontSize: '1.5em',
                        paddingLeft: '0.3em',
                    },
                    'nav ul': {
                        padding: '0',
                    },
                    'nav li': {
                        display: 'block',
                        margin: '0',
                        borderBottom: '2px solid #330000',
                    },
                    'nav a': {
                        display: 'block',
                    },
                    '#content img': {
                        float: 'none',
                        padding: '0',
                        margin: '0.1em',
                    },
                    '#content ul': {
                        listStylePosition: 'outside',
                    },
                    '#mobile': {
                        display: 'inline',
                    },
                    '#desktop': {
                        display: 'none',
                    },
                    'label': {
                        float: 'none',
                        textAlign: 'left',
                    },
                    '#gallery': {
                        display: 'none',
                    },
                },
                'iframe': {
                    position: 'relative',
                    float: 'left',
                    marginRight: '20px',
                },
            };

            for (const selector in styleRules) {
                if (styleRules.hasOwnProperty(selector)) {
                    const elements = document.querySelectorAll(selector);
                    const rules = styleRules[selector];
                    elements.forEach(element => {
                        for (const rule in rules) {
                            if (rules.hasOwnProperty(rule)) {
                                element.style[rule] = rules[rule];
                            }
                        }
                    });
                }
            }
        });
    </script>
</head>
<body>
<img src="logo.jpg" alt="logo" id="logo">
<div id="wrapper">
    <h1>Stacy Talan</h1>
    <nav>
        <ul>
            <li><a href="./index.html">About Us</a></li>
            <li><a href="./OurProducts.html">Our Products</a></li>
            <li><a href="./ContactUs.html">Contact Us</a></li>
        </ul>
    </nav>
    <div id="content">
        <div style="text-align: center;"><h2>Welcome to Stacy Talan</h2></div>
        <iframe src="https://archive.org/details/twitter-1332705736460283910" width="400" height="300"></iframe>
        <h3><span class="stacytalan">Stacy Talan</span> offers high quality everyday products that are essential for
            people and pets. </h3>
        <p> Competitive prices and high quality of the products will not leave anyone indifferent.</p>
        <div class="product-container">
            <img src="Razor1.jpg" alt="Razor1" class="product-image">
            <div>
                <h3>Portable and Durable facial razors</h3>
                <p>Our facial razors are perfect
