(function(global) {
    SystemJS.config({
        baseURL: '/bin',
        packages: {
            module1: {
                main: './main.js',
                defaultExtension: 'js'
            }
        }
    })
})(this);
