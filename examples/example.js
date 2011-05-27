var name = "Colin";
var make = "Pontiac";
var model = "Firebird";
var year = 1967;
var trans = "manual";

document.write("<p>My name is #{name}.<p>".to_s());

var string =  "#{name} drove a #{make} #{model} (which was built in " +
              "#{year} and has a #{trans} transmission), to the " + 
              "#{venue}.";
              
document.write('<pre>' + string + '</pre>')

document.write("<p>" + string.to_s() + "</p>");

document.write('<em><strong>Note:</strong> If a variable, like #{venue} above, is not defined -- it will simply not print anything.</em>');

document.write("<p>Let's try another, this time with objects and arrays:")

var all_the_names = ["george","jenny","peter"];
var hash = {one: "two", three: "four"};
var stacked_hash = {fruits: ["apple"]}
var stacked_hash_multi = {fruits: ["apple", "orange", "pineapple"]}

document.write("<p>#{all_the_names}<br />".to_s());
document.write("#{hash}</p>".to_s());

document.write("<p>A different style (just call <code>.to_s(true)</code>)")

document.write("<p>#{all_the_names}<br />".to_s(true));
document.write("#{hash}<br />".to_s(true));
document.write("#{stacked_hash}<br />".to_s(true));
document.write("#{stacked_hash_multi}<br />".to_s(true));