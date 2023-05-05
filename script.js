
const userLang = navigator.language || navigator.userLanguage;
const frenchLink = document.querySelector('[data-gt-lang="fr"]');
const englishLink = document.querySelector('[data-gt-lang="en"]');

if (userLang.startsWith("en")) {
    frenchLink.style.display = "inline";
    englishLink.style.display = "none";
} else {
    frenchLink.style.display = "none";
    englishLink.style.display = "inline";
}

// Détect clic and display 
englishLink.addEventListener('click', function () {
    console.log('en')
    frenchLink.style.display = 'block';
    englishLink.style.display = 'none';
});

frenchLink.addEventListener('click', function () {
    englishLink.style.display = 'block';
    frenchLink.style.display = 'none';
});