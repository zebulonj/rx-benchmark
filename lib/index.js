import Benchmark from 'benchmark';
import each from 'lodash/collection/each';

function self( value ) {
	return value;
}

const definitions = {
	"Rx.Observable#create": {
		defer: false,
		fn: function( deferred ) {
			return Rx.Observable.create( function( observer ) {

			});
		}
	},
	"Rx.Observable.prototype.subscribe": {
		defer: false,
		setup: function() {
			var source = Rx.Observable.create( function( observer ) {

			});
		},
		fn: function( deferred ) {
			source.subscribe( function() {});
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	"Rx.Observable.prototype.map()": {
		defer: false,
		setup: function() {
			var source = Rx.Observable.create( function( observer ) {

			});
		},
		fn: function( deferred ) {
			source.map( self );
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	"Rx.Observable.prototype.map()+.subscribe()": {
		defer: false,
		setup: function() {
			var source = Rx.Observable.create( function( observer ) {

			}).map( self );
		},
		fn: function( deferred ) {
			source.subscribe( function() {});
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	"Rx.Observable.prototype.map(x10)": {
		defer: false,
		setup: function() {
			var source = Rx.Observable.create( function( observer ) {

			});
		},
		fn: function( deferred ) {
			source.map( self ).map( self ).map( self ).map( self ).map( self ).map( self ).map( self ).map( self ).map( self ).map( self );
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	"Rx.Observable.prototype.map(x10)+.subscribe()": {
		defer: false,
		setup: function() {
			var source = Rx.Observable.create( function( observer ) {

			}).map( self ).map( self ).map( self ).map( self ).map( self ).map( self ).map( self ).map( self ).map( self ).map( self );
		},
		fn: function( deferred ) {
			source.subscribe( function() {});
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	"Rx.Subject#create": {
		defer: false,
		fn: function( deferred ) {
			var subject = new Rx.Subject();
		}
	},
	"Rx.Subject.prototype.onNext()": {
		defer: false,
		setup: function() {
			var subject = new Rx.Subject();

			subject.subscribe( function() {});
		},
		fn: function( deferred ) {
			subject.onNext( 0 );
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	"Rx.Subject.prototype.map(x10).onNext()": {
		defer: false,
		setup: function() {
			var subject = new Rx.Subject();

			subject.map( self ).map( self ).map( self ).map( self ).map( self ).map( self ).map( self ).map( self ).map( self ).map( self ).subscribe( function() {});
		},
		fn: function( deferred ) {
			subject.onNext( 0 );
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	".concatMap()": {
		defer: false,
		setup: function() {
			function fA( value ) {
				return Rx.Observable.return( value );
			}

			var source = new Rx.Subject();
		},
		fn: function( deferred ) {
			source.concatMap( fA );
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	".concatMap().subscribe()": {
		defer: false,
		setup: function() {
			function fA( value ) {
				return Rx.Observable.return( value );
			}

			var source = ( new Rx.Subject() ).concatMap( fA );
		},
		fn: function( deferred ) {
			source.subscribe( function() {});
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	".concatMap().onNext()": {
		defer: false,
		setup: function() {
			function fA( value ) {
				return Rx.Observable.return( value );
			}

			var subject = ( new Rx.Subject() );
			var source = subject.concatMap( fA );

			source.subscribe( function() {});
		},
		fn: function( deferred ) {
			subject.onNext( 0 );
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	".concatMap(x10)": {
		defer: false,
		setup: function() {
			function fA( value ) {
				return Rx.Observable.return( value );
			}

			var source = new Rx.Subject();
		},
		fn: function( deferred ) {
			source.concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA );
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	".concatMap(x10).subscribe()": {
		defer: false,
		setup: function() {
			function fA( value ) {
				return Rx.Observable.return( value );
			}

			var source = ( new Rx.Subject() ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA );
		},
		fn: function( deferred ) {
			source.subscribe( function() {});
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	".concatMap(x10).onNext()": {
		defer: false,
		setup: function() {
			function fA( value ) {
				return Rx.Observable.return( value );
			}

			var subject = ( new Rx.Subject() );
			var source = subject.concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA ).concatMap( fA );

			source.subscribe( function() {});
		},
		fn: function( deferred ) {
			subject.onNext( 0 );
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	".flatMap()": {
		defer: false,
		setup: function() {
			function fA( value ) {
				return Rx.Observable.return( value );
			}

			var source = new Rx.Subject();
		},
		fn: function( deferred ) {
			source.flatMap( fA );
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	".flatMap().subscribe()": {
		defer: false,
		setup: function() {
			function fA( value ) {
				return Rx.Observable.return( value );
			}

			var source = ( new Rx.Subject() ).flatMap( fA );
		},
		fn: function( deferred ) {
			source.subscribe( function() {});
		},
		onError: function( event ) {
			console.log( "Error:", event );
		}
	},
	".flatMap().onNext()": {
		defer: false,
		setup: function() {
			function fA( value ) {
				return Rx.Observable.return( value );
			}

			var subject = ( new Rx.Subject() );
			var source = subject.flatMap( fA );

			source.subscribe( function() {});
		},
		fn: function( deferred ) {
			subject.onNext( 0 );
		},
		onError: function( event ) {
			console.log( "Error:", event );
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
	},

	onError: function( event ) {
		console.log( "Error:", event );
	}
});