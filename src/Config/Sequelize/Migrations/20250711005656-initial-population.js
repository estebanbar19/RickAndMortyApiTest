'use strict';

const fetchCharacters = async () => {
  try {
    let characters = [];
    let nextPage = 'https://rickandmortyapi.com/api/character';
    let charactersLimit = 15;
    let charactersCount = 0;

    while (charactersCount < charactersLimit && nextPage) {
      const response = await fetch(nextPage);
      const data = await response.json();

      const formattedCharacters = [];

      data.results.map(character => {
        charactersCount++;
        if(charactersCount > charactersLimit) return;
        formattedCharacters.push({
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          type: character.type,
          gender: character.gender,
          attributes: JSON.stringify({
            origin: character.origin,
            location: character.location,
            image: character.image,
            url: character.url
          }),
          episode: JSON.stringify(character.episode),
          createdAt: new Date(),
          updatedAt: new Date()
        })
      });

      characters = [...characters, ...formattedCharacters];
      nextPage = data.info.next;
    }

    return characters;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      const characters = await fetchCharacters();
      await queryInterface.bulkInsert('Characters', characters, {});
      console.log('Population finished');
    } catch (error) {
      console.error('Error populating database:', error);
      throw error;
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Characters', null, {});
  }
};
