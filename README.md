# Code Academy Project Templates
### With Gulp & SASS

## Setup

<ol>
<li>Copy the template and all it's files.</li>
<li>Rename The "ca-project" folder</li>
<li>Initialize git with the "ca-project" only</li>
<li>Change the Destination of the styles.scss in gulpfile.js (see below)</li>
<li>Don't Forget To Commit & Push When You're Done 😁</li>
</ol>

## Do Not
Clone this repo and initialize the whole project. You should clone, copy, and then create a new repo for the Code Academy project <strong>only</strong>.


### Changing styles.scss destination in gulpfile.js

```
// Default
.pipe(gulp.dest('ca-project/css/'))

// Change To
.pipe(gulp.dest('PROJECT NAME GOES HERE/css/'))
```
