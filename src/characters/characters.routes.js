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
  authMiddleware,
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
  authMiddleware,
  validId,
  validObjectBody,
  characterController.updateCharacterUrlController,
);

router.delete(
  '/delete/:id',
  authMiddleware,
  validId,
  characterController.deleteCharacterUrlController,
);

router.get(
  '/search',
  authMiddleware,
  characterController.searchCharacterController,
);

module.exports = router;
