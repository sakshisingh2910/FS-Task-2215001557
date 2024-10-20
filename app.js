
document.querySelectorAll('.subject').forEach(cell => {
    cell.addEventListener('click', function() {
        const teacher = this.getAttribute('teacher');
        window.location.href = `teacher.html?teacher=${teacher}`;
    });
});
