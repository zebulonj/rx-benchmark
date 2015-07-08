import Benchmark from 'benchmark';
import Rx from 'rx';
import each from 'lodash/collection/each';

const definitions = {
	"Rx.Observable#create": {
		defer: false,
		fn: function( deferred ) {
			return Rx.Observable.create( function( observer ) {

			});
		}
	}
};

let benches = [];

each( definitions, function( definition, name ) {
	benches.push( new Benchmark( name, definition ) );
});

Benchmark.invoke( benches, {
	name: 'run',
	queued: true,
	onCycle: function( event ) {
		console.log( String( event.target ) );
	}
});