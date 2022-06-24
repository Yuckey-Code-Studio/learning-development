import imagemin from 'imagemin-keep-folder';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';

imagemin(['htdocs/**/*.{jpg,png,gif,svg}'], {
  plugins: [
    imageminMozjpeg({ quality: 85 }),
    imageminPngquant({ quality: [0.7, 0.8] }),
    imageminGifsicle(),
    imageminSvgo(),
  ],
}).then(() => {
  console.log('Optimized image succeeds!');
});
