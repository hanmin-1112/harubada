const songs = {
    happy: [
        { title: "Dynamite", artist: "BTS", link: "https://www.youtube.com/results?search_query=BTS+Dynamite" },
        { title: "Happy", artist: "Pharrell Williams", link: "https://www.youtube.com/results?search_query=Pharrell+Williams+Happy" },
        { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", link: "https://www.youtube.com/results?search_query=Justin+Timberlake+Can%27t+Stop+the+Feeling" },
        { title: "Butter", artist: "BTS", link: "https://www.youtube.com/results?search_query=BTS+Butter" }
    ],
    sad: [
        { title: "Someone Like You", artist: "Adele", link: "https://www.youtube.com/results?search_query=Adele+Someone+Like+You" },
        { title: "Drivers License", artist: "Olivia Rodrigo", link: "https://www.youtube.com/results?search_query=Olivia+Rodrigo+drivers+license" },
        { title: "Fix You", artist: "Coldplay", link: "https://www.youtube.com/results?search_query=Coldplay+Fix+You" },
        { title: "Ending Scene", artist: "IU", link: "https://www.youtube.com/results?search_query=IU+Ending+Scene" }
    ],
    energetic: [
        { title: "Blinding Lights", artist: "The Weeknd", link: "https://www.youtube.com/results?search_query=The+Weeknd+Blinding+Lights" },
        { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", link: "https://www.youtube.com/results?search_query=Uptown+Funk" },
        { title: "Shut Up and Dance", artist: "Walk The Moon", link: "https://www.youtube.com/results?search_query=Walk+The+Moon+Shut+Up+and+Dance" },
        { title: "Next Level", artist: "aespa", link: "https://www.youtube.com/results?search_query=aespa+Next+Level" }
    ],
    chill: [
        { title: "Lofi Hip Hop Radio", artist: "Lofi Girl", link: "https://www.youtube.com/results?search_query=lofi+hip+hop+radio" },
        { title: "Sunflower", artist: "Post Malone & Swae Lee", link: "https://www.youtube.com/results?search_query=Post+Malone+Sunflower" },
        { title: "Weightless", artist: "Marconi Union", link: "https://www.youtube.com/results?search_query=Marconi+Union+Weightless" },
        { title: "Peaches", artist: "Justin Bieber", link: "https://www.youtube.com/results?search_query=Justin+Bieber+Peaches" }
    ]
};

const moodButtons = document.querySelectorAll('.mood-btn');
const recommendationsContainer = document.getElementById('recommendations');
const body = document.body;

moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.getAttribute('data-mood');
        
        // Update active button
        moodButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update background theme
        body.className = `mood-${mood}`;

        // Update recommendations with animation
        recommendationsContainer.classList.remove('show');
        
        setTimeout(() => {
            displayRecommendations(mood);
            recommendationsContainer.classList.add('show');
        }, 300);
    });
});

function displayRecommendations(mood) {
    const selectedSongs = songs[mood];
    recommendationsContainer.innerHTML = '';

    selectedSongs.forEach(song => {
        const card = document.createElement('div');
        card.className = 'song-card glass';
        card.innerHTML = `
            <div class="song-info">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
                <a href="${song.link}" target="_blank" class="listen-link">들어보기</a>
            </div>
        `;
        recommendationsContainer.appendChild(card);
    });
}
