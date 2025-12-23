# City CRUD API

Simple Express.js REST API for managing cities using in-memory array for sample project of Rays Micro finance.

## Setup

```bash
npm install
npm start
```

Server runs on http://localhost:3000

## Endpoints

### GET /api/cities
Get all cities

### GET /api/cities/:id
Get city by id

### POST /api/cities
Create new city
```json
{
  "name": "Addis Abeba",
  "country": "Ethiopia",
  "population": 93
}
```

### PUT /api/cities/:id
Update city

### DELETE /api/cities/:id
Delete city

## Testing

### Using the test script
```bash
node test-api.js
```

### Using curl commands

**1. Create a city (POST)**
```bash
curl -X POST http://localhost:3000/api/cities -H "Content-Type: application/json" -d "{\"name\":\"Addis Abeba\",\"country\":\"Ethiopia\",\"population\":93}"
```

**2. Get all cities (GET)**
```bash
curl http://localhost:3000/api/cities
```

**3. Get city by ID (GET)**
```bash
curl http://localhost:3000/api/cities/1
```

**4. Update a city (PUT)**
```bash
curl -X PUT http://localhost:3000/api/cities/1 -H "Content-Type: application/json" -d "{\"name\":\"Addis Ababa\",\"population\":100}"
```

**5. Delete a city (DELETE)**
```bash
curl -X DELETE http://localhost:3000/api/cities/1
```

