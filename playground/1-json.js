const fs = require('fs');

const book = {
  title:'Rich Dad Poor Dad',
  author:'Robert Kiyosakhi'
}

// fs.writeFileSync('1-json.json',JSON.stringify(book));
const bufferData = fs.readFileSync('1-json.json');
const actualBook = JSON.parse(bufferData.toString());
actualBook.name = 'vishal';
actualBook.age = '24';
fs.writeFileSync('1-json.json',JSON.stringify(actualBook));
