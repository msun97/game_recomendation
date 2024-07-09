document.addEventListener('DOMContentLoaded', function() {
    // 초기 게임 추천 데이터 (예제 데이터)
    const initialRecommendations = [
        { name: '게임 A', genre: 'RPG', platform: 'PC' },
        { name: '게임 B', genre: 'FPS', platform: 'Console' },
        { name: '게임 C', genre: 'Adventure', platform: 'Mobile' },
        { name: '게임 D', genre: 'Strategy', platform: 'PC' }
    ];

    // 추천 게임 목록 표시 함수
    function displayRecommendations(recommendations) {
        const recommendationList = document.getElementById('recommendation-list');
        recommendationList.innerHTML = '';
        if (recommendations.length > 0) {
            recommendations.forEach(game => {
                const div = document.createElement('div');
                div.textContent = `${game.name} - ${game.genre} - ${game.platform}`;
                recommendationList.appendChild(div);
            });
        } else {
            const noResultsDiv = document.createElement('div');
            noResultsDiv.textContent = '검색 실패! 조건을 널널하게 잡아보시겠어요?';
            recommendationList.appendChild(noResultsDiv);
        }
    }

    // 초기 추천 게임 표시
    displayRecommendations(initialRecommendations);

    // 검색 폼 처리
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const genreSelect = document.getElementById('genre-select').value;
        const platformSelect = document.getElementById('platform-select').value;

        const filteredRecommendations = initialRecommendations.filter(game => {
            const matchesName = game.name.toLowerCase().includes(searchInput);
            const matchesGenre = genreSelect === '' || game.genre === genreSelect;
            const matchesPlatform = platformSelect === '' || game.platform === platformSelect;
            return matchesName && matchesGenre && matchesPlatform;
        });

        displayRecommendations(filteredRecommendations);
    });
});