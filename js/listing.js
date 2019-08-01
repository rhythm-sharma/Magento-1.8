var $j = jQuery.noConflict();

const LISTING_API_PATH = 'https://optimus.pipabella.com/v1/search/67';
const sortType = "New%20Arrivals";
var pageNo = 1;
const rowNo = 10;

$j(document).ready(function() {
    // $j("#loadMoreBtn").hide();
    $j("#swipe").hide();
    $j("#top-icon-menu").hide();
    $j("#header-container").hide();
    $j(".actions").hide();
    $j("#loading").show();

    $j("#buttonContainer").click(function () {
        $j("#loading").show();
        $j("#loadMoreBtn").hide();    
        fetchProducts();
    });

    fetchProducts();
});

function fetchProducts () {
    
    var listingApiPath = `${LISTING_API_PATH}?page=${pageNo}&sort_type=${sortType}&f=&rows=${rowNo}`;
    pageNo += 1;

    $j.ajax({
        url: listingApiPath,
        type: "GET",
        success: function(data) {
            

            $j('#buttonContainer').empty();
            
            var _data = data.results.data;
           
            for (var i = 0; i < _data.length; i++) {
                createProductDiv(_data[i]);
            }

            createLoadMoreButton();
            
            $j("#loading").hide();
            $j("#loadMoreBtn").show();  

        }
    });
}


function createProductDiv(productDetails) {
    /* Created Dynamic HTML elements */
    
    var product =  $j("<div>",{
        class: 'product'
    }).appendTo('#productContainer');

    $j("<img>",{
        class: 'product-image',
        src: productDetails.image1,
        alt: productDetails.name
    }).appendTo(product);
    
    $j("<p>",{
        class: 'product-name',
        text: productDetails.name
    }).appendTo(product);
    
    $j("<div>",{
        class: 'product-price',
        text: "₹ " + productDetails.price
    }).appendTo(product);

}


function createLoadMoreButton() {

    var button =  $j("<button>",{
        id: 'loadMoreBtn',
        class:'load-more-btn'
    }).appendTo('#buttonContainer');

    $j("<span>",{
        text: "Load More"
    }).appendTo(button);
}