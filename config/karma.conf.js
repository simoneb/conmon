module.exports = function(config) {
    config.set({
        basePath: '../',
        
        hostname: process.env.IP || 'localhost',
        port: process.env.PORT || 9876,
        
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
