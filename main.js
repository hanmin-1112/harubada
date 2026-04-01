const questions = [
    { text: "오늘 하루 에너지가 넘치고 활기차게 느껴지나요?", moods: ["joy"] },
    { text: "최근에 이유 없이 눈물이 나거나 마음이 가라앉은 적이 있나요?", moods: ["sadness"] },
    { text: "사람들 앞에서 예상치 못한 실수로 얼굴이 붉어진 적이 있나요?", moods: ["embarrassment"] },
    { text: "누군가의 말이나 행동 때문에 마음이 깊게 베인 것 같나요?", moods: ["hurt"] },
    { text: "앞날에 대한 걱정 때문에 밤에 잠을 설치기도 하나요?", moods: ["anxiety"] },
    { text: "최근에 정말 화가 나서 참기 힘들었던 순간이 있었나요?", moods: ["anger"] },
    { text: "세상이 아름다워 보이고 모든 일이 잘 풀릴 것 같은가요?", moods: ["joy"] },
    { text: "혼자 있고 싶고 아무것도 하고 싶지 않은 기분이 드나요?", moods: ["sadness"] },
    { text: "갑작스러운 상황 변화에 어떻게 대처할지 몰라 당황스럽나요?", moods: ["embarrassment"] },
    { text: "사소한 일에도 쉽게 짜증이 나고 공격적으로 변하나요?", moods: ["anger"] }
];

