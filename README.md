charIterator
============

charIterator is a [jQuery][1] plugin which loops through characters of a string in an HTML element and optionally applies a function to the characters.  
It also supports textnodes which include childnodes (e.g. `<p>Some text with <em><strong>child</strong>ren</em> in the DOM.</p>`).

[1]:http://jquery.com/

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

The basic usage of the charIterator plugin may come in handy when you need to wrap all characters in an element, but doesn't do anythnig else.

    <h1>charIterator <em>is</em> cool!</h1>

    $('h1').charIterator();

Which would result in:

    <span>c</span><span>h</span><span>a</span><span>r</span><span>I</span><span>t</span><span>e</span><span>r</span><span>a</span><span>t</span><span>o</span><span>r</span> <em><span>i</span><span>s</span></em> <span>c</span><span>o</span><span>o</span><span>l</span><span>!</span>

To add an animated effect [jQuery UI][2] needs to be loaded. The wanted effect can be added through the plugin options:

    <h1>charIterator <em>is</em> cool!</h1>

    $('h1').charIterator({
      animation: function(char) {
        $(char).animate({
          opacity: 0.1
        }, 2000);
      }
    });

Note that in order to be able to loop the animation in the above example the `opacity` has to be reset first:

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

[2]:http://jqueryui.com/