# scroll-animate
Let's make animation while scroll page!

## Ussage:

      new Parallax('.c-header-logo', -.35, function(elem, val){
        elem.style.margin = val + "px 0 0 0";
      });

## Arguments:

1. Element
2. Direction and velocity
3. Call back function

## Call back arguments:

1. Element
2. Calculated value
