const rust = import('./pkg/rust_3d_demo');

rust.then(m => {
    m.say_howdy();
});
