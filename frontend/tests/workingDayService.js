describe('workingDayService:', function() {

	var service, $httpBackend, workingDays, scope;

	var response = { 
		count: 2,
 		days: [{	
			_id: '5603d726cc7807f8353fc05a',
			date: '2015-09-24T08:22:10.953Z',
			tEnd: '2015-09-24T07:10:10.953Z',
			tStart: '2015-09-24T17:30:10.953Z',
			userID: {
				__v: 0,
				_id: '5603b2b270df9aa620cb5d95',
				date: '2015-09-24T08:22:10.953Z',
				fName: 'Yura',
				lName: 'Potanin',
				sex: 'male',
				tel: '0667545844'
			}
		}, {	
			_id: '5603d726cc7807f8353fc05a',
			date: '2015-09-24T08:22:10.953Z',
			tEnd: '2015-09-24T07:10:10.953Z',
			tStart: '2015-09-24T17:30:10.953Z',
			userID: {
				__v: 0,
				_id: '5603b2b270df9aa620cb5d95',
				date: '2015-09-24T08:22:10.953Z',
				fName: 'Yura',
				lName: 'Potanin',
				sex: 'male',
				tel: '0994564545'
			}
		}]
	};

	beforeEach(module('controlTimeModule'));

	beforeEach(inject(function(resourceFactory, $rootScope) {
		service = resourceFactory;

		scope = $rootScope;
	}));

	beforeEach(inject(function($injector) {
		$httpBackend = $injector.get('$httpBackend');

		workingDays = $httpBackend.whenGET('/api/workingDay?page=1').respond(function(method, url, data) {
			return [200, response, {}];
		});

	}));

	it('updateTimeInArray should not throw error if not existing index is passed', function() {
		expect(service.updateTimeInArr.bind(null, 1, new Date(), new Date())).not.toThrow();
	});

	it('updateTimeInArr should emit updateArray message', function(done) {
		service.getAllUsers(1, function(){});

		$httpBackend.flush();

		scope.$on('udateArray', function(ev, data){
			done();
		});

		service.updateTimeInArr(1, new Date(), new Date());

	});

});