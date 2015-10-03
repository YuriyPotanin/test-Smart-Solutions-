describe('workingDayService:', function() {

	var service;

	beforeEach(module('controlTimeModule'));

	beforeEach(inject(function(resourceFactory) {
		service = resourceFactory;
	}));

	it('updateTimeInArray should not throw error if not existing index is passed', function() {
		expect(service.updateTimeInArr.bind(null, 1, new Date(), new Date())).not.toThrow();

	});

});