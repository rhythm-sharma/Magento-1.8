console.log('hello rhythm');

var $j = jQuery.noConflict(); 

// $j(document).ready(function(){
//     $j("#info").css("padding","100px");
// });


$j.ajax({
    url: "https://optimus.pipabella.com/v1/search/67?page=1&sort_type=New%20Arrivals&f=&rows=10",
    type: "GET",
    success: function(data) {
        console.log(data.results.data)
        console.log(data.results.data[0].name)
        $j('.products').children('div').children('p').each(function(i) { 
            $j(this).html(data.results.data[i].name);
        });

        $j('.products').children('div').children('img').each(function(i) {
            $j(this).attr('src', $j(this).attr('src').replace("Smiley", data.results.data[i].image1));
        });

        $j('.products').children('div').children('#price').each(function(i) {
            $j(this).append(data.results.data[i].price);
        });
    }
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

{/* <div class="products">
    
    <div class="product">
        <img src="Smiley" alt="Smiley face" width="270" height="350" />
        <p>name</p>
        <div id="price"> ₹</div>
    </div>
    
    <div class="product">
        <img src="Smiley" alt="Smiley face"  width="260"  height="350" />
        <p>name</p>
        <div id="price" class="price"> ₹</div>
    </div>
    
    <div class="product">
        <img src="Smiley" alt="Smiley face"  width="260"  height="350" />
        <p>name</p>
        <div id="price" class="price"> ₹</div>
    </div>
    
    <div class="product">
        <img src="Smiley" alt="Smiley face"  width="260"  height="350" />
        <p>name</p>
        <div id="price" class="price"> ₹</div>
    </div>
    
    <div class="product">
        <img src="Smiley" alt="Smiley face"  width="260"  height="350" />
        <p>name</p>
        <div id="price" class="price"> ₹</div>
    </div>
    
    <div class="product">
        <img src="Smiley" alt="Smiley face"  width="260"  height="350" />
        <p>name</p>
        <div id="price" class="price"> ₹</div>
    </div>
    
    <div class="product">
        <img src="Smiley" alt="Smiley face"  width="260"  height="350" />
        <p>name</p>
        <div id="price" class="price"> ₹</div>
    </div>
    
    <div class="product">
        <img  src="Smiley"alt="Smiley face"  width="260"  height="350" />
        <p>name</p>
        <div id="price" class="price"> ₹</div>
    </div>
    
    <div class="product">
        <img src="Smiley" alt="Smiley face"  width="260"  height="350" />
        <p>name</p>
        <div id="price" class="price"> ₹</div>
    </div>

    <div class="product">
        <img src="Smiley" alt="Smiley face"  width="260"  height="350" />
        <p>name</p>
        <div id="price" class="price"> ₹</div>
    </div>

</div> */}
