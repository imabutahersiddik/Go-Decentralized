## Installation

There is no need to download the `d-web.js` file as it is hosted on a CDN. Follow the instructions below to include it in your project:

### HTML

1. Include the `d-web.js` file in your HTML page by adding the following line within the `<head>` section:

   ```html
   <script src="https://cdn.jsdelivr.net/gh/imabutahersiddik/decentralized-web@main/public/js/d-web.js"></script>
   ```

2. Add the necessary HTML elements to your page where you want to display the Decentralized Page and the "Open Decentralized Page" link:

   ```html
   <div id="encrypted-html"></div>
   <a href="" class="d-web-link" id="d-web-link" onclick="encrypt()">Open Decentralized Page</a>
   ```

3. Save your changes and open the HTML page in a web browser. You should see the "Open Decentralized Page" link.

### WordPress

1. Log in to your WordPress admin dashboard.

2. Go to "Appearance" > "Editor".

3. Select your theme's `functions.php` file from the right-hand side.

4. Add the following code at the end of the `functions.php` file:

   ```php
   function enqueue_d_web_script() {
     wp_enqueue_script( 'd-web-script', 'https://cdn.jsdelivr.net/gh/imabutahersiddik/decentralized-web@main/public/js/d-web.js', array(), '1.0', true );
   }
   add_action( 'wp_enqueue_scripts', 'enqueue_d_web_script' );
   ```

5. Save your changes.

6. Edit the page or post where you want to display the Decentralized Page and the "Open Decentralized Page" link.

7. Switch to the "Text" mode in the editor and add the following code:

   ```html
   <div id="encrypted-html"></div>
   <a href="" class="d-web-link" id="d-web-link" onclick="encrypt()">Open Decentralized Page</a>
   ```

8. Save or update the page/post.

### Joomla, Blogger, and Other CMS/Frameworks

1. Identify the template file or section where you want to add the Decentralized Page and the "Open Decentralized Page" link.

2. Add the following code to that file or section:

   ```html
   <div id="encrypted-html"></div>
   <a href="" class="d-web-link" id="d-web-link" onclick="encrypt()">Open Decentralized Page</a>
   ```

3. Find the appropriate way to include the `d-web.js` file in your CMS/framework. This can vary depending on the platform. Generally, you can use a similar approach as shown for WordPress but customized to fit the specific CMS/framework.

4. Save your changes and refresh the corresponding pages.

### Customization

Styling: You can modify the CSS classes applied to the elements (`encrypted-html`, `d-web-link`) to match your preferred styling.