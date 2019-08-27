
exports.config = {

    directConnect: true,
    framework: 'jasmine2',
    specs: ['specs/*-spec.js'],
    baseUrl: 'https://automacaocombatista.herokuapp.com/',

    onPrepare: function () {
        browser.manage().timeouts().implicitlyWait(10000);
        browser.ignoreSynchronization = true;

        TIMEOUT = 30000;

        var EC = protractor.ExpectedCondicions;

        var JasmineHtmlReporter = require('protractor-jasmine2-html-reporter');

        jasmine.getEnv().addReporter(new JasmineHtmlReporter({
            savePath: 'reports',
            screenshotsFolder: './shots',
            takeScreenshots: true,
            cleanDestination: true,
            fixedScreenshotName: true
        }))

        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true,
                displayErrorMessages: true,
                displayFailed: true,
                displayDuration: true
            },
            summary: {
                displayErrorMessages: true,
                displayStacktrace: true,
                displaySuccessful: true,
                displayFailed: true,
                displayDuration: true
            },
            colors: {
                enabled: true
            }
        }))



        // var VideoReporter = require('protractor-video-reporter');
        // jasmine.getEnv().addReporter(new VideoReporter({
        //     baseDirectory: 'C:\\TesteProtractor\\MarkTask\\reports\\videos',
        //     saveSuccessVideos: true,
        //     ffmpegCmd: "D:\\VLC.exe",
        //     ffmpegArgs: [
        //         '-f',
        //         'gdigrab',
        //         '-framerate',
        //         '30',
        //         '-i',
        //         'video=screen-capture-recorder',
        //         'title=Google - Mozilla Firefox'
        //     ],



        // }));

    },
    
    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');

            var HTMLReport = require('protractor-html-reporter-2');
            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: './reports',
                outputFilename: 'index',
                screenshotPath: './',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('./reports' + '/xml/xmlOutput.xml', testConfig);
        });
    },

    capabilities: {
        //'browserName': 'chrome'
        'browserName': 'firefox'
    }
}