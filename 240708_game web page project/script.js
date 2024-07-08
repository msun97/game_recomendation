document.addEventListener('DOMContentLoaded', function() {
    // 게임 추천 데이터
    const recommendations = [
        '게임 A',
        '게임 B',
        '게임 C'
    ];

    // 게임 할인 소식 데이터
    const discounts = [
        '게임 D - 50% 할인',
        '게임 E - 30% 할인',
        '게임 F - 10% 할인'
    ];

    // 이벤트 데이터
    const events = [
        '이벤트 1 - 7월 10일',
        '이벤트 2 - 7월 15일',
        '이벤트 3 - 7월 20일'
    ];

    // 추천 게임 목록 표시
    const recommendationList = document.getElementById('recommendation-list');
    recommendations.forEach(game => {
        const div = document.createElement('div');
        div.textContent = game;
        recommendationList.appendChild(div);
    });

    // 할인 게임 목록 표시
    const discountList = document.getElementById('discount-list');
    discounts.forEach(game => {
        const div = document.createElement('div');
        div.textContent = game;
        discountList.appendChild(div);
    });

    // 이벤트 목록 표시
    const eventList = document.getElementById('event-list');
    events.forEach(event => {
        const div = document.createElement('div');
        div.textContent = event;
        eventList.appendChild(div);
    });

    // 자유 게시판 글 작성
    const boardForm = document.getElementById('board-form');
    const boardList = document.getElementById('board-list');

    boardForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const textarea = boardForm.querySelector('textarea');
        const newPost = document.createElement('div');
        newPost.textContent = textarea.value;
        boardList.appendChild(newPost);
        textarea.value = '';
    });
});
