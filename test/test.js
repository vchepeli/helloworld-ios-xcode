const wdio = require('webdriverio');
const assert = require('assert');

const desiredCapabilities = require('./dc');
desiredCapabilities.platformName = 'iOS';
desiredCapabilities.deviceName = 'iPhone 7';
desiredCapabilities.app = './helloworld.ipa';
desiredCapabilities.automationName = 'XCUITest';
desiredCapabilities.udid = 'auto';

const opts = {
  port: 4723,
  desiredCapabilities
};

const client = wdio.remote(opts);

describe('Test', function() {
  this.timeout(0);

  before(async function() {
    await client.init();
  });

  after(async function() {
    await client.end();
  });

  it('should say HelloWorld', async function() {
    await client.click('~testButton')
      .pause(1000);
    const value = await client.getText('~testLabel');
    assert.equal(value, 'HelloWorld');
  });
});
