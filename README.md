# (jqueryPluginSkeleton v1.0.1)

![JqueryPluginSkeleton](http://144.76.103.88/webforge_static/appLogos/jqueryPluginSkeleton.png)

(this repository is a possible skeleton to be used for jquery plugins creation; it is made following best practices guidelines; the following lines are the readme skeleton for the plugin to be created...)

## Custom Plugin v0.0.0

LIVE DEMO: [CustomPlugin demo](http://)

Short Description

### Usage
Just call **customPlugin()** on any jquery element.<br>
Example:

     $('.customPlugin').customPlugin();

Long description

example with options:
    
    $('.customPlugin').customPlugin({options});

### Options
**option1**: description1

#### Callbacks
Together with the options object it is possible to define some callbacks:

**callback1**: description1

(example)

    $('.customPlugin').customPlugin({
        option1: false,
        //callbacks
        callback1: function(par1) {
            console.log('something');
        },
    });

### Translations
it is possible to override them or add a custom translation by defining it in "langs" object in the constructor

    $('.customPlugin').customPlugin({
        lang: 'es',
        langs: {
            "es": {
                string1: "translated es 1",      
            }
        }
    });

### Methods

**method1**: description1

Example:

    var result = $('.customPlugin').customPlugin('method1');

### Grunt
It is provided with livereload and sass version of stylesheet;
use "grunt" to execute it and point your browser on "localhost:7000" (prerequisites: ruby, sass ("gem install sass"), grunt-cli, grunt and needed plugins ("npm install"), browser livereload extension);

Use --port option to serve it on another port; example:
**grunt --port=9000**

### License
Available under <a href="http://opensource.org/licenses/MIT" target="_blank">MIT license</a> (also available in included **license.txt** file).

##### History
1.0.1
-----
- some bug fixes

0.0.0
------
- first version
