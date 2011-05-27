# Ruby-style inline strings for JavaScript

Turn this:

    #{name} drove a #{make} #{model} (which was built in #{year} and has a #{trans} transmission), to the #{venue}.

into this:

    Colin drove a Pontiac Firebird (which was built in 1967 and has a manual transmission), to the racetrack.

***Note:** If a variable, like #{venue} above, is not defined -- it will simply not print anything.*

It supports objects and arrays:

    var friends = ["george", "jenny", "peter"];
    var hash = {one: "two", three: "four"};

    "#{friends}".to_s(); # => "[george, jenny, peter]"
    
    "#{hash}".to_s(); # => "{one: two, three: four}"

A different style (just call `.to_s(true)`)
    
    "#{friends}".to_s(true); # => george, jenny, and peter
    
    "#{hash}".to_s(true); # => one is two and three is four  

Even works with complex structures:

    var fruits_hash = {fruits: "apple"};
    "#{fruits_hash}".to_s(true); # => "fruits is apple"
    
    var multi_fruits_hash = {fruits: ["apple", "orange", "pineapple"]};
    "#{multi_fruits_hash}".to_s(true); # fruits are apple, orange, and pineapple