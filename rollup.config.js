import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

export default {
    entry: 'src/scripts/main.js',
    dest: 'build/js/main.min.js',
    format: 'iife',
  	moduleName: 'eloquentTables',
  	sourceMap: 'inline',
  	plugins: [
    	babel({
      		exclude: 'node_modules/**',
    	}),
    	eslint({
	      	exclude: [
	        	'src/styles/**',
	      	]
	    }),
  	],
  	exports: 'default',
  };
