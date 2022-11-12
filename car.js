AFRAME.registerComponent("showcar",{
    schema:{
      count:{type:"number" , default:0},
      
    },
    init:function(){
      window.addEventListener("click",(e)=>{
         this.data.count =this.data.count + 1
         
         if(this.data.count === 1 ){
           const rotation = {x:0 , y:20 , z:0}
           this.el.setAttribute("rotation" , rotation)
         }
         else if(this.data.count === 2){
            const rotation = {x:0 , y:100 , z:0}
            this.el.setAttribute("rotation" , rotation)
        }
        else if(this.data.count === 3){
            const rotation = {x:0 , y:150 , z:0}
            this.el.setAttribute("rotation" , rotation)
        }
        else if(this.data.count === 4){
            const rotation = {x:0 , y:180 , z:0}
            this.el.setAttribute("rotation" , rotation)
        }
        else if(this.data.count === 5){
            const rotation = {x:0 , y:270 , z:0}
            this.el.setAttribute("rotation" , rotation)
        }
        else if(this.data.count === 6){
            const rotation = {x:0 , y:360 , z:0}
            this.el.setAttribute("rotation" , rotation)
        }
        
        
        
  
      })
    }
  })
  