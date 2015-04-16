module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-curl');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-react');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        curl: {
            'google-fonts-source': {
                src: 'http://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,700italic',
                dest: 'src/main/resources/webapp/assets/google-fonts-lato.css'
            }
        },

        less: {
            development: {
                options: {
                    paths: ["public/css"]
                },
                files: {
                    "public/css/style.css": "public/css/less/style.less"
                }
            }
        },

        watch: {
            jsx: {
                files: 'src/main/jsx/*.jsx',
                tasks: 'react'
            },
            uglify: {
                files: 'src/main/js/*.js',
                tasks: 'uglify'
            }
        },

        jshint: {
            files: [
                '*.js'
            ],
            options: {
                expr: true,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        uglify: {
            options: {
                mangle: {
                    except: ['jQuery', 'Backbone']
                }
            },
            bundle: {
                files: {
                    'src/main/resources/webapp/bundle.min.js': [
                        'src/main/js/nashorn-polyfill.js',
                        'node_modules/react/dist/react.js',
                        'src/main/js/app.js',
                        'src/main/js/dashboard.js'
                    ]
                }
            }
        },

        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        cwd: 'node_modules/react/dist/',
                        src: ['*'],
                        dest: 'src/main/resources/webapp/react/',
                        filter: 'isFile',
                        flatten: true
                    },

                    // includes files within path and its sub-directories
                    //{
                    //    expand: false,
                    //    src: ['node_modules/react/dist/**'],
                    //    dest: 'src/main/resources/webapp/react/'
                    //},

                    // makes all src relative to cwd
                    // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

                    // flattens results to a single level
                    // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
                ]
            }
        },

        react: {
            mappings: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/main/jsx',
                        src: ['**/*.jsx'],
                        dest: 'src/main/js',
                        ext: '.js'
                    }
                ]
            }
        }
    });
};

