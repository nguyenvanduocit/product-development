<template><p>Dùng ssh để forward request từ server về máy client.</p>
<p>Config trên server:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vi /etc/ssh/sshd_config
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Edit nội dung như sau:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GatewayPorts yes
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Restart service:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>service ssh restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Connect from client:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ssh -fNT root@68.183.188.160 -R 80:127.0.0.1:8080
 
    root - username
    68.183.188.160 - server address
    80 - port number that will be opened on remote server - our proxy server
    127.0.0.1 - IP address we open tunnel to
    8080 - port number we open tunnel to
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
