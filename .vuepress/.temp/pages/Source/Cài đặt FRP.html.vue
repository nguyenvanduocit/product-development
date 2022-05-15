<template><p>Download file từ github</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>wget https://github.com/fatedier/frp/releases/download/v0.42.0/frp_0.42.0_linux_amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Giải nén nó:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tar -zxvf frp_0.42.0_linux_amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Di chuyển vào thứ mục vừa giải nén:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cd frp_0.42.0_linux_amd64
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Chép file <code>frps</code> vào thư mục bin:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cp frps /usr/bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Chép file service:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cp systemd/frpc.service /etc/systemd/system/.
chmod 754 /etc/systemd/system/frps.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Chép file config:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mkdir /etc/frp
cp frps.ini /etc/frp/.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Config file <code>/etc/frp/frps.ini</code></p>
<div class="language-ini ext-ini line-numbers-mode"><pre v-pre class="language-ini"><code>[common]
bind_port = 7000
kcp_bind_port = 7000
vhost_http_port = 8090
token = 2J6R3xfPBeHyKX
tcp_mux = true
subdomain_host = frp.duocnguyen.dev
dashboard_port = 7500

dashboard_user = admin
dashboard_pwd = ipIf08D3a42
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Enable service:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl enable frps.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Chạy service</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>systemctl start frps.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Cài đặt client</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>brew install frp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Hoặc tải tại trang <a href="https://github.com/fatedier/frp/releases">Releases · fatedier/frp · GitHub</a></p>
<p>Config client:</p>
<div class="language-ini ext-ini line-numbers-mode"><pre v-pre class="language-ini"><code>[common]  
server_addr = 128.199.148.122  
server_port = 7000  
protocol = kcp  
token = 2J6R3xfPBeHyKX  
admin_addr = 127.0.0.1  
admin_port = 7400  
admin_user = admin  
admin_pwd = admin  
  
[fireass]  
type = http  
local_port = 8080  
subdomain = fireass
use_compression = true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>run client:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>frpc -c ./frpc.ini
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
