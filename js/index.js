window.onload=function () {
    let home = document.getElementById('home');
    // let btnList = document.getElementsByClassName('btnList');
    // let imgopt = btnList[0].getElementsByTagName('li');
    let imgopt = document.getElementsByTagName('li');
    let activeColor = '#046b80',disactiveColor = '#fff';


    home.onmouseenter = function () {
        home.style.color = 'red';
    }
    home.onmouseleave = function () {
        home.style.color = '#ffffff';
    };

    let diaryleft = document.getElementsByClassName('diaryleft');
    let title = diaryleft[0].getElementsByClassName('title');
    let li1 = title[0].getElementsByTagName('li');
    for (let i=0;i<li1.length;i++){
        li1[i].onclick=function () {
            for (let j=0;j<li1.length;j++){
                li1[j].style.borderBottom='none'
            }
            this.style.borderBottom='1px solid #000';
            return false;
        }
    }

    // let essay = document.querySelector('.tabList > .hot');
    // console.log(essay);
    // essay.style.background= 'red';
    // let imgopts = document.querySelectorAll('.imgopt > li');
    // imgopts.forEach(function (elem,index) {
    //     // console.log(elem);
    //     // console.log(index);
    //     elem.onmouseover = function () {
    //         // this.className='aa hot';
    //         for (let i=0;i<imgopts.lenght;i++){
    //             imgopts[i].classList.remove('hot');
    //         }
    //         this.classList.add('hot'); //切换
    //     }
    // })
    //
    // for (var i=0 ; i<imgopt.length;i++){
    //     imgopt[i].onmouseenter=function () {
    //         this.style.backgroundColor=activeColor;
    //     };
    //     imgopt[i].onmouseleave=function () {
    //         this.style.backgroundColor=disactiveColor;
    //     };
    // }

    // let index=0;
    // let flipright =document.querySelector('.flipright');
    // let flipleft =document.querySelector('.flipleft');
    // let image = document.querySelectorAll('.image > li');
    // flipright.onclick=function () {
    //     index++;
    //     if (index === image.length){
    //         index=0;
    //     }
    //     image.forEach(function (ele) {
    //         ele.style.zIndex=1;
    // })
    //     Array.prototype.forEach.call(flip,function (elem) {
    //         elem.classList.remove('hot');
    //     })
    //     imgopt[index].classList.add('hot')
    //     image[index].style.zIndex = 999;
    //
    // }
    // flipleft.onclick=function () {
    //     index--;
    //     if (index < 0){
    //         index =image.length -1;
    //     }
    //     image.forEach(function (ele) {
    //         ele.style.zIndex=1;
    //     })
    //     image[index].style.zIndex = 999;
    // }
    //
    // let flip=document.querySelector('.flip');
    // let t = setInterval(flipright.onclick,1000);
    // flip.onmouseenter = function () {
    //     clearInterval(t);
    // }
    // flip.onmouseleave=function () {
    //     t=setInterval(flipright.onclick,1000)
    // }

    // for (var i=0;i<imgopt.lenght;i++){
    //     imgopt[i].zs=i;
    //     imgopt[i].onclick=function () {
    //         Array.prototype.forEach.call(imgopt,function(elem){
    //             elem.classList.remove('hot');
    //         })
    //         image.forEach(function (ele) {
    //             ele.style.zIndex =1;
    //         })
    //         this.classList.add('hot');
    //         image[this.zs].style.zIndex=999;
    //     }
    // }



    // let current = 0 ,next = 0;
    // let flipright = document.querySelector('.flipright');
    // let flipleft = document.querySelector('.flipleft');
    // let image = document.querySelectorAll('.image > li');
    // let w = image[0].offsetWidth;
    //
    // flipright.onclick = function () {
    //     next++;
    //     if (next == image.length){
    //         next = 0;
    //     }
    //     image[next].style.left = w+'px';
    //     animate(image[current],{left:-w});
    //     animate(image[next],{left:0});
    //     current = next;
    // };
    // flipleft.onclick = function () {
    //     next--;
    //     if (next < 0 ){
    //         next == image.length-1;
    //     }
    //     image[next].style.left = -w+'px';
    //     animate(image[current],{left:w});
    //     animate(image[next],{left:0});
    //     current = next;
    // };
    //
    // for (let i=0;i<imgopt.lenght;i++){
    //     imgopt[i].onclick=function () {
    //         if (next === i){
    //             return;
    //         }
    //         next = i;
    //         if (next > current){
    //             image[next].style.left=w+'px';
    //             animate(image[current],{left:-w});
    //             animate(image[next],{left:0});
    //         } else{
    //             image[next].style.left=-w+'px';
    //             animate(image[current],{left:w});
    //             animate(image[next],{left:0});
    //         }
    //         imgopt[current].classList.remove('hot');
    //         imgopt[next].classList.add('hot');
    //     }
    // }
    let index=0;
    let current=0,next=0;
    let bannerdian=document.querySelectorAll('.imgopt li');
    let flipleft=document.querySelector('.flipleft');
    let flipright=document.querySelector('.flipright');
    let bannerImg=document.querySelectorAll('.image li');
    let markleft=document.querySelector('.markleft');
    let w=bannerImg[0].offsetWidth;
    let flag=true;
    let t= setInterval(flipright.onclick,2000);
    markleft.onmouseenter=function(){
        clearInterval(t)
    }
    markleft.onmouseleave=function(){
        t= setInterval(flipright.onclick,2000);
    }
    flipright.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next++;
        if(next==bannerImg.length) {
            next = 0;
        }
        bannerImg[next].style.left=w+'px';
        bannerdian[current].classList.remove('hot');
        bannerdian[next].classList.add('hot');
        animate(bannerImg[current],{left:-w});
        animate(bannerImg[next],{left:0},function(){
            flag=true;
        });
        current=next;
    }
    flipleft.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next--;
        if(next<0) {
            next =bannerImg.length-1;
        }
        bannerImg[next].style.left=-w+'px';
        bannerdian[current].classList.remove('hot');
        bannerdian[next].classList.add('hot');
        animate(bannerImg[current],{left:w});
        animate(bannerImg[next],{left:0},function(){
            flag=true;
        });
        current=next;
    }

    for(let i=0;i<bannerdian.length;i++){
        bannerdian[i].onclick=function(){
            if(next===i){
                return;
            }
            next=i;
            if(next>current){
                bannerImg[next].style.left=w+'px';
                animate(bannerImg[current],{left:-w});
                animate(bannerImg[next],{left:0});

            }else{
                bannerImg[next].style.left=-w+'px';
                animate(bannerImg[current],{left:w});
                animate(bannerImg[next],{left:0});

            }

            bannerdian[current].classList.remove('hot');
            bannerdian[next].classList.add('hot');
            current=next;
        }
    }






}
