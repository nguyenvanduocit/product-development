<template><h1 id="fatedier-frp" tabindex="-1"><a class="header-anchor" href="#fatedier-frp" aria-hidden="true">#</a> fatedier/frp</h1>
<p>A fast reverse proxy to help you expose a local server behind a NAT or firewall to the internet.</p>
<p>Có khá nhiều feature, tốt hơn ngrok, localtunnel, nhưng ở đây chỉ bắt đầu với việc sử dụng frp để expose <strong>localhost</strong> dưới một <strong>subdomain</strong> bất kỳ, có <strong>SSL</strong>.</p>
<p>Cài đặt bao gồm 3 phần:</p>
<ol>
<li>Cài đặt domain</li>
<li>Cài đặt frps trên server</li>
<li>Cài đặt frpc trên máy local</li>
</ol>
<h2 id="_1-cai-đat-domain" tabindex="-1"><a class="header-anchor" href="#_1-cai-đat-domain" aria-hidden="true">#</a> 1. CÀI ĐẶT DOMAIN</h2>
<p>Tạo 2 record như sau, với value là IP của server mà bạn muốn dùng để cài đặt frp:</p>
<ol>
<li><code>frp.duocnguyen.dev.</code></li>
<li><code>*.frp.duocnguyen.dev.</code></li>
</ol>
<h2 id="_2-cai-đat-tren-server" tabindex="-1"><a class="header-anchor" href="#_2-cai-đat-tren-server" aria-hidden="true">#</a> 2. CÀI ĐẶT TRÊN SERVER</h2>
<p>SSH vào server vào cài đặt như sau.</p>
<p>Download file từ github:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>wget https://github.com/fatedier/frp/releases/download/v0.42.0/frp_0.42.0_linux_amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Giải nén nó:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>tar -zxvf frp_0.42.0_linux_amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Di chuyển vào thứ mục vừa giải nén:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cd frp_0.42.0_linux_amd64
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Chép file <code>frps</code> vào thư mục bin:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cp frps /usr/bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Chép file service:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cp systemd/frpc.service /etc/systemd/system/. chmod 754 /etc/systemd/system/frps.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Config file <code>frps.ini</code></p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Chép file config:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mkdir /etc/frp cp frps.ini /etc/frp/.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Enable service:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl enable frps.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Chạy service</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl start frps.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Cài đặt nginx:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>sudo apt update sudo apt install nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Cài certbot</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>sudo apt install python3 python3-venv libaugeas0
sudo python3 -m venv /opt/certbot/
sudo /opt/certbot/bin/pip install --upgrade pip
sudo /opt/certbot/bin/pip install certbot certbot-nginx
sudo ln -s /opt/certbot/bin/certbot /usr/bin/certbot
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Tạo file config <code>/etc/nginx/sites-available/frp.duocnguyen.dev.conf</code>:</p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code>server {  
    server_name *.frp.duocnguyen.dev;  
    listen 80;  
    location / {  
        proxy_pass http://127.0.0.1:8090;  
        proxy_set_header    Host            $host;  
        proxy_set_header    X-Real-IP       $remote_addr;  
        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection &quot;upgrade&quot;;
    }
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/frp.duocnguyen.dev/fullchain.pem;  
    ssl_certificate_key /etc/letsencrypt/live/frp.duocnguyen.dev/privkey.pem;  
    include /etc/letsencrypt/options-ssl-nginx.conf;  
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;  
}  
server {  
    if ($host = .frp.duocnguyen.dev) {  
        return 301 https://$host$request_uri;  
    }  
    listen 80;  
    return 404;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>Enable nó:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>sudo ln -s /etc/nginx/sites-available/frp.duocnguyen.dev.conf /etc/nginx/sites-enabled/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Cài SSL cho nó:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>sudo certbot -d *.frp.duocnguyen.dev -d frp.duocnguyen.dev --manual --preferred-challenges dns-01 certonly
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Config theo như hướng dẫn của certbot.</p>
<h2 id="_3-cai-đat-client" tabindex="-1"><a class="header-anchor" href="#_3-cai-đat-client" aria-hidden="true">#</a> 3. CÀI ĐẶT CLIENT</h2>
<p>Cài đặt client</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>brew install frp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Hoặc tải tại trang <a href="https://l.workplace.com/l.php?u=https%3A%2F%2Fgithub.com%2Ffatedier%2Ffrp%2Freleases&amp;h=AT0A3SZL04zkzEzBKLnMSqsC0WiK-796trdwZwT9N4jHYS4IqBfzkwu6MPWH7l3Z33IT44R3PFN9a66mzK0cYCqeQQkIABLtRlNXAfPfrV7f9r9vlOi8s8ppG2XkAp6vI4Q7ym7xq5EbqD0GHNxcMQ&amp;__tn__=-UK-R&amp;c%5B0%5D=AT1WpIVmSLseuRMWbwo1bHAeHfDOVaq2LPqgFO0iVh6SqWq2KWnI_nsG5eUD9Yb4acoono_klwrwpFLkeE-O2kBpK_o9RvGNSo5-vS_TESv_HujzpOu0M6oE5pOt2Gk24e37zz9ME7jxGuQhVsGR-FvLTyxQ">Releases · fatedier/frp · GitHub</a></p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="su-dung" tabindex="-1"><a class="header-anchor" href="#su-dung" aria-hidden="true">#</a> SỬ DỤNG</h2>
<p>Chạy server của mình:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>go run ./cmd/server/...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Chạy frp:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>frpc -c ./frpc.ini
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Truy cập vào trang:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>https://fireass.frp.duocnguyen.dev/ping
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol>
<li>[[Cài đặt FRP]]</li>
<li>[[Cài đặt nginx]]</li>
<li>[[Cài certbot]]</li>
<li>[[Cài ssl cho nginx]]</li>
</ol>
</template>
