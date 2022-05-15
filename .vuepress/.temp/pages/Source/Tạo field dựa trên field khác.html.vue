<template><p>Tạo file dựa trên một field khác trong MongoDB.</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>/**
 * newField: The new field name.
 * expression: The new field expression.
 */
{
  date_range: {
    &quot;$let&quot;: {
      &quot;vars&quot;: {
        &quot;seven_day_ago&quot;: {
          &quot;$subtract&quot;: [
            &quot;$$NOW&quot;,
            100 * 24 * 60 * 60 * 1000
          ]
        }
      },
      &quot;in&quot;: {
        &quot;start&quot;: {
          &quot;$dateFromParts&quot;: {
            &quot;year&quot;: {&quot;$year&quot;: &quot;$$seven_day_ago&quot;},
            &quot;month&quot;: {&quot;$month&quot;: &quot;$$seven_day_ago&quot;},
            &quot;day&quot;: {&quot;$dayOfMonth&quot;: &quot;$$seven_day_ago&quot;}
          }
        },
        &quot;end&quot;: {
          &quot;$dateFromParts&quot;: {
            &quot;year&quot;: {&quot;$year&quot;: &quot;$$seven_day_ago&quot;},
            &quot;month&quot;: {&quot;$month&quot;: &quot;$$seven_day_ago&quot;},
            &quot;day&quot;: {&quot;$dayOfMonth&quot;: &quot;$$seven_day_ago&quot;},
            &quot;hour&quot;:        23,
    				&quot;minute&quot;:      59,
    				&quot;second&quot;:      59,
    				&quot;millisecond&quot;: 999
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div></template>
