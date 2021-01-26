(function(){
    document.getElementById('js-topics').addEventListener('click',function(){

        if(this.classList.contains('is-active')) {
            this.parentNode.nextElementSibling.classList.remove('is-active');
            this.classList.remove('is-active');
        }else {
            this.parentNode.nextElementSibling.classList.add('is-active');
            this.classList.add('is-active');
        }
    },false);

   /* $('#js-banner-list').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        centerMode: true,
        variableWidth: true
    });*/


    $(".is-not-allowed").on('click',function(e){
       e.preventDefault();
    });

    $(window).on('load',function(){

        $('.loading').delay(500).queue(function(){
            $(this).addClass('off').dequeue();
            $('body').css('overflow-y', 'scroll');
            $('.js-scroll-top').each( function() {
                $.when(
                    $(this).delay(300).addClass("is-show")
                ).done(function() {
                    $(this).delay(300).queue(function(){
                        $(this).addClass("is-done")
                    })
                });

            });
        });
    });


})();

const baloon1 = "M289.12,609.34c-80,121.3-243.59-36.06-264.64-127.23-15.95-69,28.58-140,95-161.89,72-23.75,151.46,14.09,218.66-23.71C420.82,250,436.68,163.26,490,93.92,544.71,22.67,602,73.69,632.12,135.57,674,221.77,686.37,393.76,560,414.39c-37.06,6.05-71.1,5-105.87,22.33C382.94,472.13,331.55,545,289.12,609.34Z";
const baloon2 = "M270,588.5c-90.31,113.83-213.8-44.57-238-134-23-85,23.27-139.88,91.4-155.89C197.22,281.25,271.75,315.74,342,284c86.4-39.06,100.47-118.31,159.62-182.72,60.78-66.18,142.84-9,167.38,55.25,34.19,89.54,29.17,271.59-98.58,281.07-37.44,2.78-87.8-7.8-123.95,6.39C372.5,473,317.9,528.12,270,588.5Z";
const baloon3 ="M313.3,601.77c-69.3,66.73-221,12-272.3-66.27-61-93-15-169,72-216,66.72-36,142.72-.89,206.12-44.76,78-54,85.72-141.82,132.33-215.8,47.91-76,123.72-19.54,159.41,39.28,49.72,81.94,78,252-46,284.32C528.54,392,476,383,443,403.5,375.45,445.36,368.82,548.31,313.3,601.77Z";
const baloon4 ="M313.3,601.77C255,656.5,138.71,631.81,75,571.5c-75-71-49-205,38-252,66.72-36,106.6-60.13,170-104,78-53.95,102.51-99.13,168.45-156.56C491,24.5,566,27.5,610.86,98.22c51.34,80.94,64.1,218.82-46,284.32C533,401.5,487,416,454,436.5,386.45,478.36,372.59,546.12,313.3,601.77Z";

