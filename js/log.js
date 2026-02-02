const button=document.querySelector('button');
      function judge(){
        const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      if (!username) {
        alert('用户名不能为空，请输入用户名！');
        return false;
      }
      if(!password){
        alert('密码不能为空，请输入密码');
        return false
      }
      alert('登录成功！点击进入主页');
      window.location.href = './index.html';
      }
    button.addEventListener("click",judge)

        //给登录页面添加心脏跳动
    const log=document.querySelector('.log')
    let isExpanded = false;
    setInterval(function() {
  if (isExpanded) {
     log.style.transform= 'translateY(0px)';// 恢复原始宽度
  } else {
    log.style.transform= 'translateY(-5px)'; // 扩大宽度
  }
  isExpanded = !isExpanded; // 切换状态
}, 500);