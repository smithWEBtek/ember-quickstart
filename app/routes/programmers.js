import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return ['Matz', 'Avi', 'DHH']
	}
});
