let cities = [];
let idCounter = 1;

const getAllCities = (req, res) => {
  res.json(cities);
};

const getCityById = (req, res) => {
  const id = parseInt(req.params.id);
  const city = cities.find(c => c.id === id);
  
  if (!city) {
    return res.status(404).json({ error: 'City not found lets take a coffee break' });
  }
  
  res.json(city);
};

const createCity = (req, res) => {
  const { name, country, population } = req.body;
  
  if (!name || !country) {
    return res.status(400).json({ error: 'Name and country are require do not forget to add them' });
  }
  
  const city = {
    id: idCounter++,
    name,
    country,
    population: population || null
  };
  
  cities.push(city);
  res.status(201).json(city);
};

const updateCity = (req, res) => {
  const id = parseInt(req.params.id);
  const city = cities.find(c => c.id === id);
  
  if (!city) {
    return res.status(404).json({ error: 'City not found lets take a coffee break' });
  }
  
  if (req.body.name) city.name = req.body.name;
  if (req.body.country) city.country = req.body.country;
  if (req.body.population !== undefined) city.population = req.body.population;
  
  res.json(city);
};

const deleteCity = (req, res) => {
  const id = parseInt(req.params.id);
  const index = cities.findIndex(c => c.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'City not found lets take a coffee break' });
  }
  
  const deleted = cities.splice(index, 1)[0];
  res.json(deleted);
};

module.exports = {
  getAllCities,
  getCityById,
  createCity,
  updateCity,
  deleteCity
};

