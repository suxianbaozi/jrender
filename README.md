

# Jrender

a fast data render based on jQuery  which could be convenient for show data in html from json 

一个基于jQuery的json数据快速展示系统


# Advantage/优势

1.无需写无关的script块模板代码

2.支持自定义回调用来处理特殊的数据绑定

3.轻量无依赖，如果你不考虑angular，value 这种大家伙

4.特别适应于小页面开发，比如移动端

# 劣势
暂不支持table，下个版本即将支持

# samples

#### html code
```html
<div class="info">
	<span render-html="weather"></span>
	<ul render-loop="seven_days">
	        <li render-html="seven_days.weather"></li>
	</ul>
</div>
```
#### js code
```javascript
var data = {
    weather:'sunshine',
    seven_days:[
        {
            weather:'windy'
        },
        {
            weather:'rainy'
        },
        {
            weather:'cloud'
        }
    ]
};
$(".info").renderValues(data);
```
#desc
1.所有的数据展示都是在某一个标签内

all kind of data must be show at one html element

sample
```html
<span render-html="username"></span>
```
if the type is loop, the child element should be surrounded with a div

循环类型的子循环，子元素的第一个元素，所以尽量套一个div进去

### right
```html
<div render-loop="seven_days">
    <div>
    	<span render-html="seven_days.temperature"></span>
    	<span render-html="seven_days.weather"></span>
    </div>
</div>
```
#### wrong 
```html
<div render-loop="seven_days">
    <span render-html="seven_days.temperature"></span>
    <span render-html="seven_days.weather"></span>
</div>
```

2. type list which can be render
<pre>
render-html, 
render-src, 
render-value, 
render-href, 
render-loop, 
render-attr(self defined property:render-attr="userid=uid")
render-key(this should provide a render-fun property ,please read exmples)
</pre>

### note
Jrender don't support table now

