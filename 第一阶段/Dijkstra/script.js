window.addEventListener("load", foo);

function foo(){
	document.getElementById("canvas").addEventListener("dblclick", create_vertex);
}

var count = 0;

//创建一个graph对象
var Graph = new Object();

Graph.Vertices = new Array();	//节点数组 (Adjacency List)
Graph.Edges = new Array();		//边数组

function _add_vertex(vertex){
/*
	创建一个节点对象
*/
	var V = new Object();	
	V.element = vertex;//用来确定节点的样式
	V.Adj = new Array();//与其相连的节点
	V.distance = 1000000000000000;//这样做是说如果不和源节点相连的话认为两者之间距离无穷
	V.visited = false;//在寻找路径时判断是否已经被访问过了
	V._parent = null;//寻路时，该节点的上一个节点
	V.NEXTS = new Array();//寻路时，该节点的下面的节点

	Graph.Vertices.push(V);
}


function _add_edge(origin,endpoint,line,weight){
/*
	创建一个边对象
*/
	edge = new Object();	
	edge.origin = origin;	//源节点	
	edge.endpoint = endpoint;//目的节点
	edge.weight = weight;//权重
	edge.line = line;//用于确定边的样式

	Graph.Edges.push(edge);

	s = get_graph_vertex(origin);
	d = get_graph_vertex(endpoint);

	if (check_duplicates_in_Adj(s,d))	//检查边是否已经存在, 不允许在两个节点上同时创建多条边
	{
		if(document.getElementById("Directed").checked){  //检查是否为有向连接
			s.Adj.push(d);
		}

		else{
			s.Adj.push(d);
			d.Adj.push(s);
		}
	}

	else
	{
		alert("边已经存在了, 不能创建多条！");
		line.parentNode.removeChild(line);	//移除多创建的边
	}

}


function check_duplicates_in_Adj(u,v){
/*
	通过遍历节点u的邻居节点来判断节点u,v之间是否已经存在连接，有返回false，没有返回true
*/
	var i;
	var j;
	for(i=0; i < Graph.Vertices.length; i++)
	{
		for(j=0; j < Graph.Vertices.length; j++)
		{
			if (Graph.Vertices[i] == u && Graph.Vertices[i].Adj[j] == v)
			{
				return false;
			}
		}
	}
	return true;
}


function get_graph_vertex(div){
/*  
    通过id获取边源节点和目标节点对应的节点对象，因为只有节点对象中才存有邻居节点的信息，我们用这个函数为判断两个节点是否已经相连做准备
*/

	var i;
	for(i=0; i < Graph.Vertices.length; i++)
	{
		if (Graph.Vertices[i].element.id == div.id)
		{
			return Graph.Vertices[i];
		}
	}
}

function _show_edges(){			//显示图的边
	var i;
	for(i=0; i < this.Edges.length; i++)
	{
		alert(this.Edges[i].weight);
	}
}

function _show_vertices(){		//显示图的节点
	var i;
	var j;
	var s = "";
	for(i=0; i < this.Vertices.length; i++)
	{
		s = s + this.Vertices[i].element.id + " : ";
		for(j=0; j< this.Vertices[i].Adj.length; j++)
		{
			s = s + this.Vertices[i].Adj[j].element.id + "--";
		}
		s = s + "\n";
	}
	alert(s);
}

//获取边的权重
function _weight(origin,endpoint){
	s = origin.element.id;
	d = endpoint.element.id;

	var i;
	//有向图和无向图获取边权重的方式不同，有向图的边需要明确的源点和目的节点，无向图不需要明确的源点和目的节点

	if(document.getElementById("Directed").checked){
		for(i=0; i < Graph.Edges.length; i++)
		{
			if(Graph.Edges[i].origin.id == s && Graph.Edges[i].endpoint.id == d){
				return Graph.Edges[i].weight;
			}
		}
	}

	else{
		for(i=0; i < Graph.Edges.length; i++)
		{
			if((Graph.Edges[i].origin.id == s && Graph.Edges[i].endpoint.id == d) || (Graph.Edges[i].endpoint.id == s && Graph.Edges[i].origin.id == d)){
				return Graph.Edges[i].weight
			}
		}
	}

	alert("Error");
}


