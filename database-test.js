const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function setup() {
  const db = await sqlite.open({
    filename: 'cars.sqlite',
    driver: sqlite3.Database,
  });

  await db.migrate({ force: 'last' });

  const faq = await db.all('SELECT * FROM FAQ ORDER BY createDate DESC');
  console.log('ALL faq', JSON.stringify(faq, null, 2));

  const cars = await db.all('SELECT * FROM Car');
  console.log('ALL CARS', JSON.stringify(cars, null, 2));
}

setup();
