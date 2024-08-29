import axios from 'axios'

export const fetchAndSaveCountries = async (req, res) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    let countries = response.data.map(country => country.translations?.spa?.common || country.name.common);

    // Ordenar los países alfabéticamente de A a Z
    countries.sort((a, b) => a.localeCompare(b));

    console.log('Países obtenidos y ordenados:', countries);
    res.status(200).json({ message: 'Países obtenidos y ordenados correctamente', data: countries });
  } catch (error) {
    console.error('Error al obtener los países:', error);
    res.status(500).json({ error: 'Error al obtener y ordenar los países.' });
  }
};
