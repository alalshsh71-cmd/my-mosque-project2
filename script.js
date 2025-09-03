document.addEventListener('DOMContentLoaded', () => {
    const iconItems = document.querySelectorAll('.icon-item');
    const contentSections = document.querySelectorAll('.content-section');

    iconItems.forEach(icon => {
        icon.addEventListener('click', () => {
            // Get the ID of the section to show
            const targetId = icon.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the target section
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Remove and add 'active' class on clicked icon for visual feedback
            iconItems.forEach(item => {
                item.classList.remove('active');
            });
            icon.classList.add('active');
        });
    });
});
