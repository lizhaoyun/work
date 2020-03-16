/* global module: true */
module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          src: './join.html',
          dest: 'dist/join.html'
        }
      },
      cssmin: {
        'dist/join.css': 'join.css'
      },
      uglify: {
        release:{
          files: {
            'dist/join.js': 'join.js'
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);
  };