document.addEventListener('DOMContentLoaded', function() {
    // 게임 소식 데이터
    const notifications = [
        '신작 RPG "판타지 월드" 출시일 발표',
        '인기 FPS "배틀그라운드" 대규모 업데이트 예정',
        '모바일 게임 "퍼즐매니아" 1000만 다운로드 달성',
        '게임 개발사 "드림팩토리" 신작 발표회 예정'
    ];

    // 할인 정보 데이터
    const discounts = [
        '"스팀" 여름 세일 - 최대 90% 할인',
        '"플레이스테이션" 플래티넘 위크엔드 - 인기 타이틀 할인',
        '"오버워치" 50% 할인 행사 - 이번 주말 한정',
        '"닌텐도 스위치" 인디게임 페스티벌 - 다양한 인디게임 할인'
    ];

    // 게임 소식 목록 표시
    const notificationList = document.getElementById('notification-list');
    notifications.forEach((notification, index) => {
        if (index < 3) {  // 최대 3개만 표시
            const div = document.createElement('div');
            div.textContent = notification;
            notificationList.insertBefore(div, notificationList.lastElementChild);
        }
    });

    // 할인 정보 목록 표시
    const discountList = document.getElementById('discount-list');
    discounts.forEach((discount, index) => {
        if (index < 3) {  // 최대 3개만 표시
            const div = document.createElement('div');
            div.textContent = discount;
            discountList.insertBefore(div, discountList.lastElementChild);
        }
    });
});
