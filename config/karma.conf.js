module.exports = function(config) {
    var hostname = process.env.IP || 'localhost',
        port = process.env.PORT ? 16025 : 9876;
    
    config.set({
        basePath: '../',
        
        hostname: hostname,
        port: port,
        
        frameworks: ['jasmine'],

        files : [
          'app/lib/angular/angular.js',
          'app/lib/angular/angular-*.js',
          'test/lib/angular/angular-mocks.js',
          'app/js/**/*.js',
          'test/unit/**/*.js'
        ],
        
        autoWatch: true,
        
        browsers: ['PhantomJS'],
        
        junitReporter: {
          outputFile: 'test_out/unit.xml',
          suite: 'unit'
        },
    });
};
