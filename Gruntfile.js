module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                cwd: 'client/',
                src: 'scripts/*.js',
                dest: 'server/public/assets/scripts'
            }
        },
        watch: {
            scripts: {
                files: ['client/client.js'],
                // tasks: ['jshint','uglify'],
                options: {
                    spawn: false
                }
            },
        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular-route/angular-route.min.js"
                ],
                "dest": "server/public/vendors" +
                "/"
            }
        }
        // jshint: {
        //     files: 'client/scripts/client.js'
        // }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['copy', 'uglify', 'watch']);
};