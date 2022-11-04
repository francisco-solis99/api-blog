const axios = require('axios');

async function getImageSD(prompt) {
  try {
    const { data } = await axios.get(`https://lexica.art/api/v1/search?q=${prompt}`);
    if(!data) throw new Error('Prompt not enough');
    return data.images[0].src;

  } catch (error) {
    console.error({message: error});
  }
}


module.exports = { getImageSD };
