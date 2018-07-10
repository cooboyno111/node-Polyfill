# node-Polyfill

由于经常使用嵌入式mips/mipsel/arm（nofpu）平台的node，由于没有硬件浮点单元导致node速度很慢。试过（v4,v6,v8）速度基本以不能接受。

速度比较快的是不使用浮点单元的node 0.10 系列。使用浮点单元的0.12 速度也可以接受

不过v0.10下的Map，Set属于半残疾状态。

写了点代码补齐它们的功能。

需要使用node --harmony file.js 方式运行。

使用tsc 仅是为了使用其for of loop的补齐功能。

tsc --outFile file.js map3.ts
