var $j = jQuery.noConflict();

const LISTING_API_PATH = 'https://optimus.pipabella.com/v1/search/67';
var sortType = "New%20Arrivals";
var pageNo = 1;
var rowNo = 10;

$j(document).ready(function() {
    $j("#swipe").hide();
    $j("#top-icon-menu").hide();
    $j("#header-container").hide();
    $j("#next-button").click(function () {
        fetchProducts()
    });
});


fetchProducts();

function fetchProducts () {
    
    var listingApiPath = `${LISTING_API_PATH}?page=${pageNo}&sort_type=${sortType}&f=&rows=${rowNo}`;
    console.log(listingApiPath, pageNo);
    pageNo += 1;
    $j.ajax({
        url: listingApiPath,
        type: "GET",
        success: function(data) {
            console.log(data.results.data);
            showProductAttr('productContainer', 'product', 'productName', data);
            showProductAttr('productContainer', 'product', 'productImage', data);
            showProductAttr('productContainer', 'product', 'productPrice', data);
            loadingProduct = true;
        }
    });
}

function showProductAttr(parent, child, grandchild, data) {
    
    $j(`#${parent}`).children(`.${child}`).children(`.${grandchild}`).each(function(i) {
        
        if(grandchild === 'productName'){
            $j(this).html('');
            $j(this).html(data.results.data[i].name);
        }
        
        if(grandchild === 'productImage'){
            
            $j(this).attr('src', $j(this).attr('src').replace($j(this).attr('src'), data.results.data[i].image1));
        }

        if(grandchild === 'productPrice'){
            $j(this).html('');
            $j(this).html(`₹ ${data.results.data[i].price}`);
        }
    });
}

{/* <div id="productContainer" class="product-container">
    
    <div class="product">
        <img class="productImage" src="Product-image" alt="Product-image" width="250" height="350" />
        <p class="productName">name</p>
        <div class="productPrice"> ₹</div>
    </div>
    
    <div class="product">
        <img class="productImage" src="Product-image" alt="Product-image" width="250" height="350" />
        <p class="productName">name</p>
        <div class="productPrice"> ₹</div>
    </div>
    
    <div class="product">
        <img class="productImage" src="Product-image" alt="Product-image" width="250" height="350" />
        <p class="productName">name</p>
        <div class="productPrice"> ₹</div>
    </div>
    
    <div class="product">
        <img class="productImage" src="Product-image" alt="Product-image" width="250" height="350" />
        <p class="productName">name</p>
        <div class="productPrice"> ₹</div>
    </div>
    
    <div class="product">
        <img class="productImage" src="Product-image" alt="Product-image" width="250" height="350" />
        <p class="productName">name</p>
        <div class="productPrice"> ₹</div>
    </div>
    
    <div class="product">
        <img class="productImage" src="Product-image" alt="Product-image" width="250" height="350" />
        <p class="productName">name</p>
        <div class="productPrice"> ₹</div>
    </div>
    
    <div class="product">
        <img class="productImage" src="Product-image" alt="Product-image" width="250" height="350" />
        <p class="productName">name</p>
        <div class="productPrice"> ₹</div>
    </div>
    
    <div class="product">
        <img class="productImage" src="Product-image" alt="Product-image" width="250" height="350" />
        <p class="productName">name</p>
        <div class="productPrice"> ₹</div>
    </div>
    
    <div class="product">
        <img class="productImage" src="Product-image" alt="Product-image" width="250" height="350" />
        <p class="productName">name</p>
        <div class="productPrice"> ₹</div>
    </div>

    <div class="product">
        <img class="productImage" src="Product-image" alt="Product-image" width="250" height="350" />
        <p class="productName">name</p>
        <div class="productPrice"> ₹</div>
    </div>
    <div class="next-button-container">
        <button class="next-button" style="vertical-align:middle"><span>Next page </span></button>
    </div>
</div>  */}
