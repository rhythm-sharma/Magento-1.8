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
            var parentEl = $j('#productContainer')
            var _data = data.results.data;
            
            /* Show  Product Name */
            parentEl.find(`.productName`).each(function(i) {
                $j(this).html('');
                $j(this).html(_data[i].name);
            });

            /* Show  Product Image */
            parentEl.find(`.productImage`).each(function(i) {
                $j(this).attr('src', $j(this).attr('src').replace($j(this).attr('src'), _data[i].image1));
            });

            /* Show  Product Price */
            parentEl.find(`.productPrice`).each(function(i) {
                $j(this).html('');
                $j(this).html(`₹ ${_data[i].price}`);
            });

            /* loading product content */
            $j('#productContainer').show();
            $j('#loading').hide();
        }
    });
}
