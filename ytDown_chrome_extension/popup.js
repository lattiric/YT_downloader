(() => {
    'use strict';

    console.log("Testing except not with a button.");

    const button = document.getElementById('btnTest');
    if (button) {
        button.addEventListener('click', () => {
            console.log('Test button was pressed!');
        })
    }

    function doSomething() {
        console.log('Doing something...');
    }
})();