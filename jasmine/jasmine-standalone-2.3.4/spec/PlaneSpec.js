describe('Plane', function(){
	
	var plane;
	var airport;

	beforeEach(function(){
		airport = jasmine.createSpyObj('airport', ['clearForLanding']);
		plane = new Plane();
	});

	it('can land at an airport', function(){
		plane.land(airport);
		expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
	});

});