Vue.createApp({
    template:"#why",
    data:()=>{
        return {
            message:"hhh",
            bookInfo:[
                {
                    id:1,
                    name:"算法导论",
                    date:"2006-9",
                    price:85,
                    count:1
                },
                {
                    id:2,
                    name:"Linux编程艺术",
                    date:"2006-2",
                    price:59,
                    count:1
                },
                {
                    id:3,
                    name:"编程珠玑",
                    date:"2008-10",
                    price:39,
                    count:1
                },
                {
                    id:4,
                    name:"代码大全",
                    date:"2006-3",
                    price:128,
                    count:1
                }
            ]
        }
    },
    computed:{
        allprice(){
            let count = 0;
            for(let i=0;i<this.bookInfo.length;i++){
                let item = this.bookInfo[i]
                count+=item.count*item.price
            }
            return count
        }
    },
    methods:{
        increment(index){
            this.bookInfo[index].count++;
        },
        decrement(index){
            let nowCount = this.bookInfo[index].count;
            if(nowCount>=1){
                this.bookInfo[index].count--;
            }
        },
        remove(index){
            this.bookInfo.splice(index,1)
            console.log(this.bookInfo)
        }
    }
}).mount("#app")
