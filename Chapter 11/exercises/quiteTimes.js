// textFile Function provided by book
function textFile(fileName) {
  return new Promise((resolve,reject) => {
    readTextFile(fileName,(text, error) => {
      if(error) reject(error);
      else resolve(text)
    });
  });
}

async function activityTable(day) {
  let table = Array(24).fill(0);

  let logFiles = await textFile("camera_logs.txt");

  for (let file of logFiles.split("\n")) {
    let content = await textFile(file);

    for (let timestamp of content.trim().split("\n")) {
      let date = new Date(Number(timestamp));

      if (date.getDay() === day) {
        table[date.getHours()]++;
      }
    }
  }

  return table;
}