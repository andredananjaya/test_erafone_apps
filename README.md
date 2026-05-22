# Erafone Mobile Automation Testing

This project contains the automation testing suite for the **Erafone** mobile application using **WebdriverIO** and **Appium**.

## 🚀 Prerequisites

Before running the tests, ensure your machine has the following installed:

- **Node.js** (Latest version recommended)
- **Android SDK** & **Platform Tools** (adb)
- **Java Development Kit (JDK)**
- **Appium Server** (Automatically managed by WebdriverIO service)
- A connected Android device or an active Emulator.

### Environment Variables Configuration (macOS)
Add the following lines to your `~/.zshrc` or `~/.bash_profile`:

```bash
export JAVA_HOME=$(/usr/libexec/java_home)
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
```

---

## 📦 Installation

1. Clone this repository.
2. Install dependencies by running:
   ```bash
   npm install
   ```

---

## 🛠 Device Configuration

Device settings are managed in `wdio.conf.js`. Ensure `deviceName` and `platformVersion` match your specific device:

```javascript
capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Andre Dananjaya Kristino',
    'appium:platformVersion': '13',
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.erafone.android',
    'appium:autoGrantPermissions': true,
    'appium:noReset': true  // i add this becasue can't close overlay dialog
}]
```

---

## 🏃‍♂️ How to Run Tests

### 1. Run All Tests
```bash
npm run wdio
```

### 2. Run by Tag (Grep)
Filter specific tests using the grep flag:
- **Run valid login tests only**: `npx wdio run ./wdio.conf.js --mochaOpts.grep=@valid`
- **Run invalid login tests only**: `npx wdio run ./wdio.conf.js --mochaOpts.grep=@invalid`

### 3. Run by Suite
Suites are pre-configured in `wdio.conf.js`:
- **Run Login Suite**: `npx wdio run ./wdio.conf.js --suite login`

---

## 📂 Project Structure

- `test/specs/`: Main test specification files (`test.e2e.js`).
- `test/pageobjects/`: Page element definitions and interactions (Page Object Pattern).
- `test/helper/`: Test data and utility functions.
- `wdio.conf.js`: Primary WebdriverIO configuration file.

---

## 🐞 Debugging

- Use `await browser.debug()` in your code to pause execution.
- Remember to increase `mochaOpts.timeout` when performing manual debugging.
- Monitor Appium logs in the terminal for detailed interaction with Android elements.
