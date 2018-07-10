# node-Polyfill

由于经常使用嵌入式mips/mipsel/arm（nofpu）平台的node，由于没有硬件浮点单元导致node速度很慢。试过（v4,v6,v8）速度基本以不能接受。

速度比较快的是不使用浮点单元的node 0.10 系列。使用浮点单元的0.12 速度也可以接受

发现v0.10 下在--harmony 模式+tsc辅助情况下可以使用Map，Set，Promise，Generator，甚至Proxy，Reflect。

当然let，const，for of loop，箭头函数也ok。

写了点测试代码和补齐部分Map，Set的功能代码。

需要使用node --harmony file.js 方式运行。

tsc --outFile file.js map.ts

tsc --outFile pgtest.js pgtest.ts

Proxy,Reflect

https://github.com/tvcutsem/harmony-reflect
