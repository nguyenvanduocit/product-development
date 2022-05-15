<template><p>Setup Private trên máy cần get</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>set -x GOPRIVATE &quot;pkg.trueprofit.goldencloud.dev/*,bitbucket.org/trueprofit/*&quot;
git config --global url.&quot;git@bitbucket.org:&quot;.insteadOf &quot;https://bitbucket.org/&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
