$(function(){

    $(window).scroll(function(){

        curr = $(window).scrollTop();// 스크롤의 위치

        target = $('.sc_about').offset().top;
    
    if(curr > target) {

        $('header').addClass('hd_fix')
    }else{ 
        $('header').removeClass('hd_fix')
    }
    });




     AOS.init();
     $('.sc_how .slide_wrap>.btn.prev').click(function(e){
            e.preventDefault();
            if($('.how_con>li.on').prev('.how_con>li').length == 0){//length는 개수 == 0? 존재하지 않다  
                $('.how_con>li').removeClass('on');
                $('.how_con>li:last-child').addClass('on');
            }else{
                $('.how_con>li.on').removeClass('on').prev('.how_con>li').addClass('on');
            }
         });
         $('.sc_how .slide_wrap>.btn.next').click(function(e){
            e.preventDefault();
            if($('.how_con>li.on').next('.how_con>li').length == 0){//length는 개수 == 0? 존재하지 않다  
                $('.how_con>li').removeClass('on');
                $('.how_con>li:first-child').addClass('on');
            }else{
                $('.how_con>li.on').removeClass('on').next('.how_con>li').addClass('on');
            }
         });

         serviceArr= ['공항이동','자유여행','무브골프','무브비즈니스','무브KTX','병원이동'];
        
        //serviceArr[2]
         var swiper = new Swiper(".sc_service .swiper", {
             effect:'fade',
            pagination: {
              el: ".service_menu",
              clickable: true,
              renderBullet: function (index, className) {
                return '<li class="' + className + '"><a href="">' + serviceArr[index] + "</a></li>";
              },
            },
            
            loop:true,
            navigation: {
                nextEl: ".sc_service .next",
                prevEl: ".sc_service .prev",
              },
          });

          var swiper = new Swiper(".sc_news .swiper", {
            slidesPerView: 2,
            grid: {
                rows: 3,
            },
            spaceBetween: 0,
            pagination: {
                el: ".sc_news .swiper-pagination",
                clickable: true,
            },
          });

          /**/
          $('.sc_faq .tab_head li').click(function(e){
              e.preventDefault();

            idVal = $(this).children('a').attr('href');
            $('.tab_con_wrap .tab_con').removeClass('active')
            $(idVal).addClass('active')
            $('.sc_faq .tab_head li').removeClass('active')
            $(this).addClass('active')
            $('.tab_con_wrap li').removeClass('active');
            
          });
          $('.tab_con_wrap li a').click(function(e){
              e.preventDefault();
                if($(this).parents('li').hasClass('active')){
                        
                    $('.tab_con_wrap li').removeClass('active');
                }else{
                    $('.tab_con_wrap li').removeClass('active');
                    $(this).parents('li').addClass('active');
                }
          });

                //

                // $('.sc_how .slide_wrap>.btn.next').click(function(e){
                //     e.preventDefault();
                //     $('.how_con>li.on').removeClass('on').next('.how_con>li').addClass('on');
        
                // });



                //여기가 how 탭 부분 prev가 안 먹힌다
                
                //service 탭도 모르겠다....스와이퍼 이용

                
                
                
                
                
                //QNA 부분


});


