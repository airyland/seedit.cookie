module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            main: {
                src: 'src/cookies.js',
                options: {
                    specs: 'spec/cookies-spec.js'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> */\n'
            },
            build: {
                src: 'src/cookies.js',
                dest: 'dist/cookie.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['jasmine:main', 'uglify']);
    grunt.registerTask('ci', ['default']);
}