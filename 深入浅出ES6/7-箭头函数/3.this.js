

    var foo=(function(){

        return {
            show: function (v) {
                console.log(v);
            },
            each: function (list,cb) {
                for(var v of list){
                    cb(v);
                }
            },
            showAll: function (list) {
                //当匿名函数使用箭头函数时，this指向了外层作用域
                this.each(list,v=>this.show(v));
            }
        }
    })();

    foo.showAll([1,2,3,4]);
