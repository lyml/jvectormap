module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: [
                    'jquery-jvectormap.js',
                    'src/jvectormap.js',
                    'src/abstract-element.js',
                    'src/abstract-canvas-element.js',
                    'src/abstract-shape-element.js',
                    'src/svg-element.js',
                    'src/svg-group-element.js',
                    'src/svg-canvas-element.js',
                    'src/svg-shape-element.js',
                    'src/svg-path-element.js',
                    'src/svg-circle-element.js',
                    'src/svg-image-element.js',
                    'src/svg-text-element.js',
                    'src/vml-element.js',
                    'src/vml-group-element.js',
                    'src/vml-canvas-element.js',
                    'src/vml-shape-element.js',
                    'src/vml-path-element.js',
                    'src/vml-circle-element.js',
                    'src/vector-canvas.js',
                    'src/simple-scale.js',
                    'src/ordinal-scale.js',
                    'src/numeric-scale.js',
                    'src/color-scale.js',
                    'src/legend.js',
                    'src/data-series.js',
                    'src/proj.js',
                    'src/map-object.js',
                    'src/region.js',
                    'src/marker.js',
                    'src/map.js',
                    'src/multimap.js'
                ],
                dest: 'dist/jvectormap.js'
            },
            css: {
                src: [
                    'jquery-jvectormap.css'
                ],
                dest: 'dist/jvectormap.css'
            }
        },
        cssmin: {
            dist: {
                src: 'dist/jvectormap.css',
                dest: 'dist/jvectormap.min.css'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/jvectormap.min.js': 'dist/jvectormap.js'
                }
            }
        }
    });


    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', [ 'concat', 'uglify', 'cssmin' ]);
};