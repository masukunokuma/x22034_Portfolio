const elements = document.querySelectorAll('.elm');

const options = {
    root: null,
    rootMargin: "10px 0px",
    threshold: 0
};

const callback = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
};

const observer = new IntersectionObserver(callback, options);

elements.forEach(element => {
    observer.observe(element);
});