Graph.add_vertex = _add_vertex;
Graph.add_edge = _add_edge;
Graph.show_vertices = _show_vertices;
Graph.show_edges = _show_edges;
Graph.weight = _weight;

//确定节点和边的样式，以及如何呈现在HTML中

var start_x = null;
var start_y = null;
var start_div = null;

var end_x = null;
var end_y = null;
var end_div = null;

//在HTML中创建节点
function create_vertex(e){
	x = parseInt(e.clientX);		//获取鼠标点击处x的坐标
	x = x - 30;						//移动到适当的位置，使得顶点的水平中心与光标重合
	y = parseInt(e.clientY);		//获取鼠标点击处x的坐标
	y = y - 90;						//移动到适当的位置，使得顶点的水平中心与光标重合


	var div = document.createElement("div");//创建一个div元素，用它来表示节点
	var div_text = document.createElement("p");//创建一个p元素，来表示节点的标号

	count = count + 1

	/*
	节点的样式，颜色，大小，字体，标号之类的
	z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。
    元素可拥有负的 z-index 属性值。
    Z-index 仅能在定位元素上奏效（例如 position:absolute;）
	*/
	div.style.zIndex = "2";
	div.style.position = "absolute";//绝对定位
	div.id = count;
	div_text.innerHTML = count;
	div_text.style.position = "relative";//定位方式相对定位
	div_text.style.marginLeft = "15px";//左边距
	div_text.style.marginTop = "10px";//上边距
	div.style.backgroundColor = "white";
	div.style.border = "2px solid #404040";
	div.style.borderRadius = "50%";//圆角边框，50%代表圆角弯曲程度
	div.style.color = "black";
	div.style.transitionProperty = "background-color";//为背景色添加过度效果
	div.style.transitionDuration = "1s";//过度时长1秒


	//顶点的尺寸
	div.style.height = "40px";
	div.style.width = "40px";

	//定点位置
	div.style.marginLeft = x + "px";
	div.style.marginTop = y + "px";
	
	div.appendChild(div_text);

	//添加事件监听器来创建边
	div.addEventListener("mousedown", get_origin_coordinates);
	div.addEventListener("mouseup", get_destination_coordinates);

	document.getElementById("canvas").appendChild(div);

	Graph.add_vertex(div);
}

function get_origin_coordinates(){
	start_x = parseInt(this.style.marginLeft) + 20;		//源节点x坐标
	start_y = parseInt(this.style.marginTop) + 20;		//源节点y坐标
	start_div = this;
}

function get_destination_coordinates(){
	end_x = parseInt(this.style.marginLeft) + 20;		//目的节点x坐标
	end_y = parseInt(this.style.marginTop) + 20;		//目的节点y坐标
	end_div = this;

	if(start_x != null && start_y != null && end_x != null && end_y != null) //当源节点和目的节点坐标都不为空时画出边来
	{	
		createLine(start_div,end_div, start_x, start_y, end_x, end_y); 		//将div传递到函数中以便于在图中创建边
	}
	//画完线后重置坐标
	start_x = null;			
	start_y = null;			
	end_x = null;			
	end_y = null;		
	start_div = null;
	end_div = null;	
}


function createLine(start_div, end_div, x1, y1, x2, y2){

	var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));	//计算线的长度
	var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;	//计算线的角度
	var transform = 'rotate('+angle+'deg)';	//按获得的角度旋转线rotate(angle)定义 2D 旋转，在参数中规定角度deg是单位
	var weight = window.prompt("请输入边的权值");


	var line = document.createElement("div");
	
	
	s = "<span style=\"font-size:20px;position:absolute;margin-top:10px;font-weight:bold;\">" + weight +"</span>";	//设置边权重得样式
	
	//根据是否为有向边选择相应的css样式
	if(document.getElementById("Directed").checked){
		line.className = "directedLine";					
	}

	else{
		line.className = "undirectedLine";
	}

	line.id = "edge_" + start_div.id + "_" + end_div.id;		//根据源节点和目标节点
	
	//线的样式
	line.style.position = "absolute";
	line.style.transform = transform;//旋转边
	line.style.width = length;
	line.style.marginLeft = x1;
	line.style.marginTop = y1;
	line.style.textAlign = "center";
	line.innerHTML = s;
	
	document.getElementById("canvas").appendChild(line);
	Graph.add_edge(start_div,end_div,line,weight);
}



