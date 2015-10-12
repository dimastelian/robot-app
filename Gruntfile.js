module.exports = function (grunt) {

    grunt.initConfig({
        nwjs: {
            options: {
                platforms: ['win64'],
                version: '0.12.0',
                buildDir: './release'
            },
            src: ['./app/**/*']
        },
        concat: {
            options: {
                separator: "\r\n",
            },
            main: {
                src: [
                    './src/js/init.js',
                    './src/js/**/*.js',
                    './src/js/main.js',
                ],
                dest: './app/assets/js/app.js',
            },
        },
        uglify: {
            options: {
                mangle: false
            },
            main: {
                files: {
                    './app/assets/js/app.min.js': ['./app/assets/js/app.js']
                }
            }
        },
        sass: {// Task

            bootstrap: {// Target
                options: {// Target options
                    style: 'compressed'
                },
                files: {// Dictionary of files
                    './app/assets/css/bootstrap.min.css': './src/scss/bootstrap.scss', // 'destination': 'source'
                }
            },
            main: {// Target
                options: {// Target options
                    style: 'compressed'
                },
                files: {// Dictionary of files
                    './app/assets/css/main.css': './src/scss/main.scss', // 'destination': 'source'

                }
            }
        },
        exec: {
            run_win64: {
                cmd: 'start .\\cache\\0.12.0\\win64\\nw.exe .\\app\\',
            }
        },
        watch: {
            build: {
                files: ['./src/**/*'],
                tasks: ['build'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-nw-builder');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('build', ['sass:main', 'sass:bootstrap', 'concat:main', 'uglify:main', 'nwjs']);
    grunt.registerTask('build_quick', ['sass:main', 'concat:main', 'uglify:main', 'nwjs']);
    grunt.registerTask('run', ['build_quick', 'exec:run_win64']);


};