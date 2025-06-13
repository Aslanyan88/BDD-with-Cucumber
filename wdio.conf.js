// wdio.conf.js
exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: 'local',

    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs (or .feature files) should be run.
    specs: [
        './features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    //
    // ============
    // Capabilities
    // ============
    // Defines the maximum number of instances (workers) that can be run in parallel.
    maxInstances: 10,
    //
    // Defines every browser you want to test against.
    capabilities: [{
        // maxInstances can get overwritten per capability.
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            // To run Chrome headless (without a UI), uncomment the line below.
            args: [
                '--headless',
                '--disable-gpu',
                '--no-sandbox',
                '--disable-dev-shm-usage'
            ]
        },
        acceptInsecureCerts: true
    }],

    //
    // ===================
    // Test Configurations
    // ===================
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',

    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,

    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the `baseUrl` is prepended, e.g. `browser.url('/login')`
    baseUrl: 'https://the-internet.herokuapp.com',

    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    
    // Default request retries count
    connectionRetryCount: 3,
    
    //
    // ==================
    // Service Plugins
    // ==================
    // Services are empty here because the `wdio-chromedriver-service` is now
    // deprecated and we use the `chromedriver` package directly.
    // WDIO will automatically detect and use it.
    services: ['chromedriver'],
    
    //
    // =================
    // Framework Options
    // =================
    // The framework to be used. It can be Mocha, Jasmine, or Cucumber.
    framework: 'cucumber',
    
    //
    // ==================
    // Reporter Plugins
    // ==================
    // Reporters are used to report test results.
    reporters: ['spec', ['junit', {
        outputDir: './results',
        outputFileFormat: function(options) {
            return `results-${options.cid}.xml`
        }
    }]],

    //
    // If you are using Cucumber you need to specify the location of your step definitions.
 cucumberOpts: {
        require: ['./features/step-definitions/**/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tags: '', // <--- THIS IS THE LINE YOU NEED TO CHANGE
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
    
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process.
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // before: function (suite) {
    //     browser.maximizeWindow();
    // },
};