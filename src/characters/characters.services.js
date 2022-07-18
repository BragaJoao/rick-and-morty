const Character = require('./Character');

// ### ReadAll ###
const readAllCharactersUrlService = async (offset, limit) => {
  const characters = await Character.find().sort({ _id: -1 }).skip(offset).limit(limit).populate('user');
  return characters;
};

const countCharacter = () => Character.countDocuments();

// ### ReadById ###
const readCharacterByIdUrlService = async (id) => {
  const character = await Character.findById(id);
  return character;
};

// ### Create ###
const createCharacterUrlService = async (name, imageUrl, userId) =>
  await Character.create({ name, imageUrl, user: userId });

// ### Update ###
const updateCharacterUrlService = async (id, editedCharacter) => {
  const updatedCharacter = await Character.findByIdAndUpdate(
    id,
    editedCharacter,
  ).setOptions({ returnOriginal: false });
  return updatedCharacter;
};

// ### Delete ###
const deleteCharacterUrlService = async (id) => {
  return await Character.findByIdAndDelete(id);
};

// ### Search ###
const searchCharacterService = (name) =>
  Character.find({
    message: { $regex: `${name || ''}`, $options: 'i' },
  })
    .sort({ _id: -1 })
    .populate('user');

module.exports = {
  readAllCharactersUrlService,
  readCharacterByIdUrlService,
  createCharacterUrlService,
  updateCharacterUrlService,
  deleteCharacterUrlService,
  searchCharacterService,
  countCharacter,
};
