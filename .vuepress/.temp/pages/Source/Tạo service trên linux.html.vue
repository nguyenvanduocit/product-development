<template><h2 id="service-file" tabindex="-1"><a class="header-anchor" href="#service-file" aria-hidden="true">#</a> Service file</h2>
<p>Path: <code>/usr/lib/systemd/system/govanityurls.service</code></p>
<div class="language-ini ext-ini line-numbers-mode"><pre v-pre class="language-ini"><code>[Unit]
Description=govanityurls instance
Documentation=https://github.com/GoogleCloudPlatform/govanityurls
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
Restart=on-failure
WorkingDirectory=/root/govanityurls
RuntimeDirectoryMode=0750
ExecStart=/root/go/bin/govanityurls
Environment=PORT=8081

[Install]
WantedBy=multi-user.target

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>service govanityurls
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2>
<p>[[Tạo service trên MacOS]]</p>
</template>
