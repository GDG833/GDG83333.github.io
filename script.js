// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 1. 年级书目切换功能
    const gradeBtns = document.querySelectorAll('.grade-btn');
    const bookItems = document.querySelectorAll('.book-items');

    gradeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有按钮的active类
            gradeBtns.forEach(b => b.classList.remove('active'));
            // 给当前按钮添加active类
            this.classList.add('active');
            // 获取当前年级
            const grade = this.getAttribute('data-grade');
            // 隐藏所有书目
            bookItems.forEach(item => {
                item.style.display = 'none';
            });
            // 显示对应年级书目
            document.querySelector(`.book-items[data-grade="${grade}"]`).style.display = 'grid';
        });
    });

    // 2. 读后感留言提交
    const messageForm = document.getElementById('message-form');
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault(); // 阻止默认提交
        // 获取表单值
        const name = document.getElementById('name').value;
        const bookName = document.getElementById('book-name').value;
        const content = document.getElementById('content').value;
        
        // 模拟提交成功
        alert(`🎉 ${name}，你的《${bookName}》读后感已提交成功！感谢你的分享～`);
        // 重置表单
        this.reset();

        // 【可选】如果需要后端对接，这里添加AJAX请求
        // fetch('后端接口地址', {
        //     method: 'POST',
        //     body: JSON.stringify({name, bookName, content}),
        //     headers: {'Content-Type': 'application/json'}
        // }).then(res => res.json()).then(data => {
        //     alert(data.msg);
        // });
    });

    // 3. 思维导图上传提交
    const uploadForm = document.getElementById('upload-form');
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault(); // 阻止默认提交
        const uploadName = document.getElementById('upload-name').value;
        const uploadBook = document.getElementById('upload-book').value;
        
        // 模拟上传成功
        alert(`🎨 ${uploadName}，你的《${uploadBook}》思维导图已上传成功！优秀作品将展示在页面中～`);
        // 重置表单
        this.reset();

        // 【可选】文件上传后端对接示例
        // const formData = new FormData(this);
        // fetch('上传接口地址', {
        //     method: 'POST',
        //     body: formData
        // }).then(res => res.json()).then(data => {
        //     alert(data.msg);
        // });
    });

    // 4. 阅读体验问卷提交
    const surveyForm = document.getElementById('survey-form');
    surveyForm.addEventListener('submit', function(e) {
        e.preventDefault(); // 阻止默认提交
        alert(`✅ 感谢你的参与！你的阅读体验反馈已提交，我们会根据建议优化校园阅读服务～`);
        // 重置表单
        this.reset();

        // 【可选】问卷提交后端对接
        // const formData = new FormData(this);
        // fetch('问卷接口地址', {
        //     method: 'POST',
        //     body: formData
        // }).then(res => res.json()).then(data => {
        //     alert(data.msg);
        // });
    });

    // 5. 阅读测评提交 & 评分
    const testForm = document.getElementById('test-form');
    const testResult = document.getElementById('test-result');
    const scoreText = document.getElementById('score');
    
    // 正确答案
    const correctAnswers = {
        t1: 'A',
        t2: 'B',
        t3: 'C',
        t4: 'A',
        t5: 'C'
    };

    testForm.addEventListener('submit', function(e) {
        e.preventDefault(); // 阻止默认提交
        // 计算得分
        let score = 0;
        for (let key in correctAnswers) {
            const selected = document.querySelector(`input[name="${key}"]:checked`)?.value;
            if (selected === correctAnswers[key]) {
                score += 20; // 每题20分
            }
        }
        // 显示结果
        scoreText.textContent = `你的得分：${score}分（共5题，每题20分）`;
        testResult.style.display = 'block';
        // 滚动到结果区域
        testResult.scrollIntoView({behavior: 'smooth'});
    });

    // 6. 导航栏平滑滚动
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({behavior: 'smooth'});
        });
    });
});