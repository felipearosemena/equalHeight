equalHeight
===========

 Make heights match in a set of matching elements
 
## Usage
 
The plugin is quite simple. Just add a `data-equal-height=X` to any element, where `X` is the name of the group it belongs to. 

    <div data-equal-height="a"></div>
    <div data-equal-height="a"></div>
    <div data-equal-height="a"></div>
    
    <div data-equal-height="b"></div>
    <div data-equal-height="b"></div>

Then call the plugin:

    $('div').equalHeight();

Now all divs with `data-equal-height=a` will match heights, and the same for all `data-equal-height=b` elements.

It will automatically listen for resize events and readjust the size of all the elements
 
 
