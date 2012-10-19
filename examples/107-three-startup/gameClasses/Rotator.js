var Rotator = IgeEntity.extend({
	classId:'Rotator',

	init: function (val) {
		this._super();
		this._rotationVal = val;
	},

	/**
	 * Called every frame by the engine when this entity is mounted to the scenegraph.
	 * @param ctx The canvas context to render to.
	 */
	tick: function (ctx) {
		// Rotate this entity by 0.1 degrees.
		this.rotateBy(0, 0, (this._rotationVal * ige.tickDelta) * Math.PI / 180);

		// Call the IgeEntity (super-class) tick() method
		this._super(ctx);
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Rotator; }