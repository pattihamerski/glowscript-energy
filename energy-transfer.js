function foo() {
    return 42;
}

var running = true;

function system_pairs(systems) {
    system_pairs = [];
    for (i = 0; i < systems.length; i++) { 
        for (j = i+1; j < systems.length; j++) {
            system_pairs.push([systems[i], systems[j]]);
        }
    }
    return system_pairs;
}
