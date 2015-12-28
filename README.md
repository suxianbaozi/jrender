# jrender
一个基于jQuery的json数据快速展示系统

#用法

&lt;div class=&quot;info&quot;&gt;
	&lt;span render-html=&quot;weather&quot;&gt;&lt;/span&gt;
	&lt;ul render-loop=&quot;seven_days&quot;&gt;
		&lt;li render-html=&quot;seven_days.weather&quot;&gt;&lt;/li&gt;
	&lt;/ul&gt;
&lt;/div&gt;

#说明
1.所有的数据展示都是在某一个标签内
比如<span render-html="username"></span>
