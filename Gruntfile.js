module.exports = function (grunt) {

    grunt.initConfig({
        nwjs: {
            options: {
                platforms: ['win64', 'linux'],
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
                    './src/js/utils.js',
                    './src/js/init.js',
                    './src/js/*/*.js',
                    './src/js/main.js',
                ],
                dest: './app/assets/js/app.js',
            },
            
        },
        browserify: {
            main: {
                src: ['./src/js/frontend.js'],
                dest: './app/assets/js/bundle.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            main: {
                files: {
                    './app/assets/js/app.min.js': ['./app/assets/js/app.js']
                }
            },
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
            },
            run_linux64: {
                cmd: './cache/0.12.0/linux64/nw ./app/',
            },
        },
        watch: {
            build: {
                files: ['./src/**/*'],
                tasks: ['build'],
                options: {
                    spawn: false,
                },
            },
            scripts: {
                files: ['./src/**/*.js'],
                tasks: ['scripts'],
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
    grunt.loadNpmTasks('grunt-browserify');
    
    grunt.registerTask('scripts', ['concat:main', 'browserify:main', 'uglify:main']);
    grunt.registerTask('build_quick', ['sass:main', 'scripts', 'nwjs']);
    grunt.registerTask('build', ['sass:bootstrap', 'build_quick']);
    grunt.registerTask('run', ['build_quick', 'exec:run_win64']);
    grunt.registerTask('run:linux64', ['build_quick', 'exec:run_linux64']);
};