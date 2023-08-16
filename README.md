# One-Click Go Decentralized Plugin

The One-Click Go Decentralized plugin is a powerful tool that allows you to decentralize your web pages with ease. By leveraging decentralized web technologies, this plugin helps you preserve the integrity and availability of your content while enhancing accessibility for your users.

## Features

- **Easy Decentralization**: With just one click, you can decentralize your web page, ensuring its availability even in the face of network disruptions or censorship attempts.

- **Content Integrity**: Decentralizing your page protects it from unauthorized modifications or tampering, ensuring that your content remains intact and trustworthy.

- **Enhanced Accessibility**: The plugin generates a link to the decentralized version of your web page, making it easily accessible to users without relying on traditional centralized servers.

- **Unlimited Storage**: The One-Click Go Decentralized plugin provides unlimited storage capacity and enhances security by securely storing data within the URLs themselves, making it resistant to unauthorized modifications.

- **Seamless Integration**: The plugin provides straightforward integration with popular content management systems (CMS) and frameworks, such as WordPress, Joomla, Blogger, and more.

- **Customizable Styling**: Easily customize the appearance of the decentralized page and the "Open Decentralized Page" link to match your website's branding and design.

## Installation

1. Include the `d-web.js` file from a CDN in the `<head>` section of your web page.

```html
<script src="https://cdn.jsdelivr.net/gh/imabutahersiddik/decentralized-web@main/public/js/d-web.js></script>
```

2. Add the following HTML elements to your desired page or post where you want to display the decentralized page and the "Open Decentralized Page" link:

```html
<div id="encrypted-html"></div>
<a href="#" id="d-web-link">Open Decentralized Page</a>
```

3. Customize the CSS classes for the decentralized page and the "Open Decentralized Page" link to match your website's styling.

## WordPress Integration

1. Enqueue the `d-web.js` script in your theme's `functions.php` file.

```php
function enqueue_decentralized_script() {
    wp_enqueue_script('decentralized-script', 'https://cdn.jsdelivr.net/gh/imabutahersiddik/decentralized-web@main/public/js/d-web.js');
}
add_action('wp_enqueue_scripts', 'enqueue_decentralized_script');
```

2. Add the HTML elements mentioned above to the desired page or post in the WordPress editor.

## Integration with Other CMS/Frameworks

For other CMS/frameworks like Joomla or Blogger, follow these steps:

1. Identify the template file or section where you want to add the decentralized page and the link.

2. Add the required HTML elements mentioned above to the desired location.

3. Find the appropriate way to include the `d-web.js` file in your CMS/framework.

With the One-Click Go Decentralized plugin, you can effortlessly decentralize your web pages, ensuring unlimited storage, secure data storage in URLs, and protection against unauthorized modifications. Embrace the power of the decentralized web with just one click!