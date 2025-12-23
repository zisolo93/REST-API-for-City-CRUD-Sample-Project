const http = require('http');

function request(method, path, data) {
  return new Promise((resolve, reject) => {
    const url = 'http://localhost:3000/api/cities' + path;
    const urlObj = new URL(url);
    
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname,
      method: method,
      headers: { 'Content-Type': 'application/json' }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, body: JSON.parse(body || '{}') });
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function test() {
  try {
    // create
    console.log('Creating city...');
    const city1 = await request('POST', '', { name: 'Addis Abeba', country: 'Ethiopia', population: 93 });
    console.log(city1.body);
    const id1 = city1.body.id;

    const city2 = await request('POST', '', { name: 'Nairobi', country: 'Kenya', population: 47 });
    const id2 = city2.body.id;

    // read all
    console.log('\nGetting all cities...');
    const all = await request('GET', '');
    console.log(all.body);

    // read one
    console.log('\nGetting city by id...');
    const one = await request('GET', `/${id1}`);
    console.log(one.body);

    // update
    console.log('\nUpdating city...');
    const updated = await request('PUT', `/${id1}`, { name: 'Addis Ababa', population: 100 });
    console.log(updated.body);

    // delete
    console.log('\nDeleting city...');
    const deleted = await request('DELETE', `/${id2}`);
    console.log(deleted.body);

    // verify
    console.log('\nFinal cities list:');
    const final = await request('GET', '');
    console.log(final.body);

  } catch (error) {
    console.error(error);
  }
}

test();

