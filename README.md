# jrender
一个基于jQuery的json数据快速展示系统

#用法
####html代码
```html
<div class="info">
	<span render-html="weather"></span>
	<ul render-loop="seven_days">
	        <li render-html="seven_days.weather"></li>
	</ul>
</div>
```
####html代码
```javascript
var data = {
    weather:'晴',
    seven_days:[
        {
            weather:'阴'
        },
        {
            weather:'雾霾'
        },
        {
            weather:'小雨'
        }
    ]
};
$(".info").renderValues(data);
```
#说明
1.所有的数据展示都是在某一个标签内
比如<span render-html="username"></span>
