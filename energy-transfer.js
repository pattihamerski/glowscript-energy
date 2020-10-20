function foo() {
    return 42;
}

running = True;
pause_button = button(text="Pause", bind=pause_it, pos=scene.title_anchor);
function pause_it() {
    nonlocal running;
    if running {
        pause_button.text = "Resume";
        running = False;
    }
    else {
        pause_button.text = "Pause";
        running = True;
    }
}
