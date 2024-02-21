function loadPage(pageUrl) {
    var contentContainer = document.getElementById('content');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                contentContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Err: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', pageUrl, true);
    xhr.send();
}
var mainBtn = document.getElementById('main-btn');
var aboutBtn = document.getElementById('about-btn');
var contactsBtn = document.getElementById('contacts-btn');

mainBtn.addEventListener('click', function() {
    window.location.href = 'http://localhost:8000/';
});
aboutBtn.addEventListener('click', function() {
    loadPage('about.html');
});
contactsBtn.addEventListener('click', function() {
   loadPage('contacts.html');
});