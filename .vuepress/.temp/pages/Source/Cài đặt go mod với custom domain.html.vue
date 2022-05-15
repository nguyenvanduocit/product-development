<template><p>Point domain to nginx, và config nó.</p>
<p>Setup Nginx: <code>/etc/nginx/sites-available/pkg.trueprofit.goldencloud.dev</code></p>
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code>server {
    server_name pkg.trueprofit.goldencloud.dev;
    location ~ /.well-known {
        allow all;
        root /usr/share/nginx/html;
    }
    location ~ /([A-Za-z0-9_-]+)(/[A-Za-z0-9_.-]+)*$ {
        if ($args = &quot;go-get=1&quot;) {
            return 200 '&lt;meta name=&quot;go-import&quot; content=&quot;$host/$1 git https://bitbucket.org/trueprofit/$1.git&quot;&gt;';
        }
        return 302 https://bitbucket.org/trueprofit/$1;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Cài đặt SSL: [[Dùng ssl miễn phí với certbot]]</p>
<p>Sử dung bằng cách: [[Go mod import private repo]]</p>
</template>
