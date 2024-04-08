document.addEventListener('DOMContentLoaded',()=>{
    const el =  document.querySelector('.animate-title')
    const str = el.textContent.trim().split("");
    
    // let concatStr = ''
    el.innerHTML = str.reduce((acc,curr)=>{
        curr = curr.replace(' ','&nbsp;');
        return `${acc}<span class = "char">${curr}</span>`
    },"");
})                    