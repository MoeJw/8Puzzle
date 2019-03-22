var c=document.getElementById("can");
var can=c.getContext('2d');
c.width=500;
c.height=500;
c.style.background="#eee";
var flag=0;
function tile(n,i,j){
this.number=n;
this.x=i;
this.y=j;
this.draw=function(){
can.fillStyle = 'green';
can.fillRect(this.x, this.y, 50, 50);
 can.font = "30px Arial";
 can.fillStyle = 'black';

  can.fillText(this.number, this.x+18,this.y+35);
}

}

function Block(size){
	this.all=[];
	this.size=size;
	var disX=50;
	var disY=50;
	
		this.creatBlock=function(Box){
			var disX=50;
	var disY=50;
			if(this.size==8){
				//var Box=[[1,2,3],[4,5,6],[7,8,0]];
				var Range=3;
			}else{
				//var Box=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
				var Range=4;
			}
		var count=0;
		for (var i = 0; i < Box.length; i++) {
			for (var j = 0; j < Box[i].length; j++) {
				
				if(Box[i][j]!=0){
					if(count<Range){
					var x=new tile(Box[i][j]+" ",50+disX,disY)
				x.draw();
				this.all.push(x);
				disX+=60;
				}else{
				
						disX=50;
						var x=new tile(Box[i][j]+" ",disX+50,60+disY)
						disX+=60;
						disY+=60;
						count=0;
						x.draw();
						this.all.push(x);
						
				}
				count++;
				}else{
					if(count==3){
						disX=50;
						
						disY+=60;
						count=0;
					}
					disX+=60;
						count++;
						this.all.push(null);
					//disX+=60;

				}
				/*if(count==1 &&Box[i][j]==0){
					disX+=120;
					//disY+=60;
				}*/
			}
		}
		}
		this.update=function(){
				//this.move(dic,x,y);
				for (var i = 0; i < this.all.length; i++) {
					if(this.all[i]!=null){
						this.all[i].draw();
					}
					
				}
				
			}
		this.move=function(dic,index){
			var counter=0;
			
			return new Promise (function(resolve,reject){
			var id=setInterval(Frame,0.5)
				function Frame(){
					
					if(counter>59){
						var i = 0
						while(b.all[i]!=null){
							i++;

						}
						//alert(1)
						var temp=b.all[i];
						b.all[i]=b.all[index];
						b.all[index]=null;
						clearInterval(id);
						resolve();

					}else{
						counter++;
						flag++;
						//console.log(counter);
						change(index,dic);
						can.clearRect(0,0,window.innerWidth,window.innerHeight);
						b.update();
						//Frame();
					}/// else to continuo


			}

		});
		
		
}
		
}/// end of object
//var Box=[ [5,0,1],[8,6,2],[4,7,3]];
//var Box=[[1,2,3],[4,5,6],[7,8,0]];
//var Box=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
//var Box=[ [8,7,4],[2,6,5],[1,0,3]]
function get(Box,index,dic,i,size){
b.creatBlock(Box);

runTheGame(index,dic,i,size)
}

function runTheGame(index,dic,i,size){
	if(i>=size)
		return;
	
	b.move(dic[i],index[i]).then(r=>runTheGame(index,dic,i+1,size))
}
var b=new Block(8);
/*b.move("bottom",1,2)
.then(_=>f=b.move("bottom",0,2)
.then(_=>b.move("right",0,1)
.then(_=>b.move("right",0,0)
.then(_=>b.move("up",1,0)
.then(_=>b.move("up",2,0)
.then(_=>b.move("left",2,1)
.then(_=>b.move("bottom",1,1))))))));
*/

//
//b.draw(Box);

function change (index,dic){
			if(dic=="right"){
				b.all[index].x-=1;
				}else if(dic=="left"){
					b.all[index].x+=1;
				
				}else if(dic=="up"){
				b.all[index].y+=1;
				}else if(dic=="down"){
					b.all[index].y-=1;
					
					
					
						
				}
		}


