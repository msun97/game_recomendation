document.addEventListener('DOMContentLoaded', function() {
    const postList = document.getElementById('post-list');
    const writeButton = document.getElementById('write-button');
    const pagination = document.getElementById('pagination');
    const categorySelect = document.getElementById('category-select');

    let currentCategory = 'all';
    let currentPage = 1;
    const postsPerPage = 10;

    let posts = [
        { category: 'talk', title: '오늘 본 영화 후기', author: '영화광', date: '2024-07-11', content: '내용...' },
        { category: 'refer', title: '레벨 50 달성 팁', author: '게임고수', date: '2024-07-11', content: '내용...' },
        { category: 'friend', title: 'MMORPG 같이 하실 분', author: '솔로이즈롤리', date: '2024-07-11', content: '내용...' },
        // ... 더 많은 게시물
    ];

    function displayPosts() {
        const filteredPosts = currentCategory === 'all' 
            ? posts 
            : posts.filter(post => post.category === currentCategory);

        const start = (currentPage - 1) * postsPerPage;
        const end = start + postsPerPage;
        const currentPosts = filteredPosts.slice(start, end);

        postList.innerHTML = '';
        currentPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h3>[${getCategoryName(post.category)}] ${post.title}</h3>
                <p>작성자: ${post.author}</p>
                <p>작성일: ${post.date}</p>
            `;
            postList.appendChild(postElement);
        });

        updatePagination(filteredPosts.length);
    }

    function updatePagination(totalPosts) {
        const totalPages = Math.ceil(totalPosts / postsPerPage);
        pagination.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.addEventListener('click', () => {
                currentPage = i;
                displayPosts();
            });
            pagination.appendChild(button);
        }
    }

    function getCategoryName(category) {
        switch(category) {
            case 'talk': return '잡담';
            case 'refer': return '공략';
            case 'friend': return '친구구함';
            default: return '기타';
        }
    }

    categorySelect.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        currentPage = 1;
        displayPosts();
    });

    writeButton.addEventListener('click', () => {
        window.location.href = 'write.html'; // 글쓰기 페이지로 이동
    });

    displayPosts(); // 페이지 로드 시 게시글을 표시
});