//dijkstra算法的具体实现

function _insert(vertex){           // 插入节点
	this._data.push(vertex);
	this._size = this._size + 1;
}

function _extract_min(){
	var i;
	var min = 0;
	//找出距离最小的点
	for(i=0; i < this._data.length; i++)
	{
		if(parseInt(this._data[i].distance) < parseInt(this._data[min].distance))
		{
				min = i;
		}	
	}

	var last = this._data.length - 1;

	var temp = this._data[last];
	this._data[last] = this._data[min];
	this._data[min] = temp;
	this._size = this._size - 1;

	var deleted = this._data[last];
	this._data.pop()

	return deleted;
}

function _is_empty(){
	return this._size == 0;
}

//创建一个优先级队列
var PriorityQueue = new Object();
PriorityQueue._data = new Array();
PriorityQueue._size = 0;

PriorityQueue.is_empty = _is_empty;
PriorityQueue.insert = _insert;
PriorityQueue.extract_min = _extract_min;

//dijikstra实现过程
function Dijkstra(){
	//如果输入中只有源节点，那么就找处从源节点到各个节点的最短路
	if(validate_inputs() == "Source"){

		var s = get_vertex(document.getElementById("source").value);//找源点
		var Path = new Array();

		s.distance = 0;

		var i;

		PriorityQueue.insert(s);

		while(! PriorityQueue.is_empty())
		{
			var u = PriorityQueue.extract_min();
			u.visited = true;//已经被遍历过了，下次就不遍历它了

			if(not_in_arr(Path,u))//选一个最小的边加入
			{
				Path.push(u);
			}

			var j;
			for(j=0; j < u.Adj.length; j++)
			{
				var v = u.Adj[j];
				if(v.visited == false)
				{
					relax(u,v);
					PriorityQueue.insert(v);
				}
			}
		}	
		reverse_pointers(s,null,1);
		color_graph(s,null,1);
	}
	
    //如果输入中有源节点和目的节点，就找出源节点到目的节点的最短距离
	if(validate_inputs() == "SourceDestination"){

		var s = get_vertex(document.getElementById("source").value);
		var d = get_vertex(document.getElementById("destination").value);

		var Path = new Array();

		s.distance = 0;

		var i;

		PriorityQueue.insert(s);

		while(! PriorityQueue.is_empty())
		{
			var u = PriorityQueue.extract_min();
			u.visited = true;

			if(not_in_arr(Path,u))
			{
				Path.push(u);
			}

			var j;
			for(j=0; j < u.Adj.length; j++)
			{
				var v = u.Adj[j];
				if(v.visited == false)
				{
					relax(u,v);
					PriorityQueue.insert(v);
				}
			}
		}	
		reverse_pointers(s,d,2);
		color_graph(s,d,2);
	}
}

//-----------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------Other Functions------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------

function reverse_pointers(src,destination,key){

	if(key == 1){
		var i;
		var j;

		for(i=0; i < Graph.Vertices.length; i++)
		{
			if(Graph.Vertices[i] != src){
				Graph.Vertices[i]._parent.NEXTS.push(Graph.Vertices[i]);
			}
		}
	}

	else if(key == 2){
		var i;
		var j;

		var curr = destination;
		while(curr != src)
		{
			curr._parent.NEXTS.push(curr);
			curr = curr._parent;
		}
	}
}


var Queue = new Object();
Queue._data= new Array();
Queue.front = 0;
Queue.rear = 0;
	
function _enqueue(vertex){
	this._data.push(vertex);
	this.rear = this.rear + 1;
}

function _dequeue(){
	dequeued = this._data[this.front];
	this._data[this.front] = null;
	this.front = this.front + 1;
	return dequeued;
}

function Queue_is_empty(){
	return this.front == this.rear;
}


Queue.enqueue = _enqueue;
Queue.dequeue = _dequeue;
Queue.is_empty = Queue_is_empty;
Queue.disp = _disp;

