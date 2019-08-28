var HtmlReporter = require('protractor-beautiful-reporter');
var HTMLReport = require('protractor-html-reporter-2');
var jasmineReporters = require('jasmine-reporters');


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

        //Relatorio padrão do Protractor

        var JasmineHtmlReporter = require('protractor-jasmine2-html-reporter');

        jasmine.getEnv().addReporter(new JasmineHtmlReporter({
            savePath: 'reports',
            screenshotsFolder: './shots',
            takeScreenshots: true,
            cleanDestination: true,
            fixedScreenshotName: true
        }))

        //Configuração do Relatorio Padrão do Protractor

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

        //Relatorio Protractor-beautiful-reporter

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
        }).getJasmine2Reporter());
        var reporter = new HtmlReporter({
            baseDirectory: 'tmp/screenshots',
        });

        //Configuração do Relatório Protractor protractor-html-reporter-2

        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './',
            filePrefix: 'xmlresults'
        }));

        //Testando gravação dos testes

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

         //Configuração para pegar as screenshots com sucesso no Relatório protractor-html-reporter-2

        var fs = require('fs-extra');

        fs.emptyDir('screenshots/', function (err) {
            console.log(err);
        });

        jasmine.getEnv().addReporter({
            specDone: function (result) {
                if (result.status == 'passed'){
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');

                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                } else if (result.status == 'failed'){
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');

                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });

    },
    //Plugin para screenshot no protractor-html-reporter-2

    plugins: [{
        package: 'jasmine2-protractor-utils',
        disableHTMLReport: true,
        disableScreenshot: false,
        screenshotPath: './screenshots',
        screenshotOnExpectFailure: false,
        screenshotOnSpecFailure: true,
        takeScreenshots: true,
        clearFoldersBeforeTest: true
    }],

    //Configuração do Relatório protractor-html-reporter-2

    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');

            testConfig = {
                reportTitle: 'Protractor - Relatório de Execução de Teste',
                outputPath: './',
                outputFilename: 'Protractor_Relatorio_Execucao_Teste',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: false,
                testPlatform: platform
            };
            new HTMLReport().from('xmlresults.xml', testConfig);
        });
    },

    capabilities: {
        'browserName': 'chrome',
        //'browserName': 'firefox',

        chromeOptions: {
            args: ["--headless", "--disable-gpu", "--window-size=800x600"]
        }
    }
}