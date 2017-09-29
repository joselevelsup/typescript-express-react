var gulp = require("gulp"),
    ts = require("gulp-typescript"),
    nodemon = require("gulp-nodemon");

var tsProject = ts.createProject("tsconfig.json");

gulp.task("compile", function(){
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("./buildServer"));
});

gulp.task("watch", ["compile"], function(){
    gulp.watch("./server/**/**.ts", ["compile"]);
});

gulp.task("serve", ["compile"], function(){
    var stream = nodemon({
        script: "./bin/www",
        watch: "server",
        ext: "ts",
        tasks: ["compile"],
        env: {
            "NODE_ENV": "development"
        }
    });
    return stream;
});

gulp.task("default", ["compile"]);