// Decks data array - add or modify decks here easily!
const exampleDecks = [
    {
        name: "Boros Aggro",
        colors: ["R", "W"],
        archetype: "Aggro",
        author: "Community",
        url: "https://moxfield.com/decks/YRt4yhTqL06E-lh5Z2FqWQ"
    },
    {
        name: "Dimir Control",
        colors: ["U", "B"],
        archetype: "Control",
        author: "Community",
        url: "https://moxfield.com/decks/fkqoEHtFF0Gv-UqKETgqdQ"
    },
    {
        name: "Golgari Reanimator",
        colors: ["B", "G"],
        archetype: "Reanimator",
        author: "Community",
        url: "https://moxfield.com/decks/OVXqW4fpqE2arvSBj--mpQ"
    },
    {
        name: "Gruul Ramp",
        colors: ["R", "G"],
        archetype: "Ramp",
        author: "Community",
        url: "https://moxfield.com/decks/247xQoKzX02-2b8bBQdcig"
    },
];

// Function to copy Scryfall query to clipboard
function copyScryfallQuery() {
    const queryText = document.getElementById('scryfall-query').innerText;
    const btnText = document.querySelector('#copy-btn span');

    navigator.clipboard.writeText(queryText).then(() => {
        btnText.innerText = 'Copied!';

        setTimeout(() => {
            btnText.innerText = 'Copy Query';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Function to render color badges
function renderColorBadges(colors) {
    // return colors.map(c => `<span class="color-badge color-${c}">${c}</span>`).join(' ');
    return colors.map(c => `<i class="ms ms-${c.toLowerCase()}"></i>`).join(' ');
}

// Render decks table rows
function renderDecksTable(decks) {
    const tableBody = document.getElementById('decks-table-body');
    if (!tableBody) return;

    if (decks.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center;">No decks found matching search criteria.</td></tr>`;
        return;
    }

    tableBody.innerHTML = decks.map(deck => `
        <tr>
            <td><strong>${deck.name}</strong></td>
            <td>${renderColorBadges(deck.colors)}</td>
            <td>${deck.archetype}</td>
            <td>${deck.author}</td>
            <td><a href="${deck.url}" target="_blank" rel="noopener noreferrer">View Deck &rarr;</a></td>
        </tr>
    `).join('');
}

// Filter decks table based on user search input
function filterDecks() {
    const query = document.getElementById('deck-search').value.toLowerCase();
    const filtered = exampleDecks.filter(deck => {
        return deck.name.toLowerCase().includes(query) ||
               deck.archetype.toLowerCase().includes(query) ||
               deck.author.toLowerCase().includes(query) ||
               deck.colors.join('').toLowerCase().includes(query);
    });
    renderDecksTable(filtered);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderDecksTable(exampleDecks);
});

function openScryfall() {
    window.open("https://scryfall.com/search?q=%28%28game%3Apaper%29+%28set%3Afra+OR+set%3Ahob+OR+set%3Amsh+OR+set%3Asos+OR+set%3Atmt+OR+set%3Aecl+OR+set%3Atla+OR+set%3Aspm+OR+set%3Aeoe+OR+set%3Afin+OR+set%3Atdm+OR+set%3Adft+OR+set%3Afdn%29+%28rarity%3Ac+OR+rarity%3Au%29%29", "_blank", "noopener,noreferrer");
}
