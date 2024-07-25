# Sprint 8 project

Project name: 
hm08-qa-us

Project description: 
The project has been completed to test the following features of Urban Routes web user interface:

- Setting the address
- Selecting Supportive plan
- Filling in the phone number
- Adding a credit card
- Writing a message for the driver
- Ordering a Blanket and handkerchiefs
- Ordering 2 Ice creams
- The car search modal appears
- Waiting for the driver info to appear

Tests has been created using Node.js and WebDriverIO. 
Follow these steps to run the tests:
1) Open Terminal and move to project directory.
2) Initialize npm by running "npm init --yes"
3) Run the Urban Routes testing environment, copy the URL and update variable "baseUrl" in wdio.conf.js.
4) Run the tests using "npm run wdio"

# Known issues

## Some users may face an error associated with chromedriver. To perform test with Firefox, please, follow these steps:
1. Open terminal and move to the root directory of the project.
2. Run 'npm init wdio@latest' in Terminal to install the latest version of WebdriverIO (10.7.0 by 23rd of July, 2024).
3. Terminal with ask you some questions. Answer this way:
    - A project named "hm08-qa-us" was detected at "YOUR_PATH\hm08-qa-us", correct? - Yes
    - What type of testing would you like to do? - E2E Testing - of Web or Mobile Applications
    - Where is your automation backend located? - On my local machine
    - Which environment you would like to automate? (Use arrow keys) - Web - web applications in the browser
    - With which browser should we start? - Firefox
    - Which framework do you want to use? - Mocha (https://mochajs.org/)
    - Do you want to use a compiler? - No!
    - Do you want WebdriverIO to autogenerate some test files? - No
    - Which reporter do you want to use? - spec
    - Do you want to add a plugin to your test setup? - wait-for: utilities that provide functionalities to wait for certain conditions till a defined task is complete.
    - Would you like to include Visual Testing to your setup? - No
    - Do you want to add a service to your test setup? - toggle 'firefox-profile' and 'intercept' with space button, then press enter.
    - Do you want me to run `npm install`? - Yes
4. Open wdio.conf.js in root directory.
    - Add following line to 'specs': './test/specs/**/*.js'. This part of wdio.conf.js should look like:
    ```
    specs: [
        './test/specs/**/*.js'
    ],
    ```

    - Run your testing environment and add it's URL to 'baseURL'. This part of wdio.conf.js should look like:

    ```
   baseUrl: 'YOUR_TESTING_ENVIRONMENT_URL',
    ```

    - Add 'intercept' to 'services'. This part of wdio.conf.js should look like:

    ```
   services: ['firefox-profile', 'intercept'],
    ```

    - Add 'maxInstances: 5,' and 'acceptInsecureCerts: true,' to 'capabilities'. This part of wdio.conf.js should look like:
    ```
    capabilities: [{
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true,
    }],
    ```
    - Save wdio.conf.js.

## When you push the project to GitHub you may see following errors:

1.  WARN geckodriver: Error: no DISPLAY environment variable specified[0-0] 
    ERROR webdriver: Request failed with status 500 due to unknown error: Process unexpectedly closed with status 1

    To fix it, make sure that you specified headless mode in wdio.conf.js:
    - If you use Firefox:

    ```
        capabilities: [{
            maxInstances: 5,
            browserName: 'firefox',
            acceptInsecureCerts: true,
            'moz:firefoxOptions': {
                args: ['-headless']
            }
        }],
    ```

    - If you use Chrome:

    ```
        capabilities: [{
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: ['headless', 'disable-gpu']
            }
        }],
    ```

2.  Mixed spaces and tabs  no-mixed-spaces-and-tab

    To fix it, make sure that all the rows in your projects start with tabs, not spaces.
