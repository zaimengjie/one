const button=document.querySelector('button');
      function judge(){
        const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const repassword = document.getElementById('repassword').value;
      if (!username) {
        alert('用户名不能为空，请输入用户名！');
        return false;
      }
      //检查两次输入的密码是否一致
      if (!(password===repassword)) {
        alert('两次输入的密码不一致，请重新输入！');
        return false;
      }
      alert('注册成功！点击进入主页');
      window.location.href = './index.html';
      }
    button.addEventListener("click",judge)

    //给注册页面添加心脏跳动
    const register=document.querySelector('.register')
    let isExpanded = false;
    setInterval(function() {
  if (isExpanded) {
     register.style.transform= 'translateY(0px)';// 恢复原始宽度
  } else {
    register.style.transform= 'translateY(-5px)'; // 扩大宽度
  }
  isExpanded = !isExpanded; // 切换状态
}, 500);

//验证码的变化
const yan=document.querySelector('#yanzhengma')
yan.addEventListener('click',function(){
  let i=60;
  yan.innerHTML=`${i}秒之后重新获取`;
 let n= setInterval(function(){
   i--;
   yan.innerHTML=`${i}秒之后重新获取`;
   if(i<=0){ 
      clearInterval(n);
    yan.innerHTML="获取验证码"
   }
   
  },1000)
})