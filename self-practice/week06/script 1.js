// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = [];

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  quotes.push(quote);
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  const index = quotes.findIndex(q => q.id === id);//เพื่อหาตำแหน่ง (index) ของอ็อบเจกต์ (q) ที่มีค่า id ตรงกับ id
  if (index !== -1) {
    quotes.splice(index, 1);// ถ้าหากหาข้อมูลเจอ บรรทัดนี้จะทำการลบข้อมูลนั้นออกจากอาร์เรย์โดยตรง เมธอด splice() จะแก้ไขอาร์เรย์ต้นฉบับ
  }
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  const quote = quotes.find(q => q.id === id);//find() ใช้หาว่าใน quotes มี object ไหนที่ id ตรงกับที่ส่งมา
  if (quote) {
    if (updatedQuote.content) quote.content = updatedQuote.content;
    if (updatedQuote.author) quote.author = updatedQuote.author;
  }
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  return quotes;
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({ id: 1, content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" });
addQuote({ id: 2, content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" });
addQuote({ id: 3, content: "Happiness depends upon ourselves.", author: "Aristotle" });

// TODO: Delete 1 quote using deleteQuote()
deleteQuote(2);

// TODO: Update 1 quote using updateQuote()
updateQuote(3, { content: "Happiness is the highest good.", author: "Aristotle" });

// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes());
