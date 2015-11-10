describe('Feature Test:', function(){
	var plane;
	var airport;

	beforeEach(function(){
		plane = new Plane();
		airport = new Airport();
	});

	it('planes can be instructed to land at the airport', function(){
		plane.land(airport);
		expect(airport.planes()).toContain(plane);
	});

	it('planes can be instructed to take off from airport', function(){
		plane.land(airport);
		plane.take_off(airport);
		expect(airport.planes()).not.toContain(plane);
	});

	// it('planes cannot land when airport is at full capacity', function(){
	// 	plane.land(airport);
	// 	plane.land(airport);
	// 	plane.land(airport);
	// 	plane.land(airport);
	// 	expect(plane.land(airport)).toEqual("The airport is at full capacity");
	// });

});