<h1 align="center">itty.bitty.site generator</h3>

<p align="center">
  A ChatGPT plugin for making itty.bitty.site websites
</p>

<a href="https://twitter.com/iamalexjin/status/1643370197783572480?s=20" target="_blank">
  <img src="https://ittybittysite-generator.vercel.app/tweet.png" alt="Tweet introducing ittybittysite generator">
</a>

## What is it?

Anything you can dream up that can fit a simple and small self-contained website can be made with this plugin. Inspired by [itty.bitty.site](https://github.com/alcor/itty-bitty/), this plugin will use the power of ChatGPT to write HTML/CSS/JS and condense that into a handy link.

## Try the Plugin

If you have access to ChatGPT plugins, you can try this one out!

1. Go to the Plugin Store
2. Click "Install an unverified plugin"
3. Enter "ittybittysite-generator.vercel.app"
4. Click "Install".

## Contribution

- PRs and issues are welcome
- With new PRs, please include context and description about the change

## TODOs

- [ ] Return an error when the HTML/CSS/JS content length exceeds 1,000 chars because ChatGPT struggles to create URLs longer than that length
- [ ] Better prompting via the API spec, manifest, and/or API endpoint name to encourage ChatGPT to use even more minified code
- [ ] Option to return a short link from the API
