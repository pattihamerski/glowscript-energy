<div id="glowscript" class="glowscript">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link type="text/css" href="https://s3.amazonaws.com/glowscript/css/redmond/2.1/jquery-ui.custom.css" rel="stylesheet" />
<link type="text/css" href="https://s3.amazonaws.com/glowscript/css/ide.css" rel="stylesheet" />
<script type="text/javascript" src="https://s3.amazonaws.com/glowscript/lib/jquery/2.1/jquery.min.js"></script>
<script type="text/javascript" src="https://s3.amazonaws.com/glowscript/lib/jquery/2.1/jquery-ui.custom.min.js"></script>
<script type="text/javascript" src="https://s3.amazonaws.com/glowscript/package/glow.3.0.min.js"></script>
<script type="text/javascript">
window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }

async function __main__() { // async wrapper permits use of await outside your own functions

var vector = vec // optional: makes vector a synonym of the fundamental vec
let scene = canvas()
let b = box({color:color.cyan})
async function f(obj) { // needs async because f() contains an await 
    let t = clock() 
    while (true) {
        await rate(100)
        obj.rotate({angle:0.01, axis:vec(0,1,0)})
        if (clock()-t > 3) break
    }
    return 25 
} 
let x = await f(b) // needs await (inside async __main__) because f() contains an await
print(x)
} // end of __main__ wrapper
__main__()
</script>
</div>
