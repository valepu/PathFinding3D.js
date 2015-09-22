var idCounter = 0;

/**
 * A node in grid.
 * This class holds some basic information about a node and custom
 * attributes may be added, depending on the algorithms' needs.
 * @constructor
 * @param {number} x - The x coordinate of the node
 * @param {number} y - The y coordinate of the node
 * @param {number} z - The z coordinate of the node
 */
function Node(x, y, z) {
    /**
     * The x coordinate of the node on the grid.
     * @type number
     */
    this.x = x;
    /**
     * The y coordinate of the node on the grid.
     * @type number
     */
    this.y = y;
    /**
     * The z coordinate of the node on the grid.
     * @type number
     */
    this.z = z;
    /**
     * Wheter the node is walkable or note. True by default
     * @type Boolean
     */
    this.walkable = typeof walkable!=="undefined" ? walkable : true;
    /**
     * Neighboring nodes .
     * @type array
     */
    this.neighbors = [];
    
    /**
     * Returns the neighboring nodes that are walkable from this node.
     * @type array
     */
    this.getWalkableNeighbors=function(){
    	var arr=[];
    	for(var i in this.neighbors){
    		if(this.neighbors[i].walkable==true){
    			arr.push(this.neighbors[i]);
    		}
    	}
    	return arr;
    }
};

module.exports = Node;
