# DOM Scraping
Simple Drupal module to create a API to use DOM snippet

root-drupal-url/dom-scraping.json

#### Output:
```JavaScript
{
 ...
"style": {
"main": "dom",
"custom": ""
},
"javascript": {
"main": "dom",
"custom": ""
},
"header": "dom",
"mainmenu": "dom",
"footer": "dom"
}
```
#### Example of use:
```Php
<?php
 // Get the string from the URL
 $json = file_get_contents('root-drupal-url/dom-scraping.json');
 // Decode the JSON string into an object
 $api = json_decode($json);
 <html>
 <head>
    <?php echo $api->style->main; ?>
    <?php echo $api->javascript->custom; ?>
    <?php echo $api->javascript->main; ?>
    <?php echo $api->javascript->custom; ?>
 </head>
 <body>
    <?php echo $api->header; ?>
    <?php echo $api->mainmenu; ?>
    <div id="content">
        <div class="container">
            <h1><?php echo $api->title; ?></h1>
            <p><?php echo $api->description; ?></p>
        </div>
    </div>
    <?php echo $api->footer; ?>
 </body>
 </html>
?>
```
