Functionality of projects 

##### Project has a product landing page which is hosted on `localhost/magento/product-list`. The product landing page has a navigation bar, toolbar and products. When user clicks on navbar items user redirects to the Landing page. The Landing page shows 10 products which includes image, name and price of every product. 
             

# Step that are used to create project

### step-1 Created following files
1. listing.js  inside (`magento/js`)
2. navbar.js  inside (`magento/js`)
3. product-list.css inside (`magento/skin/frontend/pbtheme/default/css/product-list.css`)
4. edited page.xml (`magento/app/design/frontend/pbtheme/default/layout/page.xml`) to add Jquery support in custom theme
5. Added Navbar block (`CMS->Static Blocks`) and create Navigation bar

### step-2: Added custom theme
1. Added a custom theme inside magento 1.8
2. Inside Admin page, selected the `System->Design` tab.
3. Clicked on `Add Design Change` button
3. Added pbtheme/default as my theme.

### step-3: Made CMS page using static Pages concept

1. Inside Admin page, selected the `CMS->Pages` tab.
2. Entered Title as `Product Listing Page `  and `product-list` as page URL identifier
3. Entered the page content in HTML format.
4. Added `listing.js` and `navbar.js` file by updating Layout Update XML with below code  `<reference name="head"><action method="addJs"><script>listing.js</script</action></reference>` and `<reference name="head"><action method="addJs"><script>navbar.js</script></action></reference>` 
5. and saved the page.

### step-4: Added `Jquery` support and navigation.js
1. Downloaded `Jquery.js 3.4.1v` 
2. In page.xml (`magento/app/design/frontend/pbtheme/default/layout/page.xml`) added below code to include jquery.js in whole the theme `<action method="addJs"><script>jquery.js</script></action>`

### step-5 Added `AJAX` call in listing.js
1. Fetched the api data using `AJAX` call
2. On successful fetch of data the page will show images with it's price and name below it
3. implemented a iteration over child elements to show images, price and name of respective parent elements.


### step-6 Added Responsive fixed navbar and toolbar css
1. created Navbar and Toolbar using static block (`CMS->Static Blocks`) concept of magento
2. Entered Title as `Navbar` and identifier as `navbar-block`
3. Added responsive css inside product-list.css (`magento/skin/frontend/pbtheme/default/css/product-list.css`)
4. Added `product-list.css` file by updating Layout Update XML in `CMS->Pages->Product Listing Page` with below code `<reference name="head"><action method="addCss"<stylesheet>css/product-list.css</stylesheet></action></reference>`

### step-7 Added Navbar function in navbar.js
1. Added `openNav()` and `closeNav()` on  hamberger icon to open and close navbar item in mobile view
