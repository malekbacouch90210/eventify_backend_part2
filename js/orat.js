// Sample data for existing events (you can modify this or pull from a database later)
let events = [
    { id: 1, name: 'Tech Innovators Conference', type: 'conference', date: '2024-03-10' },
    { id: 2, name: 'Rock Legends Concert', type: 'concert', date: '2024-02-20' },
    { id: 3, name: 'Web Development 101 Webinar', type: 'webinar', date: '2024-01-05' }
];

// Function to display all events
function displayEvents() {
    const eventListDiv = document.getElementById("event-list");
    eventListDiv.innerHTML = ""; // Clear the current event list

    if (events.length === 0) {
        eventListDiv.innerHTML = "<p>No events available.</p>";
    } else {
        const ul = document.createElement("ul");
        events.forEach(event => {
            const li = document.createElement("li");
            li.textContent = `${event.name} - ${event.date} (${event.type})`;
            ul.appendChild(li);
        });
        eventListDiv.appendChild(ul);
    }
}

// Function to add a new event
function addEvent(eventData) {
    events.push(eventData);
    displayEvents();  // Re-display the updated events list
}

// Event listener for adding a new event
document.getElementById("add-event-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const eventName = document.getElementById("event-name").value;
    const eventType = document.getElementById("event-type").value;
    const eventDate = document.getElementById("event-date").value;

    const newEvent = {
        id: events.length + 1,  // Simple id generation (could be better with a DB)
        name: eventName,
        type: eventType,
        date: eventDate
    };

    addEvent(newEvent);

    // Clear the form fields after submission
    document.getElementById("event-name").value = "";
    document.getElementById("event-type").value = "conference";
    document.getElementById("event-date").value = "";
});

// Display existing events when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    displayEvents();
});
