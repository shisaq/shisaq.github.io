/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 100,
            height: 100,
            // gravity: 'North',
            rename: false,
            suffix: '-thumbnail',
            quality: 50
          },
          {
            height: 500,
            // 如果500比原始比例更大，图片会拉伸到500
            upscale: true,
            // gravity: 'North',
            rename: false,
            // suffix: '-500',
            quality: 50
          }]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/temporary/',
          dest: 'img/img_des/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img/img_des'],
      }
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img/img_des']
        }
      }
    }

    // 拷贝文件到发布目录，这样字体可被反复处理
    // copy: {
    //     main: {
    //         src: 'font/src/**',
    //         dest: 'font/'
    //     },
    // },
    // 字蛛插件：压缩与转码静态页面中的 WebFont
    // 'font-spider': {
    //     options: {},
    //     main: {
    //         src: '*.html'
    //     }
    // }

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  // grunt.loadNpmTasks('grunt-font-spider');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
