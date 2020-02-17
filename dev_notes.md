## Service Workers

1.)``` firstBtn.addEventListener('click', () => {
            navigator.serviceWorker.register('./sw-1.js');
        });
        secondBtn.addEventListener('click', () => {
            navigator.serviceWorker.getRegistration()
            .then((reg) => {
            return reg.unregister();
            })
            .then(() => {
            navigator.serviceWorker.register('./sw-2.js');
            });
        });
        ```

 