function color_graph(source,destination,key){

	if(key == 1){

		var counter = 0;

		source.element.style.backgroundColor = "#1aff8d";
		Queue.enqueue(source);

		while(!Queue.is_empty())
		{
			u = Queue.dequeue();

			var j;
			for(j=0; j < u.NEXTS.length; j++)
			{
				v = u.NEXTS[j];

				if(v.element.style.backgroundColor == "white")
				{
					counter = counter + 1.5;
					Queue.enqueue(v);
					color_edge(u,v,counter);


					v.element.style.transitionDelay = counter + "s";
					v.element.style.backgroundColor = "#1aff8d";
				}
			}
		}
	}

	if(key == 2){

		var counter = 0;

		source.element.style.backgroundColor = "#1aff8d";
		Queue.enqueue(source);

		while(!Queue.is_empty())
		{
			u = Queue.dequeue();

			var j;
			for(j=0; j < u.NEXTS.length; j++)
			{
				v = u.NEXTS[j];

				if(v.element.style.backgroundColor == "white")
				{
					counter = counter + 1.5;
					Queue.enqueue(v);
					color_edge(u,v,counter);


					v.element.style.transitionDelay = counter + "s";
					v.element.style.backgroundColor = "#1aff8d";
				}
			}

			if(u == destination){
				break;
			}
		}
	}
}


function relax(origin,endpoint){
	ud = parseInt(origin.distance);
	vd = parseInt(endpoint.distance);
	w = parseInt(Graph.weight(origin,endpoint));
	if(vd > (ud + w)){
		endpoint.distance = ud + w;
		endpoint._parent = origin;
	}	
}


function color_edge(source,endpoint,count){
	var i;
	if(document.getElementById("Directed").checked){
		for(i=0; i < Graph.Edges.length; i++)
		{
			if(Graph.Edges[i].origin.id == source.element.id && Graph.Edges[i].endpoint.id == endpoint.element.id){
				Graph.Edges[i].line.style.transitionDelay = count + "s";
				Graph.Edges[i].line.style.backgroundColor = "white";
				Graph.Edges[i].line.style.color = "white";
			}
		}
	}

	else{
		for(i=0; i < Graph.Edges.length; i++)
		{
			if((Graph.Edges[i].origin.id == source.element.id && Graph.Edges[i].endpoint.id == endpoint.element.id) || (Graph.Edges[i].origin.id == endpoint.element.id && Graph.Edges[i].endpoint.id == source.element.id))
			{
				Graph.Edges[i].line.style.transitionDelay = count + "s";
				Graph.Edges[i].line.style.backgroundColor = "white";
				Graph.Edges[i].line.style.color = "white";
			}
		}
	}
}


function not_in_arr(arr,v)
{
	var i;
	for(i=0; i < arr.length; i++)
	{
		if(v.element.id == arr[i].element.id){
			return false;
		}
	}

	return true;
}


function get_vertex(name){
	var i;
	for(i=0; i < Graph.Vertices.length; i++)
	{
		if(Graph.Vertices[i].element.id == name){
			return Graph.Vertices[i];
		}
	}
}

function validate_inputs(){
	if(document.getElementById("source").value == ""){
		alert("请输入源节点");
	}

	else if(document.getElementById("destination").value == ""){
		return "Source";
	}

	else{
		return "SourceDestination";	
	}
}

function Restart(){
	var i;

	for(i=0; i<Graph.Vertices.length; i++)
	{
		Graph.Vertices[i].distance = 1000000000000;
		Graph.Vertices[i].element.style.transitionDelay = "0s";
		Graph.Vertices[i].element.style.backgroundColor = "white";
		Graph.Vertices[i].visited = false;
		Graph.Vertices[i]._parent = null;

		while(Graph.Vertices[i].NEXTS.length != 0){
			Graph.Vertices[i].NEXTS.pop();
		}
	}

	for(i=0; i<Graph.Edges.length; i++)
	{
		Graph.Edges[i].line.style.transitionDelay = "0s";
		Graph.Edges[i].line.style.backgroundColor = "black";
		Graph.Edges[i].line.style.color = "black";
	}

	while(! PriorityQueue.is_empty())
	{
		PriorityQueue.extract_min();
	}
}

function CleanCanvas(){
	location.reload();
}