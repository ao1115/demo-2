window.jQuery =function(selectorOrArray) {
    let elements 
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    return {
        //闭包：函数访问外部的变量
        addClass:function(className) { //这是一个对象，addClass是属性名，值是一个函数
            for (let i = 0; i < elements .length; i++){
                const element = elements[i]
                element.classList.add(className)
            }
            return this  //this就是获取到的那个api
        },
        find(selector) {
            
            let array = []
            for (let i = 0; i < elements.length; i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            //return array   这样返回的是一个数组，不能继续在它身上操作addClass等
            array.oldApi = this  //this是旧api
            return jQuery(array)  //用jQuery构造出一个新的对象并返回值    
        },
        oldApi : selectorOrArray.oldApi,  //oldApi是个api，把它放到数组上面
        end() {
            return this.oldApi //this 是新api
        },
        each(fn) {
            for (let i = 0; i < elements.length; i++){
                fn.call(null,elements[i],i)
            }
            return this
        },
        parent() {
            const array = []
            this.each((node) => {
                if (array.indexOf(node.parentNode) === -1){
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        children() {
            const array = []
            this.each((node) => {
                array.push(...node.children) // ...展开操作符:表示把元素拆开放进去
            })
            return jQuery(array)
        },
        
        print() {
            console.log(elements)
        }
    }
       
}