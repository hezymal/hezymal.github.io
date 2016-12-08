module.exports = function(grunt) {
  grunt.initConfig({
    imagemin: {
      options: {
        cache: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'public/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/build/images/'
        }]
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: {
          'public/build/index.html': ['views/index.jade'],
          'public/build/templates/online.html': ['views/templates/online.jade'],
          'public/build/templates/process.html': ['views/templates/process.jade'],
          'public/build/templates/processes.html': ['views/templates/processes.jade'],
          'public/build/templates/project.html': ['views/templates/project.jade']
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true, cwd: 'public/', src: ['favicon.ico', 'favicon.png'], dest: 'public/build/'
          },
          {
            expand: true, cwd: 'public/images', src: ['*.svg'], dest: 'public/build/images'
          },
          {
            expand: true, cwd: 'public/json', src: ['**'], dest: 'public/build/json'
          },
          {
            expand: true, cwd: 'public/fonts', src: ['**'], dest: 'public/build/fonts'
          },
          {
            expand: true, cwd: 'public/stylesheets', src: ['style.css'], dest: 'public/build/css'
          },
          {
            expand: true, cwd: 'public/javascripts', src: ['script.js'], dest: 'public/build/js'
          }
        ]
      }
    },
    browserify: {
      main: {
        src: 'public/javascripts/app.js',
        dest: 'tmp/app.js'
      }
    },
    uglify: {
      main: {
        files: {'public/build/js/app.js': 'tmp/app.js'}
      }
    },
    'string-replace': {
      inline: {
        files: {
          'public/build/index.html': 'public/build/index.html',
          'public/build/js/app.js': 'public/build/js/app.js'
        },
        options: {
          replacements: [
            {
              pattern: '<link rel="stylesheet" href="stylesheets/style.css">',
              replacement: '<link rel="stylesheet" href="css/style.css">'
            },
            {
              pattern: '<script type="text/javascript" src="app.js"></script>',
              replacement: '<script type="text/javascript" src="js/app.js"></script>'
            },
            {
              pattern: '<script type="text/javascript" src="script.js"></script>',
              replacement: '<script type="text/javascript" src="js/script.js"></script>'
            },
            {
              pattern: 'templateUrl:"templates/project"',
              replacement: 'templateUrl:"templates/project.html"'
            },
            {
              pattern: 'templateUrl:"templates/processes""',
              replacement: 'templateUrl:"templates/processes.html"'
            },
            {
              pattern: 'templateUrl:"templates/process"',
              replacement: 'templateUrl:"templates/process.html"'
            },
            {
              pattern: 'templateUrl:"templates/team"',
              replacement: 'templateUrl:"templates/team.html"'
            },
            {
              pattern: 'templateUrl:"templates/project"',
              replacement: 'templateUrl:"templates/online.html"'
            }

          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-string-replace');

  grunt.registerTask('default', ['imagemin', 'jade', 'copy', 'browserify','uglify', 'string-replace'])
};