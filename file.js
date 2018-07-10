'use strict';
//if nodev0.10 use this
Map.prototype.oset = Map.prototype.set;
Map.prototype.set = function (k, v) {
    if (this.mkeys == undefined) {
        this.mkeys = new Array;
    }
    if (!this.has(k)) {
        this.mkeys.push(k);
    }
    this.oset(k, v);
    this.size = this.mkeys.length;
};
Map.prototype.oget = Map.prototype.get;
Map.prototype.get = function (k) {
    return this.oget(k);
};
Map.prototype._size = function () {
    if (this.mkeys == undefined) {
        return 0;
    }
    else {
        return this.mkeys.length;
    }
};
Map.prototype.odelete = Map.prototype["delete"];
Map.prototype["delete"] = function (k) {
    if (this.has(k)) {
        this.mkeys.splice(this.mkeys.indexOf(k), 1);
        this.odelete(k);
    }
    this.size = this.mkeys.length;
};
Map.prototype.clear = function (k) {
    for (var index in this.mkeys) {
        this["delete"](this.mkeys[index]);
    }
    this.mkeys.splice(0, this.mkeys.length);
    this.size = 0;
};
Map.prototype.keys = function () {
    return this.mkeys;
};
Map.prototype.values = function () {
    var tmp = new Array();
    for (var k in this.mkeys) {
        tmp.push(this.get(this.mkeys[k]));
    }
    return tmp;
};
Set.prototype.oadd = Set.prototype.add;
Set.prototype.add = function (v) {
    if (this.svals == undefined) {
        this.svals = new Array;
    }
    if (!this.has(v)) {
        this.svals.push(v);
    }
    this.oadd(v);
    this.size = this.svals.length;
};
Set.prototype.odelete = Set.prototype["delete"];
Set.prototype["delete"] = function (k) {
    if (this.has(k)) {
        this.svals.splice(this.svals.indexOf(k), 1);
        this.odelete(k);
    }
    this.size = this.svals.length;
};
Set.prototype._size = function () {
    if (this.svals == undefined) {
        return 0;
    }
    else {
        return this.svals.length;
    }
};
Set.prototype.clear = function (k) {
    for (var index in this.svals) {
        this.odelete(this.svals[index]);
    }
    this.svals.splice(0, this.svals.length);
    this.size = 0;
};
Set.prototype.keys = function () {
    return this.svals;
};
Set.prototype.values = function () {
    return this.svals;
};
//test code for node v0.10
var map = new Map();
//console.log(map.__proto__);
map.set('a', 100);
map.clear();
map.set('a', 200);
map.set('c', 300);
map.set('d', 400);
map["delete"]('a');
console.log(map.size);
console.log(map._size());
console.log(map.get('c'));
console.log(map.has('d'));
console.log('---------map--forin-----------------');
for (var a in map.keys()) {
    console.log(map.keys()[a]);
    console.log(map.get(map.keys()[a]));
}
console.log('========map==forof===================');
for (var _i = 0, _a = map.values(); _i < _a.length; _i++) {
    var a = _a[_i];
    console.log(a);
}
console.log('========map==forEach===================');
map.keys().forEach(function (value, key) {
    //console.log(key);
    console.log(value);
    console.log(map.get(value));
});
console.log('----------------------------');
var set2 = new Set();
set2.add(100);
set2.clear();
set2.add(200);
set2.add(300);
set2.add(400);
set2["delete"](100);
console.log(set2.size);
console.log(set2._size());
console.log(set2.has(300));
console.log('---------set--forin-----------------');
for (var i in set2.keys()) {
    console.log(set2.keys()[i]);
}
console.log('========set==forof===================');
for (var _b = 0, _c = set2.values(); _b < _c.length; _b++) {
    var a = _c[_b];
    console.log(a);
}
console.log('========set==forEach===================');
set2.keys().forEach(function (value, key) {
    console.log(value);
});
console.log('----------------------------');
