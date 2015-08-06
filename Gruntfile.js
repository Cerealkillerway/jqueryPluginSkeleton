module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: grunt.option('port') || 7000
                },
            }
        },
        sass: {
            dist: {
                files: {
                    'css/customPlugin.css': 'sass/customPlugin.scss',
                    'css/main.css': 'sass/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['sass/*.scss', 'lib/sass/.scss'],
                tasks: ['sass'],
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'index.html',
                    'js/customPlugin.js',
                    'css/customPlugin.css',
                    'css/main.css'
                ],
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect', 'watch']);
};