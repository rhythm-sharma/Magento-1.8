# Functionality of projects 

##### Project have product landing page which is hosted on `localhost/magento/product-list`. The product landing page has a navigation bar, toolbar and products. When user clicks on navbar items user redirects to the Landing page. The Landing page shows 10 products which includes image, name and price of every product.


# Step that are used to create project

### step-1 Created following files
1. ajaxcall.js  inside (`magento/js`)
2. navbar.js  inside (`magento/js`)
3. product-list.css inside (`magento/skin/frontend/pbtheme/default/css/product-list.css`)
4. edited page.xml (`magento/app/design/frontend/pbtheme/default/layout/page.xml`) to add javascript files
5. edited header.phtml (`app/design/frontend/pbtheme/default/template/page/html/header.phtml`) to create Navigation bar

### step-2: Added custom theme
1. Added a custom theme inside magento 1.8
2. Inside Admin page, selected the `System->Design` tab.
3. Clicked on `Add Design Change` button
3. Added pbtheme/default as my theme.

### step-3: Made CMS page using static Pages

1. Inside Admin page, selected the `CMS->Pages` tab.
2. Entered `product-list` as page URL identifier
3. Entered the page content in HTML format.
4. Added `ajaxcall.js` file by updating Layout Update XML with below code  
	`<reference name="head"><action method="addJs"><script>ajaxcall.js</script></action</reference>`  and saved the page

### step-4: Added `Jquery` support and navigation.js
1. Downloaded `Jquery.js 3.4.1v` 
2. In page.xml (`magento/app/design/frontend/pbtheme/default/layout/page.xml`) added below code to include jquery and navbar.js in whole theme                         `<action method="addJs"><script>jquery.js</script></action>` and ` <action method="addJs"><script>navbar.js</script></action>`

### step-5 Added `AJAX` call in ajaxcall.js
1. Fetched the api data using `AJAX` call
2. On successful fetch of data the page will show images with it's price and name below it
3. implemented a iteration over child elements to show images, price and name of respective parent elements.


### step-6 Added Responsive and fixed navbar and toolbar in whole theme
1. created Navbar and Toolbar inside header.phtml(`app/design/frontend/pbtheme/default/template/page/html/header.phtml`)
2. Added responsive css inside product-list.css (`magento/skin/frontend/pbtheme/default/css/product-list.css`)  

### step-7 Added Navbar function in navbar.js
1. Added `navbar function` on  hamberger icon to open navbar item in mobile view
