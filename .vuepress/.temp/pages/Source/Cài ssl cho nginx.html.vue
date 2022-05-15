<template><p>Tạo config:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>touch /etc/nginx/sites-available/frp.duocnguyen.dev.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Link nó qua bên enabled:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>sudo ln -s /etc/nginx/sites-available/frp.duocnguyen.dev.conf /etc/nginx/sites-enabled/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Config file:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>Cài đặt certbot: [[Cài certbot]]</p>
<p>Config cert bot và nginx</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>sudo certbot -d *.frp.duocnguyen.dev -d frp.duocnguyen.dev --manual --preferred-challenges dns-01 certonly
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Cài đặt DNS theo như hướng dẫn là được.</p>
</template>
