export function checkScrollPosition(scrollButton) {
    if (window.pageYOffset > 200) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
}
