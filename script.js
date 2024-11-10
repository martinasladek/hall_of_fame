// Function to fetch CSV from Canvas and display data
async function fetchCSV() {
    try {
        const response = await fetch('https://canvas.sussex.ac.uk/courses/31532/files/5290283?wrap=1');
        const data = await response.text();

        // Parse the CSV data (assuming first line is header)
        const rows = data.split('\n').slice(1);

        const container = document.getElementById('data-container');

        rows.forEach(row => {
            const [name, award] = row.split(',');

            // Create a div for each name-award pair
            const entry = document.createElement('div');

            // Create and append the name
            const nameElement = document.createElement('span');
            nameElement.textContent = name.trim();
            entry.appendChild(nameElement);

            // Create and append the award
            const awardElement = document.createElement('span');
            awardElement.textContent = award.trim();
            entry.appendChild(awardElement);

            // Add classes for both so I can target them with CSS
            nameElement.classList.add('name-class');
            awardElement.classList.add('award-class');

            // Append the entry to the container
            container.appendChild(entry);
        });
    } catch (error) {
        console.error('Error fetching or processing CSV:', error);
    }
}

fetchCSV();
