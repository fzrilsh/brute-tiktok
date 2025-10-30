# brute-tiktok

**brute-tiktok** is a semi-automated tool used to increase views or favorites on TikTok videos. The process is done by entering the TikTok video URL you want to boost, then the script runs continuously until stopped.

## Main Features
- **Add Views:** Views increase roughly every 1–2 minutes, with increments of about 500 to 2000 views per batch.
- **Add Favorites:** Favorites increase roughly every 1–2 minutes, with increments of about 10 to 50 favorites per batch.
- Uses the **zefoy.com API**.
- **Semi-automated:** The tool does not run in headless mode because it requires manual interaction to solve captcha validation.

## Requirements
- **Node.js**: Latest version.
- **Chromium**: To automate the browser without headless mode.
- **API from zefoy.com**: Used to interact with TikTok.

## Installation
1. Clone this repository:
    ```bash
    git clone https://github.com/fzrilsh/brute-tiktok
    ```

2. Enter the project directory and install all packages:
    ```bash
    cd brute-tiktok && npm install
    ```

3. Make sure **Chromium** is installed by running:
    ```bash
    node node_modules/puppeteer/install.js
    ```

## How to Run
1. To start the script, run:
    ```bash
    node .
    ```

2. Follow the prompts in the terminal, including entering the TikTok video URL you want to boost.

3. The **Chromium** browser will open and run without headless mode. You will need to manually solve any captcha validations.

## Notes
- Adding views and favorites takes about 1–2 minutes per batch.
- This tool is semi-automated because manual captcha solving is required.
- Make sure to follow zefoy.com's usage policies.

## License
This project is licensed under the [MIT License](./LICENSE).
