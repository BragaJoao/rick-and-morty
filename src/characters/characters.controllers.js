const characterService = require('./characters.services');

// ### ReadAll ### 
const readAllCharactersUrlController = async (req, res) => {
  const characters = await characterService.readAllCharactersUrlService();
  if (characters.length === 0) {
    return res
      .status(400)
      .send({ message: 'There is no character registered!' });
  }
  res.status(200).send(characters);
};

// ### ReadById ### 
const readCharacterByIdUrlController = async (req, res) => {
  const id = req.params.id;
  const chosenCharacter = await characterService.readCharacterByIdUrlService(
    id,
  );
  if (!chosenCharacter) {
    return res.status(404).send({ message: 'Character not found!!' });
  }
  res.status(200).send(chosenCharacter);
};

// ### Create ### 
const createCharacterUrlController = async (req, res) => {
  try {
  const {name, imageUrl} = req.body;

  const { id } = await characterService.createCharacterUrlService(name, imageUrl, req.userId);
  return res.send({
    message: "Character created successfully!",
    newCharacter: { id, name, imageUrl },
  });
  }catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// ### Update ### 
const updateCharacterUrlController = async (req, res) => {
  const id = req.params.id;
  const editedCharacter = req.body;
  const updatedCharacter = await characterService.updateCharacterUrlService(
    id,
    editedCharacter,
  );
  res.status(200).send(updatedCharacter);
};

// ### Delete ### 
const deleteCharacterUrlController = async (req, res) => {
  const id = req.params.id;
  await characterService.deleteCharacterUrlService(id);
  res.status(200).send({ message: 'Character was successfully deleted' });
};

module.exports = {
  readAllCharactersUrlController,
  readCharacterByIdUrlController,
  createCharacterUrlController,
  updateCharacterUrlController,
  deleteCharacterUrlController,
};
