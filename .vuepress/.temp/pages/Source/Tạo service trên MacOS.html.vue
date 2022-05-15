<template><p>Để tạo system service trong MacOS thì cần tạo file plist như sau:</p>
<p>Path: <code>~/Library/LaunchAgents/self.system-care.plist</code></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE plist PUBLIC &quot;-//Apple//DTD PLIST 1.0//EN&quot; &quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot;&gt;
&lt;plist version=&quot;1.0&quot;&gt;
  &lt;dict&gt;
    &lt;key&gt;Label&lt;/key&gt;
    &lt;string&gt;com.system-care&lt;/string&gt;
    &lt;key&gt;WorkingDirectory&lt;/key&gt;
    &lt;string&gt;/Users/duocnguyen/Projects/duoc/system-care&lt;/string&gt;
    &lt;key&gt;ProgramArguments&lt;/key&gt;
    &lt;array&gt;
        &lt;string&gt;/Users/duocnguyen/Projects/duoc/system-care/system-care&lt;/string&gt;
        &lt;string&gt;push&lt;/string&gt;
    &lt;/array&gt;
    &lt;key&gt;RunAtLoad&lt;/key&gt;
    &lt;true/&gt;
    &lt;key&gt;KeepAlive&lt;/key&gt;
    &lt;true/&gt;
    &lt;key&gt;StandardErrorPath&lt;/key&gt;
    &lt;string&gt;/Users/duocnguyen/Projects/duoc/system-care/log/system-care.error.log&lt;/string&gt;
    &lt;key&gt;StandardOutPath&lt;/key&gt;
    &lt;string&gt;/Users/duocnguyen/Projects/duoc/system-care/log/system-care.out.log&lt;/string&gt;
  &lt;/dict&gt;
&lt;/plist&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>launchctl load ~/Library/LaunchAgents/self.system-care.plist
launchctl start com.system-care
launchctl list | grep system-care
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
