$(document).ready(function(){
    $('.product-compare-item__product').find('.product-option').find('label').click(function(){
        var variantId = $(this).data('variant-id');
        $('.product-add-btns').find('.product-option').find(`[data-variant-id="${variantId}"]`).click();
    });

    $('.info-wrapper').click(function(e){
        e.stopPropagation();
        $(this).toggleClass('active');
    });

    $('body').click(function(){
        $('.info-wrapper').removeClass('active');
    });
});

var $compareProducts = $('.product-compare-item__product').find('.product-compare-content');
var compareProductsTop = $compareProducts.position().top;
var $compareTable = $('#shopify-section-ea-product-compare');
var compareTableBottom = $compareTable.position().top;
$(window).on('scroll', function(){
    var st = $(this).scrollTop();
    var height = $(this).height();
    var width = $(this).width();
    if (width < 768) {
        if (st > compareProductsTop + height) {
            $compareTable.addClass('compare-sticky');
        } else {
            $compareTable.removeClass('compare-sticky');
        }

        if (st > compareTableBottom) {
            $compareTable.removeClass('compare-sticky');
        }
    }
});