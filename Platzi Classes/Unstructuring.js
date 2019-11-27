/* Destructuring */

//Assign variable from objects
var voxel = {x: 3.6, y: 7.4, z: 6.54};

const {x, y, z} = voxel;
console.log(x, y, z);
const {x : a, y : b, z : c} = voxel;
console.log(b);

//Assign variables from nested objects
const nest = {
	start: {x:5, y:6},
	end: {x:6, y: -9}
};
const {start : { x: startX, y:startY }} = nest;
console.log(startX);
