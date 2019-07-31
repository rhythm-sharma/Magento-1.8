var $j = jQuery.noConflict();

const LISTING_API_PATH = 'https://optimus.pipabella.com/v1/search/67';
const sortType = "New%20Arrivals";
var pageNo = 1;
const rowNo = 10;

$j(document).ready(function() {
    $j("#swipe").hide();
    $j("#top-icon-menu").hide();
    $j("#header-container").hide();
    $j(".actions").hide();
    $j("#next-button").click(function () {
        $j("html, body").animate({ scrollTop: 0 }, 50);
        $j('#productContainer').hide();
        $j('#loading').show();
        fetchProducts()
    });

    /* loading gif */
    $j('#productContainer').hide();
    $j('#loading').show();
});


fetchProducts();

function fetchProducts () {
    
    var listingApiPath = `${LISTING_API_PATH}?page=${pageNo}&sort_type=${sortType}&f=&rows=${rowNo}`;
    pageNo += 1;

    $j.ajax({
        url: listingApiPath,
        type: "GET",
        success: function(data) {
            
            var _data = data.results.data;
            
            $j('#productContainer').empty();
            
            for (var i = 0; i < _data.length; i++) {
                createProductDiv(_data[i]);
            }

            $j('#productContainer').show();
            $j('#loading').hide();
        }
    });
}


function createProductDiv(productDetails) {
    /* Created Dynamic HTML elements */
    var product =  $j("<div>",{
                        class: 'product'
                    }).appendTo('#productContainer');

    $j("<img>",{
                class: 'productImage',
                width: "250",
                height: "350",
                src: productDetails.image1,
                alt: productDetails.name
            }).appendTo(product);

     $j("<p>",{
                class: 'productName',
            }).appendTo(product);
            $j(".productName").html(productDetails.name);
                
    $j("<div>",{
                class: 'productPrice'
            }).appendTo(product);
            $j(".productName").html("₹ " + productDetails.name);
}
