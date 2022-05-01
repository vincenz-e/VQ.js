const VQ=(q)=>document.querySelectorAll(q)
const VQ1=(q)=>document.querySelector(q)
const VQID=(id)=>document.getElementById(id)
const VQCL=(cl)=>document.getElementsByClassName(cl)
Element.prototype.VQ=function(q){return this.querySelectorAll(q)}
Element.prototype.VQ1=function(q){return this.querySelector(q)}
Element.prototype.VQCL=function(cl){return this.getElementsByClassName(cl)}
