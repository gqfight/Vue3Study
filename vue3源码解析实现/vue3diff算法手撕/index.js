// 工具类的实现
class Util{
    constructor(){}
    //检测是否为基础类型
    _isPrimitive(value){
        return (typeof value === 'string' || typeof value === 'number' || typeof value === 'symbol' || typeof value === 'boolean')
    }
    _isDef(v){
        return v!== undefined && v!== null
    }
}
const util = new Util()

//创建Vnode
class VNode{
    constructor(tag,data,children){
        this.tag = tag
        this.data = data
        this.children = children
        this.elm = ''
        this.text = util._isPrimitive(this.children)?this.children:""
        
    }
}