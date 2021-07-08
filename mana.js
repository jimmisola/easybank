alert('hello');


const toggleButton = document.getElementsByClassName('hamburger')[0];
    const navbarLinks = document.getElementsByClassName('nav-links')[0];

    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('show');
    });

    