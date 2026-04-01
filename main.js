const songs = {
    joy: [
        { title: "Happy", artist: "Pharrell Williams", link: "https://www.youtube.com/results?search_query=Pharrell+Williams+Happy" },
        { title: "내 손을 잡아", artist: "아이유", link: "https://www.youtube.com/results?search_query=아이유+내+손을+잡아" },
        { title: "Sunday Best", artist: "Surfaces", link: "https://www.youtube.com/results?search_query=Surfaces+Sunday+Best" },
        { title: "아주 NICE", artist: "세븐틴", link: "https://www.youtube.com/results?search_query=세븐틴+아주+NICE" }
    ],
    sadness: [
        { title: "야생화", artist: "박효신", link: "https://www.youtube.com/results?search_query=박효신+야생화" },
        { title: "when the party's over", artist: "Billie Eilish", link: "https://www.youtube.com/results?search_query=Billie+Eilish+when+the+party%27s+over" },
        { title: "바람이 분다", artist: "이소라", link: "https://www.youtube.com/results?search_query=이소라+바람이+분다" },
        { title: "Someone You Loved", artist: "Lewis Capaldi", link: "https://www.youtube.com/results?search_query=Lewis+Capaldi+Someone+You+Loved" }
    ],
    embarrassment: [
        { title: "썸 탈꺼야", artist: "볼빨간사춘기", link: "https://www.youtube.com/results?search_query=볼빨간사춘기+썸+탈꺼야" },
        { title: "High Hopes", artist: "Panic! At The Disco", link: "https://www.youtube.com/results?search_query=Panic+At+The+Disco+High+Hopes" },
        { title: "그건 니 생각이고", artist: "장기하와 얼굴들", link: "https://www.youtube.com/results?search_query=장기하와+얼굴들+그건+니+생각이고" },
        { title: "Colors", artist: "Stella Jang", link: "https://www.youtube.com/results?search_query=Stella+Jang+Colors" }
    ],
    hurt: [
        { title: "끝", artist: "권진아", link: "https://www.youtube.com/results?search_query=권진아+끝" },
        { title: "traitor", artist: "Olivia Rodrigo", link: "https://www.youtube.com/results?search_query=Olivia+Rodrigo+traitor" },
        { title: "기억을 걷는 시간", artist: "NELL", link: "https://www.youtube.com/results?search_query=NELL+기억을+걷는+시간" },
        { title: "Elastic Heart", artist: "Sia", link: "https://www.youtube.com/results?search_query=Sia+Elastic+Heart" }
    ],
    anxiety: [
        { title: "수고했어, 오늘도", artist: "옥상달빛", link: "https://www.youtube.com/results?search_query=옥상달빛+수고했어+오늘도" },
        { title: "Modern Loneliness", artist: "Lauv", link: "https://www.youtube.com/results?search_query=Lauv+Modern+Loneliness" },
        { title: "한숨", artist: "이하이", link: "https://www.youtube.com/results?search_query=이하이+한숨" },
        { title: "Let It Be", artist: "The Beatles", link: "https://www.youtube.com/results?search_query=The+Beatles+Let+It+Be" }
    ],
    anger: [
        { title: "Faint", artist: "Linkin Park", link: "https://www.youtube.com/results?search_query=Linkin+Park+Faint" },
        { title: "Kill This Love", artist: "BLACKPINK", link: "https://www.youtube.com/results?search_query=BLACKPINK+Kill+This+Love" },
        { title: "abcdefu", artist: "GAYLE", link: "https://www.youtube.com/results?search_query=GAYLE+abcdefu" },
        { title: "Born Hater", artist: "에픽하이", link: "https://www.youtube.com/results?search_query=에픽하이+Born+Hater" }
    ]
};

const moodButtons = document.querySelectorAll('.mood-btn');
const resultContainer = document.getElementById('recommendation-result');
const body = document.body;

let lastSongTitle = ""; // To prevent immediate repetition

moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.getAttribute('data-mood');
        
        // Update active state
        moodButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update background theme
        body.className = `mood-${mood}`;

        // Recommendation with animation
        resultContainer.classList.remove('show');
        
        setTimeout(() => {
            recommendSingleSong(mood);
            resultContainer.classList.add('show');
        }, 300);
    });
});

function recommendSingleSong(mood) {
    const moodSongs = songs[mood];
    let availableSongs = moodSongs;

    // If there's more than 1 song, filter out the last recommended one to ensure variety
    if (moodSongs.length > 1) {
        availableSongs = moodSongs.filter(song => song.title !== lastSongTitle);
    }

    const randomIndex = Math.floor(Math.random() * availableSongs.length);
    const selectedSong = availableSongs[randomIndex];
    
    lastSongTitle = selectedSong.title;

    resultContainer.innerHTML = `
        <div class="song-card glass">
            <div class="song-info">
                <p class="mood-label">${getMoodEmoji(mood)} 지금 당신에게 필요한 곡</p>
                <h3>${selectedSong.title}</h3>
                <p class="artist-name">${selectedSong.artist}</p>
                <a href="${selectedSong.link}" target="_blank" class="listen-link">지금 들어보기</a>
            </div>
        </div>
    `;
}

function getMoodEmoji(mood) {
    const emojis = {
        joy: "😊",
        sadness: "😢",
        embarrassment: "😳",
        hurt: "💔",
        anxiety: "😰",
        anger: "🔥"
    };
    return emojis[mood] || "🎵";
}
