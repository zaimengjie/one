const imgs = [
  "./images/轮播图3.jpg",
  "./images/轮播图2.jpg",
  "./images/轮播图1.jpg",
  "./images/轮播图4.gif",
  "./images/轮播图5.jpg",
];
let n;
let t = 0;
const img = document.querySelector(".banner .w .product img");
const arr = document.querySelectorAll(".banner .w .product ul li");
const next = document.querySelector(".banner .w .product .next ");
const prev = document.querySelector(".banner .w .product .prve ");

// 获取轮播图容器元素
const container = document.querySelector('.banner .w .product');

// 添加鼠标进入/离开事件监听
if (container) {
  // 鼠标进入轮播图区域时暂停自动播放
  container.addEventListener('mouseenter', function() {
    clearInterval(n);
  });
  
  // 鼠标离开轮播图区域时恢复自动播放
  container.addEventListener('mouseleave', function() {
    show();
  });
}
//右侧按钮业务
next.addEventListener("click", function () {
  document
    .querySelector(".banner .w .product ul .active")
    .classList.remove("active");
  t++;
  if (t == 5) {
    t = 0;
  }
    img.src = imgs[t];
  //当前li添加active
  arr[t].classList.add("active");
  clearInterval(n);
});


//左侧按钮业务
prev.addEventListener("click", function () {
  document
    .querySelector(".banner .w .product ul .active")
    .classList.remove("active");
  t--;
  if (t < 0) {
    t = 4;
  }
  img.src = imgs[t];
  //当前li添加active
  arr[t].classList.add("active");
  clearInterval(n)
});


show();
// //点击小圆点切换图片
const ul=document.querySelector(".banner .w .product ul");
ul.addEventListener('click',function(e){
  if(e.target.tagName==="LI"){
    document.querySelector('.banner .w .product ul .active').classList.remove('active');
    let i=e.target.dataset.id;
    img.src = imgs[i];
    arr[i].classList.add("active");
    clearInterval(n);
    t=i;
  }
})


//自动播放
function show(){
  n=setInterval(function () {
  t++;
  document
    .querySelector(".banner .w .product ul .active")
    .classList.remove("active");
  if (t >= imgs.length) {
    t = 0;
  }
  // 更新图片src
  img.src = imgs[t];
  // 添加当前选中的li的active类
  arr[t].classList.add("active");
},1000);
}


// 电梯导航
//第一模块 放一个立即执行函数中
(function () {
  //第一大模块 页面滑动与隐藏
  const entry = document.querySelector(".banner");

  //目的 当页面滚动大于300px 就显示出电梯导航
  const elevator = document.querySelector(".elevator");
  window.addEventListener("scroll", function () {
    const n = document.documentElement.scrollTop;
    n >= entry.offsetTop
      ? (elevator.style.opacity = 1)
      : (elevator.style.opacity = 0);
  });

  //点击返回页面的顶部
  const backTop = document.querySelector("#backTop");
  backTop.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });
})(),
  (function () {
    //第二模块 点击页面可以滑动
    const ul = document.querySelector(".elevator-list");

    ul.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && e.target.dataset.name) {
        const old = document.querySelector(".elevator-list .active");
        if (old) old.classList.remove("active");
        e.target.classList.add("active");
        const top = document.querySelector(
          `.${e.target.dataset.name}`
        ).offsetTop; //得到大盒子的offsetTop
        //让页面滚动到top位置
        document.documentElement.scrollTop = top;
      }
      //console.log(e.target.dataset.id);
    });

    // 页面滑动 可以根据大盒子来选出小盒子 添加active类
    window.addEventListener("scroll", function () {
      //先移除active类
      const old = document.querySelector(".elevator-list .active");
      if (old) old.classList.remove("active");
      const n = document.documentElement.scrollTop+10;
      const n1 = document.querySelector(".new");
      const n2 = document.querySelector(".life");
      const n3 = document.querySelector(".yule");
      const n4 = document.querySelector(".work");
      if (n >= n1.offsetTop && n < n2.offsetTop) {
        //选出第一个小盒子
        document.querySelector('[data-name="new"]').classList.add("active"); //属性选择器
      }
      if (n >= n2.offsetTop && n < n3.offsetTop) {
        //选出第一个小盒子
        document.querySelector('[data-name="life"]').classList.add("active"); //属性选择器
      }
      if (n >= n3.offsetTop && n < n4.offsetTop) {
        //选出第一个小盒子
        document.querySelector('[data-name="yule"]').classList.add("active"); //属性选择器
      }
      if (n >= n4.offsetTop) {
        //选出第一个小盒子
        document.querySelector('[data-name="work"]').classList.add("active"); //属性选择器
      }
    });
  })();

  //添加个人简介跳动动画
const myself = document.querySelector('.banner .myself');
let isExpanded = false;
setInterval(function() {
  if (isExpanded) {
    myself.style.height = '300px'; // 恢复原始宽度
  } else {
    myself.style.height = '320px'; // 扩大宽度
  }
  isExpanded = !isExpanded; // 切换状态
}, 500);


//给三条评论加上跳动动画
const evaluate1=document.querySelector('.evaluate-one');
const evaluate2=document.querySelector('.evaluate-two');
const evaluate3=document.querySelector('.evaluate-three');
let isExpanded1 = false;
setInterval(function() {
  if (isExpanded1) {
     evaluate1.style.transform= 'translateY(0px)';// 恢复原始宽度
  } else {
    evaluate1.style.transform= 'translateY(-5px)'; // 扩大宽度
  }
  isExpanded1 = !isExpanded1; // 切换状态
}, 500);
let isExpanded2 = false;
setInterval(function() {
  if (isExpanded2) {
     evaluate2.style.transform= 'translateY(0px)';// 恢复原始宽度
  } else {
    evaluate2.style.transform= 'translateY(-5px)'; // 扩大宽度
  }
  isExpanded2 = !isExpanded2; // 切换状态
}, 500);

let isExpanded3 = false;
setInterval(function() {
  if (isExpanded3) {
     evaluate3.style.transform= 'translateY(0px)';// 恢复原始宽度
  } else {
    evaluate3.style.transform= 'translateY(-5px)'; // 扩大宽度
  }
  isExpanded3 = !isExpanded3; // 切换状态
}, 500);

//侧边的折叠框
let count=0;
const btn=document.querySelector('.social .btn');
const im=document.querySelector('.btn img');
const social=document.querySelector('.social')
btn.addEventListener('click',function(){
  if(count%2==0){
     social.style.right="0px";
     im.style.transform=" rotate(0deg)";
  }else{
    social.style.right="-170px";
    im.style.transform=" rotate(-180deg)";
  }
  count++;
})
