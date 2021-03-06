$(function(){
    $.ajax({
        type:'GET',
        url:'https://api.myjson.com/bins/12syuc',
        dataType: 'json',
        success:function(data){
            console.log(data)
          for(i = 0; i < data.hits.length; i++){
            $('.component-container').append(component(data.hits[i]));
          }
        }
    });



      var lastScrollTop = 50;
      var lastScrollTop_2 = 0;
        $(window).scroll(function(event){
  
           var st = $(this).scrollTop();
            var width = $(window).width();
  
           if(st == 0){
              $('.header').removeClass('header-hide');
              $('.footer').removeClass('footer-hide');
              lastScrollTop = 0 ;
           }
           else  if (st > lastScrollTop ){
             $('.header').addClass('header-hide');
             $('.footer').addClass('footer-hide');
            }
           else if (st < lastScrollTop_2 ){
                $('.header').removeClass('header-hide');
                $('.footer').removeClass('footer-hide');
            }
  
            if(st > 0){
                  lastScrollTop = st;
                  lastScrollTop_2 = lastScrollTop - 15;
              }
        });
      
})


function component(product){
    if(product.image){
        return `
            <div class='component display-flex' id='${product.product_id}'>
              <a href='${product.link}'>
                <div class='component-image'><img  src='${product.image.link}'/></div>
                <div class='component-name display-flex'>${product.product_name}</div>
                <div class='component-price display-flex'>$ ${product.price}</div>
             </a>
            </div>
            `
    }
}