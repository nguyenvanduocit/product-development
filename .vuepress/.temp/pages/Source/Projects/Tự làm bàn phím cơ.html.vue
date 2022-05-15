<template><h2 id="hardware" tabindex="-1"><a class="header-anchor" href="#hardware" aria-hidden="true">#</a> Hardware</h2>
<h2 id="shopping-list" tabindex="-1"><a class="header-anchor" href="#shopping-list" aria-hidden="true">#</a> Shopping List</h2>
<ul>
<li><a href="%5Bhttps://shopee.vn/-Sale-%C4%90i-%E1%BB%91t-Diode-1N4148-DO35-450mA-100V-%5D(https://shopee.vn/-Sale-%C4%90i-%E1%BB%91t-Diode-1N4148-DO35-450mA-100V-)(1N4148-DIP)-(10c)-i.175062443.7233893886">Diodes</a></li>
<li>RGB Led 2 pin</li>
<li>WS2812</li>
<li>Switch</li>
<li>Keycap</li>
<li>ESP-32</li>
<li>MCP23017</li>
<li>SSD1306</li>
</ul>
<h2 id="plate-case" tabindex="-1"><a class="header-anchor" href="#plate-case" aria-hidden="true">#</a> Plate &amp; Case</h2>
<p>Sử dụng phần mềm: <a href="%5Bhttp://builder.swillkb.com/%5D(http://builder.swillkb.com/)">Plate &amp; Case Builder</a></p>
<h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h2>
<p>Sử dụng switch red là vừa tay nhất</p>
<h2 id="firmware" tabindex="-1"><a class="header-anchor" href="#firmware" aria-hidden="true">#</a> Firmware</h2>
<p>Ban đầu mình định sử dụng arduino và teensy, nhưng sau đó số lượng pin trên teensy không đủ nhiều nên đành chuyển qua sử dụng ESP32</p>
<h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h2>
<p>Sử dụng <a href="%5Bhttp://www.keyboard-layout-editor.com/%5D(http://www.keyboard-layout-editor.com/)">Keyboard Layout Builder</a> để tạo layout.</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>
[{a:7},&quot;~\n`&quot;,&quot;!\n1&quot;,&quot;@\n2&quot;,&quot;#\n3&quot;,&quot;$\n4&quot;,&quot;%\n5&quot;,&quot;^\n6&quot;,&quot;&amp;\n7&quot;,&quot;*\n8&quot;,&quot;(\n9&quot;,&quot;)\n0&quot;,&quot;_\n-&quot;,&quot;+\n=&quot;,&quot;&lt;-&quot;, &quot;delete&quot;,&quot;Home&quot;],

[{w:1.5},&quot;Tab&quot;,&quot;Q&quot;,&quot;W&quot;,&quot;E&quot;,&quot;R&quot;,&quot;T&quot;,&quot;Y&quot;,&quot;U&quot;,&quot;I&quot;,&quot;O&quot;,&quot;P&quot;,&quot;{\n[&quot;,&quot;}\n]&quot;,{w:1.5},&quot;|\n\\&quot;,&quot;Page Up&quot;],

[{w:1.75},&quot;Caps Lock&quot;,&quot;A&quot;,&quot;S&quot;,&quot;D&quot;,&quot;F&quot;,&quot;G&quot;,&quot;H&quot;,&quot;J&quot;,&quot;K&quot;,&quot;L&quot;,&quot;:\n;&quot;,&quot;\&quot;\n'&quot;,{w:2.25},&quot;Enter&quot;,&quot;Page Down&quot;],

[{w:2.25},&quot;Shift&quot;,&quot;Z&quot;,&quot;X&quot;,&quot;C&quot;,&quot;V&quot;,&quot;B&quot;,&quot;N&quot;,&quot;M&quot;,&quot;&lt;\n,&quot;,&quot;&gt;\n.&quot;,&quot;?\n/&quot;,{w:1.75},&quot;Shift&quot;,&quot;↑&quot;,&quot;End&quot;],

[{w:1.25},&quot;Control&quot;,{w:1.25},&quot;Option&quot;,{w:1.25},&quot;CMD&quot;,{w:3},&quot;Space&quot;,{w:2},&quot;Space&quot;,{w:3},&quot;space&quot;,{w: 1.25},&quot;Fn&quot;,&quot;←&quot;,&quot;↓&quot;,&quot;→&quot;]

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="firmware-1" tabindex="-1"><a class="header-anchor" href="#firmware-1" aria-hidden="true">#</a> Firmware</h2>
<p>Dùng thư viện MCP23017</p>
<p>Sử dụng 1 con MCP23017 để handle row và con còn lại handle column.</p>
<h2 id="scan-matrix" tabindex="-1"><a class="header-anchor" href="#scan-matrix" aria-hidden="true">#</a> Scan Matrix</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Set matrix to input_pullup
For each Rows
	set row to output_pulldown
	For each cols
		If coll is down
			code = layout(row, col)
		endif
	Endfor
	set row to input_pullup
Endfor
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
