charIterator
============

charIterator is a [jQuery][1] plugin which loops through characters of a string in an HTML element and optionally applies a function to the characters.  
It also supports textnodes which include childnodes (e.g. `<p>Some text with <em><strong>child</strong>ren</em> in the DOM.</p>`).

Options
-------

    skipSpaces: true, // boolean, whether the function should also be applied to (white)space-characters
    insertBefore: '', // text, the text (or HTML) to be inserted before the characters
    insertAfter: '', // text, the text (or HTML) to be inserted after the characters
    animation: function() { }, // the animation which should be run on the characters
    loop: false, // bool|int, the number of times the animation should loop or true for an infinite loop
    timeout: 200 // int, the timeout before the next character will be animated

Usage
-----

The [basic usage][2] of the charIterator plugin may come in handy when you need to wrap all characters in an container. By default the plugin wraps all characters in a `<span class="charIteractor-wrap"></span>`.

    <h1>charIterator <em>is</em> cool!</h1>

    $('h1').charIterator();

Which would result in:

    <span class="charIterator-wrap">c</span><span class="charIterator-wrap>h</span><span class="charIterator-wrap>a</span><span class="charIterator-wrap>r</span>...

To add an [animated effect][3] [jQuery UI][4] needs to be loaded. The wanted effect can be added through the plugin options:

    <h1>charIterator <em>is</em> cool!</h1>

    $('h1').charIterator({
      animation: function(char) {
        $(char).animate({
          opacity: 0.1
        }, 2000);
      }
    });

Note that in order to be able to [loop the animation][5] in the above example the `opacity` has to be reset first:

    <h1>charIterator <em>is</em> cool!</h1>

    $('h1').charIterator({
      loop: true,
      animation: function(char) {
        $(char).animate({
          opacity: 0.1
        }, 2000, function() {
          $(char).animate({
            opacity: 1
          }, 2000);
        });
      }
    });

[1]:http://jquery.com/
[2]:http://jsfiddle.net/PeeHaa/nAaj8/
[3]:http://jsfiddle.net/PeeHaa/22gDX/
[4]:http://jqueryui.com/
[5]:http://jsfiddle.net/PeeHaa/SzPX7/