module.exports = function(config) {
    var hostname = process.env.IP || 'localhost',
        port = process.env.PORT ? 16025 : 9876;
    
    config.set({
        basePath: '../',
        
        hostname: hostname,
        port: port,
        
        frameworks: ["ng-scenario"],
        
        files: [
          'test/e2e/**/*.js'
        ],
        
        autoWatch: false,
        
        browsers: ['PhantomJS'],
        
        singleRun: true,
        
        proxies: {
          '/': 'http://' + hostname + ':' + process.env.PORT || 8000 + '/'
        },
        
        junitReporter: {
          outputFile: 'test_out/e2e.xml',
          suite: 'e2e'
        },
    });
};
