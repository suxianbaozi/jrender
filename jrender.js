/**
 * Created by reco on 15/11/5.
 * 简单json数据展示，满足常见需求
 */


var Render = {
    renderDomValues:function(dom,values){
        var key = '';
        dom.each(function(index,ele) {
            this.renderProperty(ele,values);
            var chidren = $(ele).find("*");
            if(chidren.length==0) {
                return;
            }
            for(var i=0;i<chidren.length;i++) {
                var child = chidren[i];
                this.renderProperty(child,values);
            }
        }.bind(this));
    },
    renderProperty:function(child,values){
        var key = '';
        if(key = $(child).attr('render-html')) {
            $(child).html(values[key]);
        } else if(key = $(child).attr('render-src')) {
            $(child).attr("src",values[key]);
        } else if(key = $(child).attr('render-href')) {
            $(child).attr("href",values[key]);
        } else if(key = $(child).attr('render-value')) {
            $(child).val(values[key]);
        } else if(key= $(child).attr('render-loop')) {
            if(!$(child).rowHtml) {
                //取第一个子元素作为循环
                var html = $(child).children()[0].outerHTML;
                $(child).rowHtml = html;
            } else {
                html = $(child).rowHtml;
            }

            $(child).html('');
            $(values[key]).each(function(index,value) {
                var childValues =  {};
                if(typeof value!='object') {
                    var tmp = {
                        'self':value
                    }
                    value = tmp;
                }
                for(var childKey in value) {
                    childValues[key+'.'+childKey] = value[childKey];
                }
                $(child).append(this.renderHtmlValues(html,childValues));
            }.bind(this));
        } else if(key= $(child).attr('render-attr')) {

        }
    },
    renderHtmlValues:function(html,values){
        var key = '';
        var dom = $("<div>"+html+"</div>");
        var chidren = dom.find("*");
        if(chidren.length==0) {
            return;
        }
        for(var i=0;i<chidren.length;i++) {
            var child = chidren[i];
            this.renderProperty(child,values);
        }
        return dom.html();
    }
};

//我们可能还需要一个jQuery扩展来更方便的使用
$.fn.renderValues = function(values) {
    Render.renderDomValues(this,values);
};

