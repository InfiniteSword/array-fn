//Array.prototype.indexOf
//Array.prototype.lastIndexOf
//Array.prototype.every
//Array.prototype.some
//Array.prototype.forEach
//Array.prototype.map
//Array.prototype.filter
//Array.prototype.reduce
//Array.prototype.reduceRight

//var test = [1,2,3,4,5,6,7,8,9,0];

if(typeof Array.prototype.indexOf != "function"){
    Array.prototype.indexOf = function(n,p){
        if(p === undefined || p < 0 || p > this.length - 1 ){
            p = 0;
        }
        for(var i = p; i < this.length; i++){
            if(this[i] === n){
                return i;
            }
        }
        return -1;
    }
}
if(typeof Array.prototype.lastIndexOf != "function"){
    Array.prototype.lastIndexOf = function(n,p){
        if(p === undefined || p < 0 || p > this.length - 1){
            p = this.length - 1;
        }
        for(var i = p; i > -1; i--){
            if(this[i] === n){
                return i;
            }
        }
        return -1;
    }
}
if (typeof Array.prototype.some != "function") {
    Array.prototype.some = function (f,t) {
        if (typeof f === "function") {
            for (var i = 0; i < this.length; i++) {
                if (f.call(t,this[i],i,this)) {
                    return true;
                }
            }
        }
        return false;
    }
}
if (typeof Array.prototype.every != "function") {
    Array.prototype.every = function (f,t) {
        if (typeof f === "function") {
            for (var i = 0; i < this.length; i++) {
                if (!f.call(t,this[i],i,this)) {
                    return false;
                }
            }
        }
        return true;
    }
}
if (typeof Array.prototype.forEach != "function") {
    Array.prototype.forEach = function (f,t) {
        if (typeof f === "function") {
            for (var i = 0; i < this.length; i++) {
                f.call(t,this[i],i,this);
            }
        }
    }
}
if (typeof Array.prototype.map != "function") {
    Array.prototype.map = function (f,t) {
        var temp = [];
        if (typeof f === "function") {
            for (var i = 0; i < this.length; i++) {
                temp.push(f.call(t,this[i],i,this));
            }
        }
        return temp;
    }
}
if (typeof Array.prototype.filter != "function") {
    Array.prototype.filter = function (f,t) {
        var temp = [];
        if (typeof f === "function") {
            for (var i = 0; i < this.length; i++) {
                if(f.call(t,this[i],i,this)){
                    temp.push(this[i]);
                }
            }
        }
        return temp;
    }
}
if (typeof Array.prototype.reduce != "function") {
    Array.prototype.reduce = function (f,t) {           //t为设定的初始值
        var rst = t, next = 0;
        if(t === undefined){
            rst = this[0];
            next = 1;
        }
        if (typeof f === "function") {
            for (var i = next; i < this.length; i++) {
                rst = f(rst,this[i],i,this);
            }
        }
        return rst;
    }
}
if (typeof Array.prototype.reduceRight != "function") {
    Array.prototype.reduceRight = function (f,t) {           //t为设定的初始值
        var rst = t, next = this.length - 1;
        if(t === undefined){
            rst = this[this.length - 1];
            next = this.length - 2;
        }
        if (typeof f === "function") {
            for (var i = next; i > -1; i--) {
                rst = f(rst,this[i],i,this);
            }
        }
        return rst;
    }
}

// 关于函数的参数和功能，一部分百度了。
// 对比了张鑫旭的博客，发现自己还是太年轻了。