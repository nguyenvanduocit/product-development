<template><h2 id="obsidian-sample-plugin" tabindex="-1"><a class="header-anchor" href="#obsidian-sample-plugin" aria-hidden="true">#</a> Obsidian Sample Plugin</h2>
<p>This is a sample plugin for Obsidian (https://obsidian.md).</p>
<p>This project uses Typescript to provide type checking and documentation.
The repo depends on the latest plugin API (obsidian.d.ts) in Typescript Definition format, which contains TSDoc comments describing what it does.</p>
<p><strong>Note:</strong> The Obsidian API is still in early alpha and is subject to change at any time!</p>
<p>This sample plugin demonstrates some of the basic functionality the plugin API can do.</p>
<ul>
<li>Changes the default font color to red using <code>styles.css</code>.</li>
<li>Adds a ribbon icon, which shows a Notice when clicked.</li>
<li>Adds a command &quot;Open Sample Modal&quot; which opens a Modal.</li>
<li>Adds a plugin setting tab to the settings page.</li>
<li>Registers a global click event and output 'click' to the console.</li>
<li>Registers a global interval which logs 'setInterval' to the console.</li>
</ul>
<h3 id="first-time-developing-plugins" tabindex="-1"><a class="header-anchor" href="#first-time-developing-plugins" aria-hidden="true">#</a> First time developing plugins?</h3>
<p>Quick starting guide for new plugin devs:</p>
<ul>
<li>Check if <a href="https://obsidian.md/plugins" target="_blank" rel="noopener noreferrer">someone already developed a plugin for what you want<ExternalLinkIcon/></a>! There might be an existing plugin similar enough that you can partner up with.</li>
<li>Make a copy of this repo as a template with the &quot;Use this template&quot; button (login to GitHub if you don't see it).</li>
<li>Clone your repo to a local development folder. For convenience, you can place this folder in your <code>.obsidian/plugins/your-plugin-name</code> folder.</li>
<li>Install NodeJS, then run <code>npm i</code> in the command line under your repo folder.</li>
<li>Run <code>npm run dev</code> to compile your plugin from <code>main.ts</code> to <code>main.js</code>.</li>
<li>Make changes to <code>main.ts</code> (or create new <code>.ts</code> files). Those changes should be automatically compiled into <code>main.js</code>.</li>
<li>Reload Obsidian to load the new version of your plugin.</li>
<li>Enable plugin in settings window.</li>
<li>For updates to the Obsidian API run <code>npm update</code> in the command line under your repo folder.</li>
</ul>
<h3 id="releasing-new-releases" tabindex="-1"><a class="header-anchor" href="#releasing-new-releases" aria-hidden="true">#</a> Releasing new releases</h3>
<ul>
<li>Update your <code>manifest.json</code> with your new version number, such as <code>1.0.1</code>, and the minimum Obsidian version required for your latest release.</li>
<li>Update your <code>versions.json</code> file with <code>&quot;new-plugin-version&quot;: &quot;minimum-obsidian-version&quot;</code> so older versions of Obsidian can download an older version of your plugin that's compatible.</li>
<li>Create new GitHub release using your new version number as the &quot;Tag version&quot;. Use the exact version number, don't include a prefix <code>v</code>. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases</li>
<li>Upload the files <code>manifest.json</code>, <code>main.js</code>, <code>styles.css</code> as binary attachments. Note: The manifest.json file must be in two places, first the root path of your repository and also in the release.</li>
<li>Publish the release.</li>
</ul>
<blockquote>
<p>You can simplify the version bump process by running <code>npm version patch</code>, <code>npm version minor</code> or <code>npm version major</code> after updating <code>minAppVersion</code> manually in <code>manifest.json</code>.
The command will bump version in <code>manifest.json</code> and <code>package.json</code>, and add the entry for the new version to <code>versions.json</code></p>
</blockquote>
<h3 id="adding-your-plugin-to-the-community-plugin-list" tabindex="-1"><a class="header-anchor" href="#adding-your-plugin-to-the-community-plugin-list" aria-hidden="true">#</a> Adding your plugin to the community plugin list</h3>
<ul>
<li>Check https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md</li>
<li>Publish an initial version.</li>
<li>Make sure you have a <code>README.md</code> file in the root of your repo.</li>
<li>Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.</li>
</ul>
<h3 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h3>
<ul>
<li>Clone this repo.</li>
<li><code>npm i</code> or <code>yarn</code> to install dependencies</li>
<li><code>npm run dev</code> to start compilation in watch mode.</li>
</ul>
<h3 id="manually-installing-the-plugin" tabindex="-1"><a class="header-anchor" href="#manually-installing-the-plugin" aria-hidden="true">#</a> Manually installing the plugin</h3>
<ul>
<li>Copy over <code>main.js</code>, <code>styles.css</code>, <code>manifest.json</code> to your vault <code>VaultFolder/.obsidian/plugins/your-plugin-id/</code>.</li>
</ul>
<h3 id="improve-code-quality-with-eslint-optional" tabindex="-1"><a class="header-anchor" href="#improve-code-quality-with-eslint-optional" aria-hidden="true">#</a> Improve code quality with eslint (optional)</h3>
<ul>
<li><a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">ESLint<ExternalLinkIcon/></a> is a tool that analyzes your code to quickly find problems. You can run ESLint against your plugin to find common bugs and ways to improve your code.</li>
<li>To use eslint with this project, make sure to install eslint from terminal:
<ul>
<li><code>npm install -g eslint</code></li>
</ul>
</li>
<li>To use eslint to analyze this project use this command:
<ul>
<li><code>eslint main.ts</code></li>
<li>eslint will then create a report with suggestions for code improvement by file and line number.</li>
</ul>
</li>
<li>If your source code is in a folder, such as <code>src</code>, you can use eslint with this command to analyze all files in that folder:
<ul>
<li><code>eslint .\src\</code></li>
</ul>
</li>
</ul>
<h3 id="api-documentation" tabindex="-1"><a class="header-anchor" href="#api-documentation" aria-hidden="true">#</a> API Documentation</h3>
<p>See https://github.com/obsidianmd/obsidian-api</p>
</template>