const starfish1 = "M74.29,532.52c-37.48-87.65,84.58-117,87.93-197.55,12.07-63.37-27.54-91.26-44.93-142.76C98.94,117.75,188.71,58,250.59,103.46c137.35,73.05,153.58-30.84,241.86-64,66.24-15.23,126.91,56.09,101.41,118.9-29.57,74.32,17.25,164.08,94.6,183.25,21.64,5.68,37.95,23.68,42.37,45.45,9.2,39.74-30,78.5-69.65,68.67-74.52-17.5-153.87,36.06-166.08,111.44-4.46,24.21-23.72,51.58-57.19,58.12a71.91,71.91,0,0,1-66.83-21.69C268,481,143.88,672.05,74.29,532.52Z";
const starfish2 = "M24.5,369.5c7.31-98.74,141.87-5.88,158.49-84.81C205.36,224.19,160.35,167,150.5,113.5c-14-76,77.86-117.8,158-43,75,70,177.86-5.26,268-33,65-20,109.53,51.27,74,109-41.45,68.42-51,168,50.4,231.68,45.58,28.61,34.6,66.32,21.6,87.32-21.47,34.68-63.46,34.25-101,18-70.6-29.58-125.5-45.33-150,27-8.4,23.14-2.09,125.44-52,134-35,6-51-8-74.9-60.39C255,387.74,16.5,477.5,24.5,369.5Z";
const starfish3 = "M254.09,646.48c-75.72-39.39,27.67-168-12-226.35-35.55-52.33-102.44-54.29-146.54-84.25-58.45-47.33-35.49-82,43.66-103.23,173.16-46.32,130.77-117.25,176-198,23.14-41.33,72.55-22.3,102.51,28.37,39.93,67.53,80.61,119,141.64,99.88,48.31-15.13,97.83-21.83,119.57,12.66,21.27,33.75-5.78,69.53-40.94,88.86-97,53.33-119.57,81.39-70.57,138,31,35.78,88.79,79.94,50.4,126-33.72,40.48-68.9,8.54-126.12-12.94C344.6,460.39,329.81,685.87,254.09,646.48Z";
const starfish4 = "M31.5,541.72c-46-91.22,112.43-124.1,118-209.22C163.86,265.82,107.79,236,85.55,183c-35-83.53,58.68-152.2,123-102.53,143.37,80.7,196.2-30.44,294-50,70-14,116.27,63,87.73,128.74-33.14,77.83-28.73,146.26,95.39,196.12,22,8.82,39.52,26,43.64,49.12,8.72,42.24-33.64,82.23-75.37,70.84C575.55,454.93,486.5,432.5,475.5,588.94c-1.83,26-26.38,53.93-61.93,60a76.81,76.81,0,0,1-70.1-24.62C201.5,467.5,77.5,632.94,31.5,541.72Z";
const starfish5 = "M96.5,516.5c-54-62-18.69-155.36-15-195,4-43-13.7-83.8,4-138.47,21-64.53,147-72.54,226-91.53s113-79,191-61c72.43,16.71,84,71,87.73,128.74,2.93,45.37,28.27,125.26,95.39,196.12,16.26,17.18,33.32,44.07,28.88,67.14-5,26-23.33,42.7-60.61,52.82C568.5,498.5,511.5,585.5,494.5,600.5c-19.52,17.22-39,48-80.93,48.44-43.07.45-71.06-31.47-120.07-50.44C231.5,574.5,145.32,572.55,96.5,516.5Z";

const beans1 = "M43.38,220.76c14.26-67.28,72.93-103.22,161.15-74,181.94,60.45,98.77-97.28,230.36-88.22,131,9.06,172.29,331.06-95.2,333.58C79.77,394.54,30.91,279.88,43.38,220.76Z";
const beans2 = "M77,90.5c57.84-55.13,122-50,182,23,56.24,68.42,147-93,258.75,16.92C614,225.14,485,470.5,251,406.5S13,151.5,77,90.5Z";
const beans3 = "M108.92,249.52c-13.4-54.13,21.08-97,114.17-79,114,22,134.59-104.59,212.08-83.17,76.21,21.08,58.33,226.8-79.26,268.66C214,399.21,124.07,310.74,108.92,249.52Z";
const beans4 = "M515.72,317.47c-14.26,68.54-76.56,98.28-172.13,27.31-117-86.9-209.14,45.2-285.19-21.15C-16.39,258.36,115.65,35.27,294.1,62.68,478.17,91,531.85,240,515.72,317.47Z";

const svg = Snap('#svg').attr({
    width: 700,
    height: 680,
    viewBox: '0 0 700 680',
    fill: '#E7F8F6'
})

const svg2 = Snap('#svg2').attr({
    width: 750,
    height: 680,
    viewBox: '0 0 750 680',
    fill: '#E7F8F6'
})

const svg3 = Snap('#svg3').attr({
    width: 600,
    height: 450,
    viewBox: '0 0 600 450',
    fill: '#E7F8F6'
})

//取得したsvgに先ほどのパスを設置
const path = svg.path(baloon1);
const path2 = svg2.path(starfish1);
const path3 = svg3.path(beans1);

const anim = (pathname,shape, duration, easing, callback) => {
    pathname.animate({
        path: shape,

    }, duration, easing, callback)
}
//アニメーション呼び出し
let flg = 1;
function AnimateSvg() {
    if(flg === 1){
        anim(path, baloon1, 5000, mina.easeinout, AnimateSvg);
        flg = 2;
    }else if(flg === 2){
        anim(path, baloon2, 3000, mina.easeinout, AnimateSvg);
        flg = 3;
    }else if(flg === 3) {
        anim(path, baloon3, 3000, mina.easein, AnimateSvg);
        flg = 4;
    }else {
        anim(path, baloon4, 5000, mina.easeinout, AnimateSvg);
        flg = 1;
    }
}

