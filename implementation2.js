var all=[];
function node(box,index_i,index_j,s){
	this.left=null;
	this.right=null;
	this.up=null;
	this.down=null;
	this.Box_State=[ [0,0,0],[0,0,0],[0,0,0]];///
var Goal=[ [1,2,3],[4,5,6],[7,8,0]];
	this.priority=0;
	for (var i = 0; i < box.length; i++) {
		for (var j= 0; j < box[i].length; j++) {
			this.Box_State[i][j]=box[i][j]
			//if(box[i][j]!=Goal[i][j]){this.priority++;}
			
		}
	}
	this.Zero_i=index_i;
	this.Zero_j=index_j;
	this.size=s;
	this.parent=null;
	this.CrruentState=null;
	this.check=function(temp1,j,i){
		if(i==0&&j==0&&temp1==1){
			return 0;
		}else if(this.Box_State[0][0]==1&&temp1==2&&i==0&&j==1){
			return 0;
		}else if(this.Box_State[0][0]==1&&this.Box_State[0][1]==2&&temp1==3&&i==0&&j==2){
				return 0;
		}
		return 1;
		
	}
	
	this.do=function(){
		var x=0;
		var y=0;
		for (var i = 0; i < Goal.length; i++) {
			for (var j = 0; j < Goal[i].length; j++) {
				//if(Goal[i][j]&&this.Box_State[i][j]!=Goal[i][j]){this.priority++;}
				if(this.Box_State[i][j]!=0){
               			x=(this.Box_State[i][j]-1)/3;
               			x=Math.floor(x);
               			y=(this.Box_State[i][j]-1)%3
               			y=Math.floor(y);
               			
               			x=Math.abs(x-i);
               			y=Math.abs(y-j);
               			this.priority=this.priority+x+y;
               			x=0;y=0;


				}
			}
		}
	}
	this.left=function(){
		if(this.Zero_j-1>=0){
			var temp1=this.Box_State[this.Zero_i][this.Zero_j-1];
			var j=this.Zero_j-1;
			var i=this.Zero_i;
		var temp2=this.Box_State[this.Zero_i][this.Zero_j];
		if(this.check(temp1,j,i)==1){
			this.Box_State[this.Zero_i][this.Zero_j]=temp1;
		this.Box_State[this.Zero_i][this.Zero_j-1]=temp2;
		this.Zero_j-=1;
		this.do();
		return 1;
		}else{
			return 0;
		}
	}else{

		return 0;
		//cant do that
		//alert("can't do it");
	}
		
		}
		
	this.right=function(){
	   if(this.Zero_j+1<=this.size-1){
	   			var temp1=this.Box_State[this.Zero_i][this.Zero_j+1];
		var temp2=this.Box_State[this.Zero_i][this.Zero_j];
		var j=this.Zero_j+1;
			var i=this.Zero_i;
		if(this.check(temp1,j,i)==1){
			this.Box_State[this.Zero_i][this.Zero_j]=temp1;
		this.Box_State[this.Zero_i][this.Zero_j+1]=temp2;
		
		this.Zero_j+=1;
		this.do();
		return 1;
		}else{
			return 0;
		}
	   }else{
	   	//alert("can't do right");
	   	return 0;
	   }

	}
	this.up=function(){
		 if(this.Zero_i-1>=0){
	   			var temp1=this.Box_State[this.Zero_i-1][this.Zero_j];
		var temp2=this.Box_State[this.Zero_i][this.Zero_j];
		var j=this.Zero_j;
			var i=this.Zero_i-1;
		if(this.check(temp1,j,i)){
			this.Box_State[this.Zero_i][this.Zero_j]=temp1;
		this.Box_State[this.Zero_i-1][this.Zero_j]=temp2;
		this.Zero_i-=1;
		this.do();
		return 1;
		}else{
			return 0;
		}
	   }else{
	   	return 0;
	   	//alert("can't do up");
	   }


		}
	this.down=function(){
		 if(this.Zero_i+1<=this.size-1){
	   			var temp1=this.Box_State[this.Zero_i+1][this.Zero_j];
		var temp2=this.Box_State[this.Zero_i][this.Zero_j];
		this.Box_State[this.Zero_i][this.Zero_j]=temp1;
		this.Box_State[this.Zero_i+1][this.Zero_j]=temp2;
		this.Zero_i+=1;
		this.do();
		return 1;
	   }else{
	   	//alert("can't do down");
	   	return 0;
	   }


		}
		this.print=function(){ /// print node
      var div=document.getElementById("print");
      var p=document.getElementById("p");
		for (var i = 0; i < this.Box_State.length; i++) {
			for (var j = 0; j < this.Box_State[i].length; j++) {
				if(this.Box_State[i][j]<10){
					p.innerHTML+="  "+this.Box_State[i][j]+"  ||";
				}else{
				p.innerHTML+=this.Box_State[i][j]+"||";
			}
				if(j==2){
					p.innerHTML+="</br>";
					
				}

				
				//alert(p.innerHTML)
			}

		}
		p.innerHTML+=this.CrruentState +" </br> </br>";	
		p.innerHTML+=this.Zero_i+" ::"+this.Zero_j +" </br> </br>";	

	}
}