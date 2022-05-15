<template><p>MongoDB group by time with timezone</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>startTimeID := bson.M{&quot;date&quot;: &quot;$created_at&quot;, &quot;timezone&quot;: &quot;Asia/Phnom_Penh&quot;}
	endTimeID := bson.M{&quot;date&quot;: &quot;$created_at&quot;, &quot;timezone&quot;: &quot;Asia/Phnom_Penh&quot;}

reportID := bson.M{
	&quot;product_id&quot;: &quot;$_id.product_id&quot;,
	&quot;start_time&quot;: bson.M{
		&quot;$dateFromParts&quot;: bson.M{
			&quot;year&quot;:     bson.M{&quot;$year&quot;: startTimeID},
			&quot;month&quot;:    bson.M{&quot;$month&quot;: startTimeID},
			&quot;day&quot;:      bson.M{&quot;$dayOfMonth&quot;: startTimeID},
			&quot;timezone&quot;: &quot;Asia/Phnom_Penh&quot;,
		},
	},
	&quot;end_time&quot;: bson.M{
		&quot;$dateFromParts&quot;: bson.M{
			&quot;year&quot;:        bson.M{&quot;$year&quot;: endTimeID},
			&quot;month&quot;:       bson.M{&quot;$month&quot;: endTimeID},
			&quot;day&quot;:         bson.M{&quot;$dayOfMonth&quot;: endTimeID},
			&quot;hour&quot;:        23,
			&quot;minute&quot;:      59,
			&quot;second&quot;:      59,
			&quot;millisecond&quot;: 999,
			&quot;timezone&quot;:    &quot;Asia/Phnom_Penh&quot;,
		},
	},
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></template>
