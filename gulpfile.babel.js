
import gulp from 'gulp';
import schema from 'gulp-graphql';

// Regenerate the graphql schema and recompile the frontend code that relies on schema.json
gulp.task('generate-schema', () => {
  return gulp.src('./server/data/schema.js')
    .pipe(schema({
      json: true,
      graphql: false
    }))
    .on('error', console.log)
    .pipe(gulp.dest('./server/data'));
});

gulp.task('watch-schema', () => {
  gulp.watch('./server/data/schema.js', [ 'generate-schema' ]);
});

gulp.task('default', ['schema']);
