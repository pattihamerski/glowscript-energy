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
running = true;
pause_button = ρσ_interpolate_kwargs.call(this, button, [ρσ_desugar_kwargs({text: "Pause", bind: pause_it, pos: scene.title_anchor})]);
async function pause_it() {
    if (running) {
        pause_button.text = "Resume";
        running = false;
    } else {
        pause_button.text = "Pause";
        running = true;
    }
};
if (!pause_it.__module__) Object.defineProperties(pause_it, {
    __module__ : {value: null}
});