const songs = {
    joy: [
        { title: "Dynamite", artist: "BTS", link: "https://www.youtube.com/results?search_query=BTS+Dynamite" },
        { title: "Happy", artist: "Pharrell Williams", link: "https://www.youtube.com/results?search_query=Pharrell+Williams+Happy" },
        { title: "Hype Boy", artist: "NewJeans", link: "https://www.youtube.com/results?search_query=NewJeans+Hype+Boy" },
        { title: "Love Lee", artist: "AKMU", link: "https://www.youtube.com/results?search_query=AKMU+Love+Lee" },
        { title: "Sugar", artist: "Maroon 5", link: "https://www.youtube.com/results?search_query=Maroon+5+Sugar" },
        { title: "아주 NICE", artist: "SEVENTEEN", link: "https://www.youtube.com/results?search_query=SEVENTEEN+아주+NICE" },
        { title: "Shake It Off", artist: "Taylor Swift", link: "https://www.youtube.com/results?search_query=Taylor+Swift+Shake+It+Off" },
        { title: "Celebrity", artist: "아이유", link: "https://www.youtube.com/results?search_query=아이유+Celebrity" },
        { title: "Candy", artist: "NCT DREAM", link: "https://www.youtube.com/results?search_query=NCT+DREAM+Candy" },
        { title: "LOVE DIVE", artist: "IVE", link: "https://www.youtube.com/results?search_query=IVE+LOVE+DIVE" },
        { title: "Good Time", artist: "Owl City", link: "https://www.youtube.com/results?search_query=Owl+City+Good+Time" },
        { title: "파이팅 해야지", artist: "부석순 (BSS)", link: "https://www.youtube.com/results?search_query=부석순+파이팅+해야지" },
        { title: "Walking On Sunshine", artist: "Katrina", link: "https://www.youtube.com/results?search_query=Walking+On+Sunshine" },
        { title: "Best Day Of My Life", artist: "American Authors", link: "https://www.youtube.com/results?search_query=Best+Day+Of+My+Life" },
        { title: "Don't Stop Me Now", artist: "Queen", link: "https://www.youtube.com/results?search_query=Queen+Don%27t+Stop+Me+Now" },
        { title: "빨간 맛", artist: "Red Velvet", link: "https://www.youtube.com/results?search_query=Red+Velvet+빨간+맛" },
        { title: "I'm Good", artist: "David Guetta", link: "https://www.youtube.com/results?search_query=David+Guetta+I%27m+Good" },
        { title: "Shut Up and Dance", artist: "Walk The Moon", link: "https://www.youtube.com/results?search_query=Shut+Up+and+Dance" },
        { title: "Can't Stop The Feeling!", artist: "Justin Timberlake", link: "https://www.youtube.com/results?search_query=Justin+Timberlake+Can%27t+Stop+The+Feeling" },
        { title: "DALLA DALLA", artist: "ITZY", link: "https://www.youtube.com/results?search_query=ITZY+DALLA+DALLA" }
    ],
    sadness: [
        { title: "밤편지", artist: "아이유", link: "https://www.youtube.com/results?search_query=아이유+밤편지" },
        { title: "Someone Like You", artist: "Adele", link: "https://www.youtube.com/results?search_query=Adele+Someone+Like+You" },
        { title: "Fix You", artist: "Coldplay", link: "https://www.youtube.com/results?search_query=Coldplay+Fix+You" },
        { title: "한숨", artist: "이하이", link: "https://www.youtube.com/results?search_query=이하이+한숨" },
        { title: "Drivers License", artist: "Olivia Rodrigo", link: "https://www.youtube.com/results?search_query=Olivia+Rodrigo+drivers+license" },
        { title: "숨", artist: "박효신", link: "https://www.youtube.com/results?search_query=박효신+숨" },
        { title: "어떻게 이별까지 사랑하겠어", artist: "AKMU", link: "https://www.youtube.com/results?search_query=AKMU+어떻게+이별까지" },
        { title: "너의 모든 순간", artist: "성시경", link: "https://www.youtube.com/results?search_query=성시경+너의+모든+순간" },
        { title: "Glimpse of Us", artist: "Joji", link: "https://www.youtube.com/results?search_query=Joji+Glimpse+of+Us" },
        { title: "Liability", artist: "Lorde", link: "https://www.youtube.com/results?search_query=Lorde+Liability" },
        { title: "안녕", artist: "폴킴", link: "https://www.youtube.com/results?search_query=폴킴+안녕" },
        { title: "비도 오고 그래서", artist: "헤이즈", link: "https://www.youtube.com/results?search_query=헤이즈+비도+오고+그래서" },
        { title: "The Night We Met", artist: "Lord Huron", link: "https://www.youtube.com/results?search_query=Lord+Huron+The+Night+We+Met" },
        { title: "Tears In Heaven", artist: "Eric Clapton", link: "https://www.youtube.com/results?search_query=Eric+Clapton+Tears+In+Heaven" },
        { title: "When We Were Young", artist: "Adele", link: "https://www.youtube.com/results?search_query=Adele+When+We+Were+Young" },
        { title: "그때 헤어지면 돼", artist: "로이킴", link: "https://www.youtube.com/results?search_query=로이킴+그때+헤어지면+돼" },
        { title: "나의 옛날이야기", artist: "아이유", link: "https://www.youtube.com/results?search_query=아이유+나의+옛날이야기" },
        { title: "All I Ask", artist: "Adele", link: "https://www.youtube.com/results?search_query=Adele+All+I+Ask" },
        { title: "사랑하게 될 줄 알았어", artist: "전미도", link: "https://www.youtube.com/results?search_query=전미도+사랑하게+될+줄+알았어" },
        { title: "Supermarket Flowers", artist: "Ed Sheeran", link: "https://www.youtube.com/results?search_query=Ed+Sheeran+Supermarket+Flowers" }
    ],
    embarrassment: [
        { title: "썸 탈꺼야", artist: "볼빨간사춘기", link: "https://www.youtube.com/results?search_query=볼빨간사춘기+썸+탈꺼야" },
        { title: "삐삐", artist: "아이유", link: "https://www.youtube.com/results?search_query=아이유+삐삐" },
        { title: "Oops!... I Did It Again", artist: "Britney Spears", link: "https://www.youtube.com/results?search_query=Britney+Spears+Oops+I+Did+It+Again" },
        { title: "What Do You Mean?", artist: "Justin Bieber", link: "https://www.youtube.com/results?search_query=Justin+Bieber+What+Do+You+Mean" },
        { title: "어이", artist: "크레용팝", link: "https://www.youtube.com/results?search_query=크레용팝+어이" },
        { title: "Dumb Dumb", artist: "전소미", link: "https://www.youtube.com/results?search_query=전소미+Dumb+Dumb" },
        { title: "Hot N Cold", artist: "Katy Perry", link: "https://www.youtube.com/results?search_query=Katy+Perry+Hot+N+Cold" },
        { title: "삐딱하게", artist: "G-DRAGON", link: "https://www.youtube.com/results?search_query=G-DRAGON+삐딱하게" },
        { title: "어머님이 누구니", artist: "JYP", link: "https://www.youtube.com/results?search_query=JYP+어머님이+누구니" },
        { title: "Catallena", artist: "오렌지캬라멜", link: "https://www.youtube.com/results?search_query=오렌지캬라멜+Catallena" },
        { title: "Mixed Signals", artist: "Ruth B.", link: "https://www.youtube.com/results?search_query=Ruth+B+Mixed+Signals" },
        { title: "Should I Stay or Should I Go", artist: "The Clash", link: "https://www.youtube.com/results?search_query=The+Clash+Should+I+Stay" },
        { title: "Why So Lonely", artist: "Wonder Girls", link: "https://www.youtube.com/results?search_query=Wonder+Girls+Why+So+Lonely" },
        { title: "가시나", artist: "선미", link: "https://www.youtube.com/results?search_query=선미+가시나" },
        { title: "Spicy", artist: "aespa", link: "https://www.youtube.com/results?search_query=aespa+Spicy" },
        { title: "New Rules", artist: "Dua Lipa", link: "https://www.youtube.com/results?search_query=Dua+Lipa+New+Rules" },
        { title: "Bad Liar", artist: "Selena Gomez", link: "https://www.youtube.com/results?search_query=Selena+Gomez+Bad+Liar" },
        { title: "멘붕", artist: "CL", link: "https://www.youtube.com/results?search_query=CL+멘붕" },
        { title: "이상해", artist: "Agust D", link: "https://www.youtube.com/results?search_query=Agust+D+이상해" },
        { title: "Dumb Dumb", artist: "Red Velvet", link: "https://www.youtube.com/results?search_query=Red+Velvet+Dumb+Dumb" }
    ],
    hurt: [
        { title: "끝", artist: "권진아", link: "https://www.youtube.com/results?search_query=권진아+끝" },
        { title: "Traitor", artist: "Olivia Rodrigo", link: "https://www.youtube.com/results?search_query=Olivia+Rodrigo+Traitor" },
        { title: "기억을 걷는 시간", artist: "NELL", link: "https://www.youtube.com/results?search_query=NELL+기억을+걷는+시간" },
        { title: "Happier", artist: "Olivia Rodrigo", link: "https://www.youtube.com/results?search_query=Olivia+Rodrigo+Happier" },
        { title: "사랑이 잘", artist: "아이유", link: "https://www.youtube.com/results?search_query=아이유+사랑이+잘" },
        { title: "Lose You To Love Me", artist: "Selena Gomez", link: "https://www.youtube.com/results?search_query=Selena+Gomez+Lose+You+To+Love+Me" },
        { title: "총 맞은 것처럼", artist: "백지영", link: "https://www.youtube.com/results?search_query=백지영+총+맞은+것처럼" },
        { title: "Kill Bill", artist: "SZA", link: "https://www.youtube.com/results?search_query=SZA+Kill+Bill" },
        { title: "이별택시", artist: "김연우", link: "https://www.youtube.com/results?search_query=김연우+이별택시" },
        { title: "Stay", artist: "Rihanna", link: "https://www.youtube.com/results?search_query=Rihanna+Stay" },
        { title: "Rolling in the Deep", artist: "Adele", link: "https://www.youtube.com/results?search_query=Adele+Rolling+in+the+Deep" },
        { title: "첫 눈처럼 너에게 가겠다", artist: "에일리", link: "https://www.youtube.com/results?search_query=에일리+첫+눈처럼" },
        { title: "Wrecking Ball", artist: "Miley Cyrus", link: "https://www.youtube.com/results?search_query=Miley+Cyrus+Wrecking+Ball" },
        { title: "Take A Bow", artist: "Rihanna", link: "https://www.youtube.com/results?search_query=Rihanna+Take+A+Bow" },
        { title: "끝사랑", artist: "김범수", link: "https://www.youtube.com/results?search_query=김범수+끝사랑" },
        { title: "정거장", artist: "아이유", link: "https://www.youtube.com/results?search_query=아이유+정거장" },
        { title: "Before He Cheats", artist: "Carrie Underwood", link: "https://www.youtube.com/results?search_query=Carrie+Underwood+Before+He+Cheats" },
        { title: "Love The Way You Lie", artist: "Eminem", link: "https://www.youtube.com/results?search_query=Eminem+Love+The+Way+You+Lie" },
        { title: "기억의 빈자리", artist: "나얼", link: "https://www.youtube.com/results?search_query=나얼+기억의+빈자리" },
        { title: "Elastic Heart", artist: "Sia", link: "https://www.youtube.com/results?search_query=Sia+Elastic+Heart" }
    ],
    anxiety: [
        { title: "수고했어, 오늘도", artist: "옥상달빛", link: "https://www.youtube.com/results?search_query=옥상달빛+수고했어+오늘도" },
        { title: "Anxiety", artist: "BIBI", link: "https://www.youtube.com/results?search_query=BIBI+Anxiety" },
        { title: "In My Blood", artist: "Shawn Mendes", link: "https://www.youtube.com/results?search_query=Shawn+Mendes+In+My+Blood" },
        { title: "무릎", artist: "아이유", link: "https://www.youtube.com/results?search_query=아이유+무릎" },
        { title: "Breathin", artist: "Ariana Grande", link: "https://www.youtube.com/results?search_query=Ariana+Grande+Breathin" },
        { title: "Overwhelmed", artist: "Royal", link: "https://www.youtube.com/results?search_query=Royal+Overwhelmed" },
        { title: "Heavy", artist: "Linkin Park", link: "https://www.youtube.com/results?search_query=Linkin+Park+Heavy" },
        { title: "어른", artist: "Sondia", link: "https://www.youtube.com/results?search_query=Sondia+어른" },
        { title: "Stressed Out", artist: "Twenty One Pilots", link: "https://www.youtube.com/results?search_query=Twenty+One+Pilots+Stressed+Out" },
        { title: "Let It Be", artist: "The Beatles", link: "https://www.youtube.com/results?search_query=The+Beatles+Let+It+Be" },
        { title: "괜찮아도 괜찮아", artist: "D.O.", link: "https://www.youtube.com/results?search_query=디오+괜찮아도+괜찮아" },
        { title: "달리기", artist: "옥상달빛", link: "https://www.youtube.com/results?search_query=옥상달빛+달리기" },
        { title: "나의 사춘기에게", artist: "볼빨간사춘기", link: "https://www.youtube.com/results?search_query=볼빨간사춘기+나의+사춘기에게" },
        { title: "The Archer", artist: "Taylor Swift", link: "https://www.youtube.com/results?search_query=Taylor+Swift+The+Archer" },
        { title: "길", artist: "god", link: "https://www.youtube.com/results?search_query=god+길" },
        { title: "Fake Smile", artist: "Ariana Grande", link: "https://www.youtube.com/results?search_query=Ariana+Grande+Fake+Smile" },
        { title: "TOMBOY", artist: "혁오", link: "https://www.youtube.com/results?search_query=혁오+TOMBOY" },
        { title: "Safe and Sound", artist: "Taylor Swift", link: "https://www.youtube.com/results?search_query=Taylor+Swift+Safe+and+Sound" },
        { title: "Help!", artist: "The Beatles", link: "https://www.youtube.com/results?search_query=The+Beatles+Help" },
        { title: "고민보다 GO", artist: "BTS", link: "https://www.youtube.com/results?search_query=BTS+고민보다+GO" }
    ],
    anger: [
        { title: "TOMBOY", artist: "(G)I-DLE", link: "https://www.youtube.com/results?search_query=(G)I-DLE+TOMBOY" },
        { title: "Look What You Made Me Do", artist: "Taylor Swift", link: "https://www.youtube.com/results?search_query=Taylor+Swift+Look+What+You+Made+Me+Do" },
        { title: "대취타", artist: "Agust D", link: "https://www.youtube.com/results?search_query=Agust+D+대취타" },
        { title: "Good 4 U", artist: "Olivia Rodrigo", link: "https://www.youtube.com/results?search_query=Olivia+Rodrigo+Good+4+U" },
        { title: "abcdefu", artist: "GAYLE", link: "https://www.youtube.com/results?search_query=GAYLE+abcdefu" },
        { title: "가시", artist: "버즈", link: "https://www.youtube.com/results?search_query=버즈+가시" },
        { title: "Savage", artist: "aespa", link: "https://www.youtube.com/results?search_query=aespa+Savage" },
        { title: "Bad Guy", artist: "Billie Eilish", link: "https://www.youtube.com/results?search_query=Billie+Eilish+Bad+Guy" },
        { title: "I Am The Best", artist: "2NE1", link: "https://www.youtube.com/results?search_query=2NE1+내가+제일+잘+나가" },
        { title: "Ugh!", artist: "BTS", link: "https://www.youtube.com/results?search_query=BTS+Ugh" },
        { title: "F**k You", artist: "CeeLo Green", link: "https://www.youtube.com/results?search_query=CeeLo+Green+Fuck+You" },
        { title: "Stronger", artist: "Kelly Clarkson", link: "https://www.youtube.com/results?search_query=Kelly+Clarkson+Stronger" },
        { title: "미친거니", artist: "송지은", link: "https://www.youtube.com/results?search_query=송지은+미친거니" },
        { title: "Killing In The Name", artist: "RATM", link: "https://www.youtube.com/results?search_query=RATM+Killing+In+The+Name" },
        { title: "7 Rings", artist: "Ariana Grande", link: "https://www.youtube.com/results?search_query=Ariana+Grande+7+Rings" },
        { title: "Born Hater", artist: "에픽하이", link: "https://www.youtube.com/results?search_query=에픽하이+Born+Hater" },
        { title: "Kill This Love", artist: "BLACKPINK", link: "https://www.youtube.com/results?search_query=BLACKPINK+Kill+This+Love" },
        { title: "Since U Been Gone", artist: "Kelly Clarkson", link: "https://www.youtube.com/results?search_query=Kelly+Clarkson+Since+U+Been+Gone" },
        { title: "독기", artist: "아이언", link: "https://www.youtube.com/results?search_query=아이언+독기" },
        { title: "Hate You", artist: "백예린", link: "https://www.youtube.com/results?search_query=백예린+Hate+You" }
    ]
};

