charIterator
============

charIterator is a [jQuery][1] plugin which loops through characters of a string in an HTML element and optionally applies a function to the characters.  
It also supports textnodes which include childnodes (e.g. `<p>Some text with <em><strong>child</strong>ren</em> in the DOM.</p>`).

[1]:http://jquery.com/

Options
-------

    skipSpaces: true // boolean, whether the function should also be applied to (white)space-characters
    insertBefore: '<span>' // text, the text (or HTML) to be inserted before the characters
    insertBefore: '</span>' // text, the text (or HTML) to be inserted after the characters

Usage
-----

    <h1>charIterator <em>is</em> cool!</h1>

    $('h1').charIterator();

Which would result in:

    <span>c</span><span>h</span><span>a</span><span>r</span><span>I</span><span>t</span><span>e</span><span>r</span><span>a</span><span>t</span><span>o</span><span>r</span> <em><span>i</span><span>s</span></em> <span>c</span><span>o</span><span>o</span><span>l</span><span>!</span>