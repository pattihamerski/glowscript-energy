;(function() {;
var ρσ_modules = {};
ρσ_modules.pythonize = {};

(function(){
    function strings() {
        var string_funcs, exclude, name;
        string_funcs = set("capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(" "));
        if (!arguments.length) {
            exclude = (function(){
                var s = ρσ_set();
                s.jsset.add("split");
                s.jsset.add("replace");
                return s;
            })();
        } else if (arguments[0]) {
            exclude = Array.prototype.slice.call(arguments);
        } else {
            exclude = null;
        }
        if (exclude) {
            string_funcs = string_funcs.difference(set(exclude));
        }
        var ρσ_Iter0 = string_funcs;
        ρσ_Iter0 = ((typeof ρσ_Iter0[Symbol.iterator] === "function") ? (ρσ_Iter0 instanceof Map ? ρσ_Iter0.keys() : ρσ_Iter0) : Object.keys(ρσ_Iter0));
        for (var ρσ_Index0 of ρσ_Iter0) {
            name = ρσ_Index0;
            (ρσ_expr_temp = String.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name] = (ρσ_expr_temp = ρσ_str.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name];
        }
    };
    if (!strings.__module__) Object.defineProperties(strings, {
        __module__ : {value: "pythonize"}
    });

    ρσ_modules.pythonize.strings = strings;
})();
async function __main__() {
"use strict";

    var version, display, vector, print, arange, __name__, type, scene, ρσ_ls, running, pause_button;
    version = ρσ_list_decorate([ "3.1", "glowscript" ]);
    Array.prototype['+'] = function(r) {return this.concat(r)}
    Array.prototype['*'] = function(r) {return __array_times_number(this, r)}
    window.__GSlang = "vpython";
    display = canvas;
    vector = vec;
    print = GSprint;
    arange = range;
    __name__ = "__main__";
    type = pytype;
    scene = canvas();
    var strings = ρσ_modules.pythonize.strings;

    strings();
    "3";
    running = true;
    "4";
    pause_button = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({text: "Pause", bind: pause_it, pos: scene.title_anchor})]);
    "5";
    async function pause_it() {
        "6";
        "7";
        if (running) {
            "8";
            pause_button.text = "Resume";
            "9";
            running = false;
            "10";
        } else {
            "11";
            pause_button.text = "Pause";
            "12";
            running = true;
        }
    };
    if (!pause_it.__module__) Object.defineProperties(pause_it, {
        __module__ : {value: null}
    });

};
if (!__main__.__module__) Object.defineProperties(__main__, {
    __module__ : {value: null}
});

;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