let currentQuestionIndex = 0;
let moodScores = { joy: 0, sadness: 0, embarrassment: 0, hurt: 0, anxiety: 0, anger: 0 };

// DOM Elements
const startScreen = document.getElementById('start-screen');
const surveyScreen = document.getElementById('survey-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-survey-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const questionNumber = document.getElementById('question-number');
const progressBar = document.getElementById('progress-bar');
const answerBtns = document.querySelectorAll('.answer-btn');

startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    surveyScreen.classList.remove('hidden');
    showQuestion();
});

restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    moodScores = { joy: 0, sadness: 0, embarrassment: 0, hurt: 0, anxiety: 0, anger: 0 };
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    document.body.className = 'mood-default';
});

answerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const score = parseInt(btn.getAttribute('data-score'));
        const currentQuestion = questions[currentQuestionIndex];
        
        // 점수 합산 로직 (그렇다 이상일 때 해당 감정 점수 부여)
        currentQuestion.moods.forEach(mood => {
            moodScores[mood] += (score - 1); // 0~4점 부여
        });

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });
});

function showQuestion() {
    const q = questions[currentQuestionIndex];
    questionNumber.innerText = `Q${currentQuestionIndex + 1}.`;
    questionText.innerText = q.text;
    progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
}

function showResult() {
    surveyScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    // 가장 높은 점수의 감정 찾기
    const finalMood = Object.keys(moodScores).reduce((a, b) => moodScores[a] > moodScores[b] ? a : b);
    
    // UI 업데이트
    document.body.className = `mood-${finalMood}`;
    document.getElementById('mood-emoji').innerText = getMoodEmoji(finalMood);
    document.getElementById('mood-name').innerText = getMoodName(finalMood);
    
    recommendSong(finalMood);
}

function recommendSong(mood) {
    const moodSongs = songs[mood];
    const selectedSong = moodSongs[Math.floor(Math.random() * moodSongs.length)];
    
    const resultContainer = document.getElementById('recommendation-result');
    resultContainer.innerHTML = `
        <div class="song-card glass">
            <div class="song-info">
                <p>지금 당신에게 필요한 곡</p>
                <h3>${selectedSong.title}</h3>
                <p class="artist-name">${selectedSong.artist}</p>
                <a href="${selectedSong.link}" target="_blank" class="listen-link">지금 들어보기</a>
            </div>
        </div>
    `;
}

function getMoodEmoji(mood) {
    const emojis = { joy: "😊", sadness: "😢", embarrassment: "😳", hurt: "💔", anxiety: "😰", anger: "🔥" };
    return emojis[mood];
}

function getMoodName(mood) {
    const names = { joy: "기쁨", sadness: "슬픔", embarrassment: "당황", hurt: "상처", anxiety: "불안", anger: "분노" };
    return names[mood];
}
