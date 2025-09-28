document.addEventListener('DOMContentLoaded', function() {
    // Generic button clicks
    const buttons = document.querySelectorAll('.filter-btn, .sort-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`'${button.textContent.trim()}' button clicked.`);
        });
    });

    // Table action links
    const tableActions = document.querySelectorAll('.user-table a');
    tableActions.forEach(action => {
        action.addEventListener('click', (e) => {
            e.preventDefault();
            const row = e.target.closest('tr');
            const firstCell = row.querySelector('td').textContent;
            console.log(`Action '${e.target.textContent}' performed on row with data: ${firstCell}`);
            alert(`Action '${e.target.textContent}' performed on row with data: ${firstCell}`);
        });
    });
});
