'use strict';
var Promise = require('es6-promise').Promise;
function timeout(duration) { return new Promise(function(resolve, reject) { setTimeout(resolve, duration); }); }
function timeout2(duration) { return new Promise(function(resolve, reject) { setTimeout(resolve, duration); }); }

var pp= function* () {
  let iterable = [1000, 2000, 2000,1000];
  for(var index in iterable){
     let value=iterable[index];
     console.log(value);
     yield timeout(value).then(() => { console.log("done1");});
  }

  yield timeout(2000).then(() => { console.log("done1");});
  yield timeout2(2000).then(() => {console.log("done2");});
  yield timeout(2000).then(() => {console.log("done3");});
  yield timeout2(2000).then(() => {console.log("done4");});
};

var run = function(g) {
    var it = g();
    function go(result) {
        if (result.done) {
            return result.value;
        }

        return result.value.then(function(value) {
            return go(it.next(value));
        }, function(err) {
            return go(it.throw(value));
        });
    }
    go(it.next());
};

run(pp);
