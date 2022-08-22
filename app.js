const fs = require("fs");
const path = require("path");
function isImg(img) {
  if (img.endsWith(".jpg") || img.endsWith(".png") || img.endsWith(".jpeg")) {
    return true;
  }
  return false;
}
function getAllFiles(filePath) {
  const files = fs.readdirSync(filePath);
  console.log(filePath);
  files.forEach((file, i) => {
    fs.stat(`${filePath}\\${file}`, (error, stats) => {
      if (isImg(file)) {
        console.log(file);
        const oldPath = path.join(filePath, file);
        const extName = path.extname(file);
        const newPth = path.join("E:\\new", "x-" + i + "-" + extName);
        fs.copyFileSync(oldPath, newPth);
      } else if (stats.isDirectory()) {
        getAllFiles(filePath + "\\" + file);
      }
    });
  });
}
getAllFiles("E:\\Ruhin");