let sfFlg = 1;
function AnimateSvg2() {
    if(sfFlg === 1){
        anim(path2, starfish1, 5000, mina.ease, AnimateSvg2);
        sfFlg = 2;
    }else if(sfFlg === 2) {
        anim(path2, starfish2, 9000, mina.easeinout, AnimateSvg2);
        sfFlg = 3;
    }else if(sfFlg === 3){
            anim(path2, starfish3, 6000, mina.easeinout, AnimateSvg2);
            sfFlg = 4;
    }else if(sfFlg ===  4){
        anim(path2, starfish4, 6000, mina.easeinout, AnimateSvg2);
        sfFlg = 5;
    }else {
        anim(path2, starfish5, 9000, mina.easeinout, AnimateSvg2);
            sfFlg = 1;
    }
}

let bsFlg = 1;
function AnimateSvg3() {
    if(bsFlg === 1){
        anim(path3, beans2, 5000, mina.ease, AnimateSvg3);
        bsFlg = 2;
    }else if(bsFlg === 2) {
        anim(path3, beans3, 9000, mina.easeinout, AnimateSvg3);
        bsFlg = 3;
    }else if(bsFlg === 4){
        anim(path3, beans4, 2000, mina.easeinout, AnimateSvg3);
        bsFlg = 4;
    }else {
        anim(path3, beans1, 9000, mina.easeinout, AnimateSvg3);
        bsFlg = 1;
    }
}

AnimateSvg();
AnimateSvg2();
AnimateSvg3();


$(function () {
    //モーダルウィンドウを出現させるクリックイベント
    $(".modal-open").on('click', function (e) {
        e.preventDefault();
        var pf = '.' + $(this).data('content');

        //キーボード操作などにより、オーバーレイが多重起動するのを防止する
        $(this).blur();	//ボタンからフォーカスを外す
        if ($(".modal-overlay")[0]) return false;		//新しくモーダルウィンドウを起動しない
        //if($(".modal_overlay")[0]) $(".modal_overlay").remove() ;

        //オーバーレイを出現させる
        $("body").append('<div class="modal-overlay"></div>').css('overflow', 'hidden');
        $(pf).css('display', 'block');
        $(".modal-overlay").fadeIn("fast");
        $(".modal-content").fadeIn("fast");

        $(".m-header,.m-footer,.l-container,.sassoku").addClass('is-blur');

        if(pf === ".mod-promo") {
            $(".modal-content").addClass("s-promo");
        }

        //コンテンツをセンタリングする
        centeringModalSyncer();

        //[.modal_overlay]、または[#modal-close]をクリックしたら…
        $(".modal-overlay,.modal-close").on('click', function () {
            $(pf).css('display', 'none');
            //[#modal-content]と[.modal_overlay]をフェードアウトした後に…
            $(".modal-content,.modal-overlay").fadeOut("fast", function () {

                //[.modal_overlay]を削除する
                $('.modal-overlay').remove();
                $(".m-header,.m-footer,.l-container,.sassoku").removeClass('is-blur');
            });

            $(".modal-content").removeClass("s-promo");
            $("body").css('overflow', 'inherit');
        });

    });

    //$(".modal_open").trigger('click');

    //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
    $(window).resize(centeringModalSyncer);
    var timer = null;
    $(window).on('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            centeringModalSyncer();
        }, 300);
    });
});

//センタリングを実行
function centeringModalSyncer() {
    //画面(ウィンドウ)の幅、高さを取得
    var w = $(window).width();
    var h = $(window).height();
    var st = $(window).scrollTop();
    //コンテンツ(#modal-content)の幅、高さを取得
    var cw = $(".modal-content").outerWidth();
    var ch = $(".modal-content").outerHeight();

    if (w < 768) {
        $(".modal-content").css({
            "left": ((w - cw) / 2) + "px",
            "top": (st + 10) + "px",
            "position": "absolute"
        });
    } else {
        //センタリングを実行する
        $(".modal-content").css({"left": ((w - cw) / 2) + "px", "top": ((h - ch) / 2) + "px", "position": "fixed"});
    }

}

let EffectH = 350;
$(window).on('scroll load', function() {
    var scTop = $(this).scrollTop();
    var scBottom = scTop + $(this).height();
    var effectPos = scBottom - EffectH;
    $('.js-scroll').each( function() {
        var thisPos = $(this).offset().top;
        if ( thisPos < effectPos ) {
            $.when(
                $(this).addClass("is-show")
            ).done(function() {
                $(this).delay(500).queue(function(){
                    $(this).addClass("is-done")
                })
            });
        }
    });
});