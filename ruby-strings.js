/* Ruby strings */
/* MIT Licensed - github.com/colinyoung/ruby-strings */
String.prototype.to_s = function(alt) {
    if (alt == null) alt = false
    var m = null;
    var regex = /#\{([^}]*)\}/gi;
    var cpy = this + "";
    while ((m = regex.exec(this)) != null) {
        var value = "";
        try {
            value = eval(m[1]);
        } catch (e) {}
        if (typeof value == "number") value = value + "";
        if (typeof value == "boolean") value = value ? "true" : "false";
        if (typeof value == "object") try {
            value = value.to_s(alt)
        } catch (e) {};
        if (typeof value != "string") value = "";
        cpy = cpy.replace(m[0], value);
    }
    return cpy;
}

Object.prototype.to_s = function(alt) {
    var s = "";
    if (this.constructor === Array) {
        if (!alt) s += "[";
        for (i = 0; i < this.length; i++) {
            if (i == this.length - 1 && alt && this.length != 1) s += " and ";
            s += this[i].to_s(alt);
            if (i != this.length - 1) s += ", ";
        }
        if (!alt) s += "]";
    }
    if (this.constructor === Object) {
        if (!alt) s += "{";
        var word = alt ? " is " : ": ";
        var sep = alt ? " and " : ",";
        for (key in this) {
            if (typeof this[key] != "function") {
                if (this[key].constructor === Array && this[key].length != 1) word = " are ";
                s += key + word + this[key].to_s(alt) + sep + " ";
            }
        }
        var regex = new RegExp("" + sep + " $");
        s = s.replace(regex, '');
        if (!alt) s += '}';
    }
    return s;
}
Number.prototype.to_s = function() {
    return this.toString();
}
Boolean.prototype.to_s = function() {
    return this ? "false" : "true";
}