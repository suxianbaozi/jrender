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
比如
```html
<span render-html="username"></span>
```
循环类型的只循环，子元素的第一个元素，所以尽量套一个div进去
```html
<div render-loop="seven_days">
    <div>
    	<span render-html="seven_days.temperature"></span>
    	<span render-html="seven_days.weather"></span>
    </div>
</div>
```
####错误的写法
```html
<div render-loop="seven_days">
    <span render-html="seven_days.temperature"></span>
    <span render-html="seven_days.weather"></span>
</div>
```

2.可以render的类型有如下一个
<pre>
render-html, 
render-src, 
render-value, 
render-href, 
render-loop, 
render-attr(这个类型自定义属性例子:render-attr="userid=uid")
</pre>
