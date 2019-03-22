function PriorityQueue(){
	this.heap=[null];
	this.insert=function(newNode){
		//var newNode=new node(value,priority);
		this.heap.push(newNode);
		var currentNodeIdx=this.heap.length-1;
		var current_NodeParent_Idx=Math.floor(currentNodeIdx/2);
			while(
					this.heap[current_NodeParent_Idx]&&
					newNode.priority<this.heap[current_NodeParent_Idx].priority

				){/// end of condtion
 					var parent=this.heap[current_NodeParent_Idx];
 					this.heap[current_NodeParent_Idx]=newNode;
 					this.heap[currentNodeIdx]=parent;
 					currentNodeIdx=current_NodeParent_Idx;
 					current_NodeParent_Idx=Math.floor(currentNodeIdx/2);
			}
	}

	this.remove=function(){
		if(this.heap.length<2){
			var n=heap.pop();
			this.heap[0]=null;
			return n;
		}
		var toRemove = this.heap[1];
  		this.heap[1] = this.heap.pop();
		var currentNodeIdx=1;
		//var current_NodeParent_Idx=Math.floor(currentNodeIdx/2);
		if(this.heap[currentNodeIdx*2+1]){
			if(
			this.heap[currentNodeIdx*2].priority<=this.heap[currentNodeIdx*2+1].priority
			){
			var currentChildIdx=currentNodeIdx*2;
		}else{
			var currentChildIdx=currentNodeIdx*2+1;
		}
	}else{
		var currentChildIdx=currentNodeIdx*2;
	}

		while(
			this.heap[currentChildIdx]&&
			this.heap[currentNodeIdx].priority>=this.heap[currentChildIdx].priority
			){
			var currentNode=this.heap[currentNodeIdx];
			var currentChildNode=this.heap[currentChildIdx];
			this.heap[currentChildIdx]=currentNode;
			this.heap[currentNodeIdx]=currentChildNode;
			currentNodeIdx=currentChildIdx;

				if(this.heap[currentNodeIdx*2+1]){
					if(
						this.heap[currentNodeIdx*2].priority<=this.heap[currentNodeIdx*2+1].priority
						){
						var currentChildIdx=currentNodeIdx*2;
					}else{
						var currentChildIdx=currentNodeIdx*2+1;
					}
				}else{
					var currentChildIdx=currentNodeIdx*2;
				}

		}
return toRemove;
	}
	this.print=function(){
		for (var i = 1; i < this.heap.length; i++) {
			console.log(this.heap[i].priority);
		}
	}

}