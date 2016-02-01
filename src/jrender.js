/**
 * Created by reco on 15/11/5.
 * 简单json数据展示，满足常见需求
 */


var Render = {
    renderDomValues:function(dom,values,callbacks){

        var key = '';
        dom.each(function(index,ele) {
            this.renderProperty(ele,values,callbacks);
            var chidren = $(ele).find("*");
            if(chidren.length==0) {
                return;
            }
            for(var i=0;i<chidren.length;i++) {
                var child = chidren[i];
                this.renderProperty(child,values,callbacks);
            }
        }.bind(this));
    },
    renderProperty:function(child,values,callbacks){
        var key = '';
        if(key = $(child).attr('render-key')){
            var fun = '';
            if(fun = $(child).attr('render-fun')) {
                var f = callbacks[fun];
                if(f) {
                    f(child, values[key]);
                }
            }
        }


        if(key = $(child).attr('render-html')) {
            $(child).html(values[key]);
        }
        if(key = $(child).attr('render-src')) {
            $(child).attr("src",values[key]);
        }
        if(key = $(child).attr('render-href')) {
            $(child).attr("href",values[key]);
        }
        if(key = $(child).attr('render-value')) {
            $(child).val(values[key]);
        }
        if(key= $(child).attr('render-loop')) {
            if(!$(child).attr('row-html')) {
                //取第一个子元素作为循环
                var html = $(child).children()[0].outerHTML;
                $(child).attr('row-html',encodeURIComponent(html));
            } else {
                html = decodeURIComponent($(child).attr('row-html'));
            }
            $(child).html('');
            $(values[key]).each(function(index,value) {
                if(typeof value!='object') {
                    var tmp = {
                        'self':value
                    }
                    value = tmp;
                }
                for(var childKey in value) {
                    values[key+'.'+childKey] = value[childKey];
                }
                $(child).append(this.renderHtmlValues(html,values,callbacks));
            }.bind(this));
        }
        if(key= $(child).attr('render-attr')) {
            var attrs = key;
            key = attrs.split('=')[1];
            var attr = attrs.split('=')[0];
            $(child).attr(attr,values[key]);
        }
    },
    renderHtmlValues:function(html,values,callbacks){
        var key = '';
        var dom = $("<div>"+html+"</div>");
        var chidren = dom.find("*");
        if(chidren.length==0) {
            return;
        }
        for(var i=0;i<chidren.length;i++) {
            var child = chidren[i];
            this.renderProperty(child,values,callbacks);
        }
        return dom.html();
    }
};

//我们可能还需要一个jQuery扩展来更方便的使用
$.fn.renderValues = function(values,callbacks) {
    Render.renderDomValues(this,values,callbacks);
};

