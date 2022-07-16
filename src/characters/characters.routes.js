const router = require('express').Router();
const characterController = require('./characters.controllers');
const authMiddleware = require('../auth/auth.middlewares');

const { validId, validObjectBody } = require('./characters.middlewares');

router.get(
  '',
  authMiddleware,
  characterController.readAllCharactersUrlController,
);

router.get(
  '/find/:id',
  validId,
  characterController.readCharacterByIdUrlController,
);

router.post(
  '/create',
  authMiddleware,
  validObjectBody,
  characterController.createCharacterUrlController,
);

router.put(
  '/update/:id',
  validId,
  validObjectBody,
  characterController.updateCharacterUrlController,
);

router.delete(
  '/delete/:id',
  validId,
  characterController.deleteCharacterUrlController,
);

router.get(
  '/search',
  authMiddleware,
  characterController.searchCharacterController,
);

module.exports = router;
