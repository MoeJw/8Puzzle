var DONE=1;

function Tree(){
	//this.box=[ [5,0,1],[8,6,2],[4,7,3]];
	//this.box=[ [7,1,5],[4,0,3],[8,2,6]]
	//this.box=[[1,3,6],[4,7,8],[5,2,0]]
	//this.box=[[0,8,2],[3,7,5],[4,1,6]]
	//this.box=[ [0,1,8],[6,5,2],[7,4,3]];
	//this.box=[ [0,5,4],[3,8,2],[1,6,7]];
	//this.box=[ [1,2,3],[0,6,4],[5,7,8]];
	//this.box=[ [5,1,2],[0,4,6],[7,8,3]];
	//this.box=[ [0,1,2],[5,4,6],[7,8,3]];
	//this.box=[ [5,6,1],[8,7,0],[4,3,2]];
	//this.box=getBox();
		this.box=getBox();

		var index_I=0;
		var index_J=0;
		var flag=1;
			for (var i = 0; this.box.length&&flag; i++) {
				for (var j = 0; j < this.box[i].length&&flag; j++) {
					if(this.box[i][j]==0){
						index_I=i;
						index_J=j;
						flag=0;
						break;
					}
				}
			}
	//this.box=[ [2,1,4],[3,6,5],[8,7,0]];//ab
	//this.box=[ [3,2,1],[6,5,4],[0,8,7]];//av
	//this.box=[ [8,7,4],[2,6,5],[1,0,3]]
	
	//b.creatBlock(this.box);
	//this.box=[ [1,2,3],[4,5,0],[7,8,6]];
	this.InitialState=new node(this.box,index_I,index_J,3);
	//var Goal=[ [3,11,13,2],[9,4,15,6][7,12,0,10],[14,8,1,5]];
		//var Goal=[ [1,2,3],[4,5,0],[7,8,6]];
	var Goal=[ [1,2,3],[4,5,6],[7,8,0]];
	this.GoalState=new node(Goal,2,2,3)
    //this.GoalState.print();
	
	this.BFS=function(){
		//var Queue=[];
		var Queue=new PriorityQueue();

		var size=0;
		all.push(this.InitialState);
		//this.InitialState.print();
		this.ExpandFront(this.InitialState,Queue);
  
		// get push 4 States into the Queue
		size=Queue.length;
		var i=0;
		while(1&&DONE==1){
			var Front=Queue.remove();
			size--;
			
			if(Front!=undefined){
			//Front.print();

			console.log(Front.priority+"  "+all.length);
           if(this.CompareNodes(Front,this.GoalState)==false ){
         
		   	size+=Queue.length;
			this.ExpandFront(Front,Queue);
 
           }else{
           	
             alert("done solving it");
             var b=new Block(8);	
			b.creatBlock(this.box);
			var dic=[];
			var index=[];
             while(this.CompareNodes(Front,this.InitialState)==false){
 				//Front.print();
			//var index=x*3+y;
			console.log(Front.Zero_i*3+Front.Zero_j+" index")
 				 index.unshift(Front.Zero_i*3+Front.Zero_j);
 				 dic.unshift(Front.CrruentState);
 				Front=Front.parent;
             }
             var i=0;
             get(this.box,index,dic,i,index.length);
             //runTheGame(index,dic,i,Front.size,b);


             //this.InitialState.print();
             break;
           }
		}
	}
	}
	
	this.ExpandFront=function(front,Queue){
		var Ob=[];
		var can=0;
			for (var i = 0; i < 4; i++) {
					
					Ob.push(new node(front.Box_State,front.Zero_i,front.Zero_j,front.size));
			}
				for (var i = 0; i < Ob.length; i++) {
				//Ob[i].Box_State=front.Box_State;
				if(i==2){
				
					can=Ob[i].left();Ob[i].CrruentState="left"; 
					if(!a(Ob[i])&&can){Queue.insert(Ob[i]); all.push(Ob[i]);Ob[i].parent=front;};
					
				

				}
				if(i==1){
				
					can=Ob[i].right();Ob[i].CrruentState="right";
					if(!a(Ob[i])&&can){Queue.insert(Ob[i]); all.push(Ob[i]);Ob[i].parent=front;}
					
					
				}
				if(i==0){
				
					can=Ob[i].up();
					Ob[i].CrruentState="up";
					if(!a(Ob[i])&&can){Queue.insert(Ob[i]); all.push(Ob[i]);Ob[i].parent=front;};
					
			
				}
				if(i==3){
				
					can=Ob[i].down();Ob[i].CrruentState="down";
					if(!a(Ob[i])&&can){Queue.insert(Ob[i]); all.push(Ob[i]);Ob[i].parent=front; };
					
				 		
				}
				 
				//Ob[i].print();
			
			}
	}

	this.CompareNodes=function(x,y){
		for (var i = 0; i < x.Box_State.length; i++) {
			for (var j = 0; j < x.Box_State[i].length; j++) {
			if(x.Box_State[i][j]!=y.Box_State[i][j]){
				//alert(x.Box_State[i][j]+" "+y.Box_State[i][j]+"  "+x.CrruentState+" "+y.CrruentState)
				return false;

			}
			}
		}
		
		return true;
	}
}
function start(){
	var x=new Tree();
	x.BFS();

}
function a(node){
	var Goal=[ [1,2,3],[4,5,6],[7,8,0]];
//if(x.Box_State[i][j]!=Goal[i][j]){x.cost++;}
for (var i = 0; i < all.length; i++) {
	if(CompareNode(node,all[i])==true){return true; }
	}
	//all[x].print();
	return false;
}

function CompareNode(x,y){
	
		for (var i = 0; i < x.Box_State.length; i++) {
			for (var j = 0; j < x.Box_State[i].length; j++) {
			if(x.Box_State[i][j]==y.Box_State[i][j]){
				
				

			}else{
				
				return false;
			}
			}
		}
		
		
		return true;
	}
	function getBox(){
		var x = new Array(3);
for (var i = 0; i < 3; i++) {
  x[i] = new Array(3);
}
var counter=1;
			for (var i = 0; i < 3; i++) {
				for (var j = 0; j < 3; j++) {
					x[i][j]=parseInt(document.getElementById("a"+(counter)).value);
					counter++;
					console.log(x[i][j]);
				}
			}
			return x;

	}
	function show(){
		var Box=getBox();
		var x =new Block(8);
		x.creatBlock(Box);
	}
