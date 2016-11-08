(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgHCeQgqgCgbgwQgbgwAEhAQADhCAggsQAggtAoACQAqADAbAvQAbAwgEBAQgDBCggAsQgeArgmAAIgEAAg");
	this.shape.setTransform(47.1,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgHCeQgqgCgbgwQgbgwAEhAQADhBAggtQAggtAoACQApACAbAwQAbAwgDBAQgDBCggAsQgeArgmAAIgEAAg");
	this.shape_1.setTransform(10.1,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,57.2,33.5), null);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgKA8QgHgEAEgGQANgYAAgaQACgbgNgVQgEgHAHgDQAGgEADAGQAQAZgCAfQgBAegOAbQgCAEgEAAIgEgBg");
	this.shape.setTransform(14.5,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("ACCBbQgrghhUADQgwABhVAQQgGACgDgGQgDgGAGgDQAtgWAbgnQAdgoAAgxQAAgHAIAAQAHAAAAAHQAAA1gfArQgSAbgZATQA8gLAngBQBXgCAuAjQAFAFgDAGQgDAEgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_1.setTransform(14.1,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(0,0,28.2,26.5), null);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2D2D").s().p("EghmAKHQm0gyj2hcQj+hggMiCQgLiBDpiMQDgiGGlh+QN7kMUEh0QUCh0OdBoQG1AyD1BcQD+BgAMCCQALCBjpCMQjgCGmlB+Qt7EM0EB0QqkA9pBAAQoFAAm1gxg");
	this.shape.setTransform(309.9,69.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(0,-0.2,619.9,139.1), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6DE23").s().p("AgUAiQgXiAh0ADQAVgkAkgVQBIgrBJBGIB1EDIizAbQALhCgMhBg");
	this.shape.setTransform(16,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,32,33), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6DE23").s().p("EgIlAt5QkZhGjjk6IAAAAQislpCEpvIAGgcQDAuhgJ0tQgFqXgrneQgChHAMhrQAZjXBFi4ICvjEQArguBNg6QCYh0Cjg6QDlhRDZAvQEQA7DwEAQD9EOBwLPQBqKgguNQQguNWi4K/QjGL6kwFVIgkAmQguAug2AtQisCRixBIQigBCiWAAQhTAAhQgUg");
	this.shape.setTransform(115.5,295.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,231,591.4), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6DE23").ss(3,1,1).p("EAEJgt/QgaAXglA6QhKB2g5C0Qi0JCA+PcQA8PchjQ9QgzIgg+FaIgZB6QgbCWgJCIQgcGzCeCI");
	this.shape.setTransform(28,295.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,56.1,591.9), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6DE23").ss(3,1,1).p("EACYgvAQAGDWAJDuQASHdAPB9QALBdAIHGQAKIQgGIsQgRY1iAKeQh7KLhmEUQgzCKgaAI");
	this.shape.setTransform(24,302.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,48,604.8), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6DE23").ss(3,1,1).p("EgBwgt9QBLC6BXEzQCwJkBJKbQBmOoh2OfQiSSIniRA");
	this.shape.setTransform(36.1,295.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,72.2,591.4), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D6DE23").ss(3,1,1).p("EgC+ghnQAuB9A7DeQB2G9BGHsQDgYklcWn");
	this.shape.setTransform(20.6,216.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,41.2,433.4), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6DE23").s().p("AgCA1QhDgDgwgSQgvgSABgVQABgWAxgOQAxgNBDAEQBEADAvASQAvASgBAVQgBAWgxAOQgmAKgzAAIgbgBg");
	this.shape.setTransform(16.4,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0.1,32.8,10.8), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6DE23").s().p("AgCA1QhEgDgugSQgwgSABgVQABgWAxgNQAxgOBDAEQBEADAvASQAvASgBAVQgBAWgxAOQgmAKgxAAIgdgBg");
	this.shape.setTransform(16.4,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,32.8,10.8), null);


(lib.eyes = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var timeline = this;
		timeline.stop();
		
		var targetTime = generateTargetTime();
		createjs.Ticker.addEventListener("tick", blink);
		
		function blink(e)
		{		
		    if (createjs.Ticker.getTime() > targetTime)
			{
				timeline.gotoAndPlay(1);		
				targetTime = generateTargetTime();
			}
		}
		
		function generateTargetTime()
		{
			return createjs.Ticker.getTime() + Math.random() * 6000.0 + 1000.0;
		}
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// eyes_layer
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(28.6,33.5,1,1,0,0,0,28.6,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:16.7,scaleY:0.56,y:24.1},0).wait(1).to({scaleY:0.12,y:31.4},0).wait(1).to({scaleY:0.41,y:26.5},0).wait(1).to({scaleY:0.71,y:21.6},0).wait(1).to({scaleY:1,y:16.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,33.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mouth();
	this.instance.parent = this;
	this.instance.setTransform(72.5,303.9,1,1,0,0,0,14.1,13.2);

	this.instance_1 = new lib.eyes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.3,250.5,1,1,0,0,0,28.6,16.7);

	this.instance_2 = new lib.Path();
	this.instance_2.parent = this;
	this.instance_2.setTransform(98.1,266.6,1,1,0,0,0,16.4,5.4);
	this.instance_2.alpha = 0.512;

	this.instance_3 = new lib.Path_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(59.6,264.6,1,1,0,0,0,16.4,5.4);
	this.instance_3.alpha = 0.512;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("EgJJAvhQh7gRhqgtQh0gwhXhMQhnhbhFiAQhBh5gciOQg9k6BUmkQBVmhAql5QCByahh1RIgGhEQgEgoAAgcQABikAgieQAhikA+iQQB5kXDOiSQCJhfCugpQCcgkC3AJIAAAAQAeABA0ALQDNAoC+B8QCxB0CMCsQEaFYCAIJQBlGdAIIiQAKMMijNFQhBFMhREPQhfE8h+EHQieFKjDDiQjuETkdBxQh2Auh/APQg4AHg6AAQhEAAhGgKgEgFegubQk7BVi/EkQinD+gqFkQgNByAICbQAEBZANCzQApL/gUJ+QgYLshtKIQgXCIg1EPQgnDuAGCuQAPF1CuDKQBXBlB8BAQB2A9CJAUQAfAEAyACIBQADQCFAMCag0QCCgsCBhVQFCjRDsmUQC5k+CKnGQDMqfBKtaQAhmAgFlDQgFl5g4lHQhImjiWk3Qi3l6kmjPQh3hTh3gyQiMg7h6gFIgCAAIAAAAQgngCgmAAQifAAh/Aig");
	this.shape.setTransform(130.9,333.7);

	this.instance_4 = new lib.Path_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(224.3,286.9,1,1,0,0,0,20.6,216.7);
	this.instance_4.alpha = 0.691;

	this.instance_5 = new lib.Path_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(162.8,330.3,1,1,0,0,0,36.1,295.7);
	this.instance_5.alpha = 0.691;

	this.instance_6 = new lib.Path_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(90.9,335.8,1,1,0,0,0,24,302.4);
	this.instance_6.alpha = 0.691;

	this.instance_7 = new lib.Path_6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(59.5,331.9,1,1,0,0,0,27.9,295.9);
	this.instance_7.alpha = 0.691;

	this.instance_8 = new lib.Path_7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(117.2,338.4,1,1,0,0,0,115.5,295.7);
	this.instance_8.alpha = 0.398;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8BC53F").s().p("EgLjAurQk8hhiKkhIgBAAQirlqCDpuIAGgdQDAuhgJ0tQgFqXgrndQgBhHAMhsQAYjXBFi4QBvknDRijQEKjPGXAYIBDAJQBUAPBZAhQEdBqDcD6QE0FdCGJIQCpLbhxQiQhxQjkjK4QjpItlQEtQjvDXkKBCQhUAUhMADIg7gBQgWACgWAAQhxAAiEgpg");
	this.shape_1.setTransform(130.8,333.6);

	this.instance_9 = new lib.Path_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(124,21.6,1,1,0,0,0,16,16.4);
	this.instance_9.alpha = 0.398;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AikDMQgxiOAVh0QAbiXCRgEQB9gEA5CCQArBjgHCMQAAADgGACIlPAxIgGAAQgMAAgDgGgAhlioQgxAigPA9QgPBAAIBLQAIA/AWBCIE8guIgBgqQgDhjgYhDQgTg4gegiQglgrgzgEIgOAAQg2AAgqAcg");
	this.shape_2.setTransform(120.4,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8BC53F").s().p("Ai6APQgEjBCZgWQCYgWAzC6QAaBdgGBiIlRAxQghhdgChgg");
	this.shape_3.setTransform(120.3,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_9},{t:this.shape_1},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,261.7,638.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(130.8,319.4,1,1,0,0,0,130.8,319.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,261.7,638.7), null);


// stage content:
(lib.cucumber = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{danceStart:405});

	// timeline functions:
	this.frame_44 = function() {
		playSound("weridpickle_v4_intro");
	}
	this.frame_360 = function() {
		playSound("weirdpickle_v4_dance",-1);
	}
	this.frame_585 = function() {
		this.gotoAndPlay("danceStart");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(316).call(this.frame_360).wait(225).call(this.frame_585).wait(22));

	// body
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(466.8,-136.6,1,1,0,0,0,130.8,638.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:130.9,regY:319.3,x:466.9,y:-453},0).wait(1).to({y:-445.6},0).wait(1).to({y:-434},0).wait(1).to({y:-418},0).wait(1).to({x:467,y:-397.8},0).wait(1).to({y:-373.2},0).wait(1).to({x:467.1,y:-344.3},0).wait(1).to({y:-311.1},0).wait(1).to({x:467.2,y:-273.7},0).wait(1).to({x:467.3,y:-231.9},0).wait(1).to({x:467.4,y:-185.8},0).wait(1).to({x:467.5,y:-135.4},0).wait(1).to({x:467.6,y:-80.6},0).wait(1).to({x:467.7,y:-21.6},0).wait(1).to({x:467.8,y:41.7},0).wait(1).to({x:467.9,y:109.3},0).wait(1).to({x:468,y:181.2},0).wait(1).to({x:468.2,y:257.5},0).wait(1).to({x:468.3,y:338},0).wait(1).to({x:468.5,y:422.9},0).wait(1).to({regX:130.8,regY:638.5,scaleY:0.9,x:468.4,y:742.4},0).wait(1).to({regX:130.9,regY:319.3,scaleY:0.8,x:468.5,y:487},0).wait(1).to({scaleY:0.7,y:518.9},0).wait(1).to({scaleY:0.8,y:487},0).wait(1).to({scaleY:0.9,y:455},0).wait(1).to({scaleY:1,y:423.2},0).wait(6).to({regX:130.8,regY:638.5,x:468.4,y:742.4},0).wait(1).to({regX:130.9,regY:319.3,x:468.5,y:423.2},0).wait(361).to({regX:130.8,regY:638.5,x:468.4,y:742.4},0).wait(1).to({regX:130.9,regY:319.3,x:468.5,y:423.2},0).wait(10).to({regX:130.8,regY:638.5,x:468.4,y:742.4},0).wait(1).to({regX:130.9,regY:319.3,x:468.5,y:423.2},0).wait(4).to({regX:130.8,regY:638.5,x:468.4,y:742.4},0).wait(1).to({regX:130.9,regY:319.3,x:468.5,y:421.7},0).wait(1).to({y:420.3},0).wait(1).to({y:418.8},0).wait(1).to({y:417.4},0).wait(1).to({y:415.9},0).wait(1).to({y:414.4},0).wait(1).to({y:412.8},0).wait(1).to({y:411.2},0).wait(1).to({y:409.6},0).wait(1).to({y:407.9},0).wait(1).to({y:406.2},0).wait(1).to({y:404.4},0).wait(1).to({y:402.5},0).wait(1).to({y:400.6},0).wait(1).to({y:398.6},0).wait(1).to({y:396.4},0).wait(1).to({y:394.3},0).wait(1).to({y:392},0).wait(1).to({y:389.6},0).wait(1).to({y:387.1},0).wait(1).to({y:384.5},0).wait(1).to({y:381.7},0).wait(1).to({y:378.9},0).wait(1).to({y:375.9},0).wait(1).to({y:372.8},0).wait(1).to({y:369.5},0).wait(1).to({y:366.1},0).wait(1).to({y:362.5},0).wait(1).to({y:358.8},0).wait(1).to({y:354.9},0).wait(1).to({y:350.9},0).wait(1).to({y:346.7},0).wait(1).to({y:345},0).wait(1).to({y:354.3},0).wait(1).to({y:364.1},0).wait(1).to({y:374.2},0).wait(1).to({y:384.8},0).wait(1).to({y:395.7},0).wait(1).to({y:407.2},0).wait(1).to({regX:130.8,regY:638.5,x:468.4,y:742.4},0).wait(1).to({regX:130.9,regY:319.3,x:468.5,y:422.1},0).wait(1).to({y:421},0).wait(1).to({y:419.9},0).wait(1).to({y:418.8},0).wait(1).to({y:417.7},0).wait(1).to({y:416.7},0).wait(1).to({y:415.6},0).wait(1).to({y:414.5},0).wait(1).to({scaleX:1,y:413.4},0).wait(1).to({y:412.3},0).wait(1).to({scaleX:1,y:411.3},0).wait(1).to({scaleX:1,y:410.2},0).wait(1).to({scaleX:1,y:409.1},0).wait(1).to({scaleX:0.99,y:408},0).wait(1).to({scaleX:0.99,y:406.9},0).wait(1).to({scaleX:0.99,y:405.9},0).wait(1).to({scaleX:0.98,y:404.8},0).wait(1).to({scaleX:0.98,y:403.7},0).wait(1).to({scaleX:0.97,y:402.6},0).wait(1).to({scaleX:0.96,y:401.5},0).wait(1).to({scaleX:0.95,y:400.4},0).wait(1).to({scaleX:0.94,y:399.4},0).wait(1).to({scaleX:0.93,y:398.3},0).wait(1).to({scaleX:0.91,y:397.2},0).wait(1).to({scaleX:0.89,y:396.1},0).wait(1).to({scaleX:0.86,y:395},0).wait(1).to({scaleX:0.84,y:394},0).wait(1).to({scaleX:0.8,y:392.9},0).wait(1).to({scaleX:0.76,y:391.8},0).wait(1).to({scaleX:0.72,y:390.7},0).wait(1).to({scaleX:0.67,y:389.6},0).wait(1).to({scaleX:0.61,y:388.6},0).wait(1).to({scaleX:0.55,y:387.5},0).wait(1).to({scaleX:0.48,y:386.4},0).wait(1).to({scaleX:0.4,y:385.3},0).wait(1).to({scaleX:0.3,y:384.2},0).wait(1).to({scaleX:0.2,x:468.4,y:383.2},0).wait(1).to({scaleX:0.09,y:388.3},0).wait(1).to({scaleX:0.04,skewY:180,x:468.5,y:393.4},0).wait(1).to({scaleX:0.18,x:468.4,y:398.6},0).wait(1).to({scaleX:0.34,x:468.5,y:403.7},0).wait(1).to({scaleX:0.51,x:468.4,y:408.9},0).wait(1).to({scaleX:0.69,y:414},0).wait(1).to({scaleX:0.9,y:419.2},0).wait(1).to({regX:130.8,regY:638.5,scaleX:1,x:468.5,y:742.4},0).wait(1).to({regX:130.9,regY:319.3,x:468.4,y:423.2},0).wait(4).to({regX:130.8,regY:638.5,x:468.5,y:742.4},0).wait(1).to({regX:130.9,regY:319.3,x:468.4,y:421.7},0).wait(1).to({y:420.3},0).wait(1).to({y:418.8},0).wait(1).to({y:417.4},0).wait(1).to({y:415.9},0).wait(1).to({y:414.4},0).wait(1).to({y:412.8},0).wait(1).to({y:411.2},0).wait(1).to({y:409.6},0).wait(1).to({y:407.9},0).wait(1).to({y:406.2},0).wait(1).to({y:404.4},0).wait(1).to({y:402.5},0).wait(1).to({y:400.6},0).wait(1).to({y:398.6},0).wait(1).to({y:396.4},0).wait(1).to({y:394.3},0).wait(1).to({y:392},0).wait(1).to({y:389.6},0).wait(1).to({y:387.1},0).wait(1).to({y:384.5},0).wait(1).to({y:381.7},0).wait(1).to({y:378.9},0).wait(1).to({y:375.9},0).wait(1).to({y:372.8},0).wait(1).to({y:369.5},0).wait(1).to({y:366.1},0).wait(1).to({y:362.5},0).wait(1).to({y:358.8},0).wait(1).to({y:354.9},0).wait(1).to({y:350.9},0).wait(1).to({y:346.7},0).wait(1).to({y:345},0).wait(1).to({y:354.3},0).wait(1).to({y:364.1},0).wait(1).to({y:374.2},0).wait(1).to({y:384.8},0).wait(1).to({y:395.7},0).wait(1).to({y:407.2},0).wait(1).to({regX:130.8,regY:638.5,x:468.5,y:742.4},0).wait(1).to({regX:130.9,regY:319.3,x:468.4,y:422.1},0).wait(1).to({y:421},0).wait(1).to({y:419.9},0).wait(1).to({y:418.8},0).wait(1).to({y:417.7},0).wait(1).to({y:416.7},0).wait(1).to({y:415.6},0).wait(1).to({y:414.5},0).wait(1).to({scaleX:1,y:413.4},0).wait(1).to({y:412.3},0).wait(1).to({scaleX:1,y:411.3},0).wait(1).to({scaleX:1,y:410.2},0).wait(1).to({scaleX:1,y:409.1},0).wait(1).to({scaleX:0.99,y:408},0).wait(1).to({scaleX:0.99,y:406.9},0).wait(1).to({scaleX:0.99,y:405.9},0).wait(1).to({scaleX:0.98,y:404.8},0).wait(1).to({scaleX:0.98,y:403.7},0).wait(1).to({scaleX:0.97,y:402.6},0).wait(1).to({scaleX:0.96,y:401.5},0).wait(1).to({scaleX:0.95,y:400.4},0).wait(1).to({scaleX:0.94,y:399.4},0).wait(1).to({scaleX:0.92,y:398.3},0).wait(1).to({scaleX:0.9,y:397.2},0).wait(1).to({scaleX:0.88,y:396.1},0).wait(1).to({scaleX:0.86,y:395},0).wait(1).to({scaleX:0.83,y:394},0).wait(1).to({scaleX:0.79,y:392.9},0).wait(1).to({scaleX:0.75,y:391.8},0).wait(1).to({scaleX:0.71,y:390.7},0).wait(1).to({scaleX:0.65,y:389.6},0).wait(1).to({scaleX:0.59,y:388.6},0).wait(1).to({scaleX:0.53,y:387.5},0).wait(1).to({scaleX:0.45,x:468.5,y:386.4},0).wait(1).to({scaleX:0.36,x:468.4,y:385.3},0).wait(1).to({scaleX:0.27,x:468.5,y:384.2},0).wait(1).to({scaleX:0.16,y:383.2},0).wait(1).to({scaleX:0.04,y:388.3},0).wait(1).to({scaleX:0.09,skewY:0,y:393.4},0).wait(1).to({scaleX:0.24,y:398.6},0).wait(1).to({scaleX:0.41,y:403.7},0).wait(1).to({scaleX:0.59,y:408.9},0).wait(1).to({scaleX:0.78,y:414},0).wait(1).to({scaleX:1,y:419.2},0).wait(1).to({regX:130.8,regY:638.5,x:468.4,y:742.4},0).to({_off:true},1).wait(21));

	// shadow
	this.instance_1 = new lib.shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(369,720.8,0.169,0.169,0,0,0,59.9,95.4);
	this.instance_1.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:309.9,regY:69.4,scaleX:0.17,scaleY:0.17,x:411.9,y:716.3},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:413.7,y:716.1,alpha:0.107},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:416.4,y:715.8,alpha:0.115},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:420.2,y:715.4,alpha:0.126},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:424.9,y:714.9,alpha:0.14},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:430.8,y:714.2,alpha:0.157},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:437.6,y:713.4,alpha:0.176},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:445.4,y:712.5,alpha:0.199},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:454.3,y:711.5,alpha:0.224},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:464.1,y:710.4,alpha:0.253},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:475.1,y:709.2,alpha:0.284},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:487,y:707.8,alpha:0.319},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:499.9,y:706.4,alpha:0.356},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:513.8,y:704.7,alpha:0.397},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:528.8,y:703,alpha:0.44},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:544.8,y:701.2,alpha:0.486},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:561.7,y:699.3,alpha:0.535},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:579.8,y:697.2,alpha:0.587},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:598.8,y:695.1,alpha:0.642},0).wait(1).to({scaleX:1,scaleY:1,x:618.8,y:692.8,alpha:0.7},0).wait(1).to({regX:59.9,regY:95,scaleX:0.97,scaleY:0.97,x:368.9,y:718.8,alpha:0.699},0).wait(1).to({regX:309.9,regY:69.4,scaleX:0.93,scaleY:0.93,x:602.2,y:694.9,alpha:0.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:594,y:695.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:602.3,y:694.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:610.6,y:694.1},0).wait(1).to({scaleX:1,scaleY:1,x:619,y:693.2},0).wait(6).to({regX:59.9,regY:95,x:368.9,y:718.8,alpha:0.699},0).wait(1).to({regX:309.9,regY:69.4,x:618.9,y:693.2,alpha:0.7},0).wait(361).to({regX:59.9,regY:95,x:368.9,y:718.8,alpha:0.699},0).wait(1).to({regX:309.9,regY:69.4,x:618.9,y:693.2,alpha:0.7},0).wait(10).to({regX:59.9,regY:95,x:368.9,y:718.8,alpha:0.699},0).wait(1).to({regX:309.9,regY:69.4,x:618.9,y:693.2,alpha:0.7},0).wait(4).to({regX:59.9,regY:95,x:368.9,y:718.8,alpha:0.699},0).wait(1).to({regX:309.9,regY:69.4,scaleX:1,scaleY:1,x:618.6,y:693.3,alpha:0.7},0).wait(1).to({scaleX:1,scaleY:0.99,x:618.2},0).wait(1).to({scaleX:1,scaleY:0.99,x:617.9,y:693.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:617.5,y:693.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:617.1,y:693.6},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:616.7},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:616.3,y:693.7},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:615.9,y:693.8},0).wait(1).to({scaleX:0.99,scaleY:0.97,x:615.5},0).wait(1).to({scaleX:0.99,scaleY:0.97,x:615.1,y:693.9},0).wait(1).to({scaleX:0.98,scaleY:0.97,x:614.6,y:694},0).wait(1).to({scaleX:0.98,scaleY:0.97,x:614.1,y:694.1},0).wait(1).to({scaleX:0.98,scaleY:0.96,x:613.7},0).wait(1).to({scaleX:0.98,scaleY:0.96,x:613.2,y:694.2},0).wait(1).to({scaleX:0.98,scaleY:0.96,x:612.7,y:694.3},0).wait(1).to({scaleX:0.97,scaleY:0.95,x:612.1,y:694.4},0).wait(1).to({scaleX:0.97,scaleY:0.95,x:611.6,y:694.5},0).wait(1).to({scaleX:0.97,scaleY:0.95,x:611},0).wait(1).to({scaleX:0.97,scaleY:0.95,x:610.4,y:694.6},0).wait(1).to({scaleX:0.96,scaleY:0.94,x:609.8,y:694.7},0).wait(1).to({scaleX:0.96,scaleY:0.94,x:609.1},0).wait(1).to({scaleX:0.96,scaleY:0.94,x:608.4,y:694.8},0).wait(1).to({scaleX:0.96,scaleY:0.93,x:607.7,y:694.9},0).wait(1).to({scaleX:0.95,scaleY:0.93,x:607,y:695},0).wait(1).to({scaleX:0.95,scaleY:0.93,x:606.2},0).wait(1).to({scaleX:0.95,scaleY:0.93,x:605.4,y:695.1},0).wait(1).to({scaleX:0.94,scaleY:0.92,x:604.5,y:695.2},0).wait(1).to({scaleX:0.94,scaleY:0.92,x:603.6},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:602.7,y:695.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:601.7,y:694.9},0).wait(1).to({scaleX:0.93,scaleY:0.94,x:600.7,y:694.8},0).wait(1).to({scaleX:0.92,scaleY:0.94,x:599.7,y:694.6},0).wait(1).to({scaleX:0.92,scaleY:0.95,x:599.5,y:694.5},0).wait(1).to({scaleX:0.93,scaleY:0.96,x:601.8,y:694.3},0).wait(1).to({scaleX:0.94,scaleY:0.96,x:604.2,y:694.2},0).wait(1).to({scaleX:0.95,scaleY:0.97,x:606.7,y:694.1},0).wait(1).to({scaleX:0.96,scaleY:0.97,x:609.3,y:693.9},0).wait(1).to({scaleX:0.97,scaleY:0.98,x:612.1,y:693.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:614.9,y:693.6},0).wait(1).to({regX:59.9,regY:95,scaleX:1,scaleY:1,x:368.9,y:718.8,alpha:0.699},0).wait(1).to({regX:309.9,regY:69.4,scaleX:1,scaleY:1,x:618.6,y:693.2,alpha:0.7},0).wait(1).to({scaleX:1,scaleY:1,x:618.3,y:693.3},0).wait(1).to({scaleX:1,scaleY:1,x:617.9},0).wait(1).to({scaleX:1,scaleY:1,x:617.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:617.3,y:693.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:616.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:616.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:616.2,y:693.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:615.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:615.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:615.2,y:693.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:614.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:614.6,y:693.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:614.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:613.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:613.5,y:693.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:613.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:612.9},0).wait(1).to({scaleX:0.98,scaleY:0.97,x:612.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:612.2,y:693.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:611.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:611.5,y:694},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:611.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:610.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:610.5,y:694.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:610.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:609.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:609.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:609.1,y:694.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:608.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:608.5,y:694.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:608.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:607.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:607.5,y:694.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:607.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:606.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:606.4,y:694.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:608.1,y:694.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:609.7,y:694.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:611.2,y:694},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:612.9,y:693.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:614.5,y:693.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:616.1,y:693.5},0).wait(1).to({scaleX:1,scaleY:1,x:617.7,y:693.3},0).wait(1).to({regX:59.9,regY:95,scaleX:1,scaleY:1,x:368.9,y:718.8,alpha:0.699},0).wait(1).to({regX:309.9,regY:69.4,x:618.9,y:693.2,alpha:0.7},0).wait(4).to({regX:59.9,regY:95,x:368.9,y:718.8,alpha:0.699},0).wait(1).to({regX:309.9,regY:69.4,scaleX:1,scaleY:1,x:618.6,y:693.3,alpha:0.7},0).wait(1).to({scaleX:1,scaleY:0.99,x:618.2},0).wait(1).to({scaleX:1,scaleY:0.99,x:617.9,y:693.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:617.5,y:693.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:617.1,y:693.6},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:616.7},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:616.3,y:693.7},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:615.9,y:693.8},0).wait(1).to({scaleX:0.99,scaleY:0.97,x:615.5},0).wait(1).to({scaleX:0.99,scaleY:0.97,x:615.1,y:693.9},0).wait(1).to({scaleX:0.98,scaleY:0.97,x:614.6,y:694},0).wait(1).to({scaleX:0.98,scaleY:0.97,x:614.1,y:694.1},0).wait(1).to({scaleX:0.98,scaleY:0.96,x:613.7},0).wait(1).to({scaleX:0.98,scaleY:0.96,x:613.2,y:694.2},0).wait(1).to({scaleX:0.98,scaleY:0.96,x:612.7,y:694.3},0).wait(1).to({scaleX:0.97,scaleY:0.95,x:612.1,y:694.4},0).wait(1).to({scaleX:0.97,scaleY:0.95,x:611.6,y:694.5},0).wait(1).to({scaleX:0.97,scaleY:0.95,x:611},0).wait(1).to({scaleX:0.97,scaleY:0.95,x:610.4,y:694.6},0).wait(1).to({scaleX:0.96,scaleY:0.94,x:609.8,y:694.7},0).wait(1).to({scaleX:0.96,scaleY:0.94,x:609.1},0).wait(1).to({scaleX:0.96,scaleY:0.94,x:608.4,y:694.8},0).wait(1).to({scaleX:0.96,scaleY:0.93,x:607.7,y:694.9},0).wait(1).to({scaleX:0.95,scaleY:0.93,x:607,y:695},0).wait(1).to({scaleX:0.95,scaleY:0.93,x:606.2},0).wait(1).to({scaleX:0.95,scaleY:0.93,x:605.4,y:695.1},0).wait(1).to({scaleX:0.94,scaleY:0.92,x:604.5,y:695.2},0).wait(1).to({scaleX:0.94,scaleY:0.92,x:603.6},0).wait(1).to({scaleX:0.94,scaleY:0.93,x:602.7,y:695.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:601.7,y:694.9},0).wait(1).to({scaleX:0.93,scaleY:0.94,x:600.7,y:694.8},0).wait(1).to({scaleX:0.92,scaleY:0.94,x:599.7,y:694.6},0).wait(1).to({scaleX:0.92,scaleY:0.95,x:599.5,y:694.5},0).wait(1).to({scaleX:0.93,scaleY:0.96,x:601.8,y:694.3},0).wait(1).to({scaleX:0.94,scaleY:0.96,x:604.2,y:694.2},0).wait(1).to({scaleX:0.95,scaleY:0.97,x:606.7,y:694.1},0).wait(1).to({scaleX:0.96,scaleY:0.97,x:609.3,y:693.9},0).wait(1).to({scaleX:0.97,scaleY:0.98,x:612.1,y:693.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:614.9,y:693.6},0).wait(1).to({regX:59.9,regY:95,scaleX:1,scaleY:1,x:368.9,y:718.8,alpha:0.699},0).wait(1).to({regX:309.9,regY:69.4,scaleX:1,scaleY:1,x:618.6,y:693.2,alpha:0.7},0).wait(1).to({scaleX:1,scaleY:1,x:618.3,y:693.3},0).wait(1).to({scaleX:1,scaleY:1,x:617.9},0).wait(1).to({scaleX:1,scaleY:1,x:617.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:617.3,y:693.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:616.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:616.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:616.2,y:693.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:615.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:615.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:615.2,y:693.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:614.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:614.6,y:693.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:614.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:613.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:613.5,y:693.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:613.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:612.9},0).wait(1).to({scaleX:0.98,scaleY:0.97,x:612.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:612.2,y:693.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:611.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:611.5,y:694},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:611.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:610.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:610.5,y:694.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:610.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:609.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:609.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:609.1,y:694.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:608.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:608.5,y:694.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:608.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:607.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:607.5,y:694.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:607.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:606.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:606.4,y:694.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:608.1,y:694.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:609.7,y:694.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:611.2,y:694},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:612.9,y:693.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:614.5,y:693.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:616.1,y:693.5},0).wait(1).to({scaleX:1,scaleY:1,x:617.7,y:693.3},0).wait(1).to({regX:59.9,regY:95,scaleX:1,scaleY:1,x:368.9,y:718.8,alpha:0.699},0).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(836,-375.3,261.7,1503.5);
// library properties:
lib.properties = {
	width: 1000,
	height: 800,
	fps: 60,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"sounds/weirdpickle_v4_dance.mp3?1478569821507", id:"weirdpickle_v4_dance"},
		{src:"sounds/weridpickle_v4_intro.mp3?1478569821507", id:"weridpickle_v4_intro"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;