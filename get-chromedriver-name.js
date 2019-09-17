const DEFAULT_CHROMEDRIVER_NAME = 'chromedriver';
const CHROMEDRIVER_PROCESS_REGEX = new RegExp(/(\d+.\d+-x64-chromedriver)/gm);

const chromedriverPath = process.argv[2];

if (!chromedriverPath) throw new Error('No chromedriver path passed in');

const nameMatches = chromedriverPath.match(CHROMEDRIVER_PROCESS_REGEX);

let chromeDriverName = DEFAULT_CHROMEDRIVER_NAME;

if (nameMatches) {
    // Make the latest version appear as first
    nameMatches.reverse();

    chromeDriverName = nameMatches[0];
}

// Have to console out the value for ant to pick up
console.log(chromeDriverName);