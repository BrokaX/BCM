import FirebaseService from "./firebase.js";

const dbCards = FirebaseService.db.collection("/cards");

// Create
const create = (data) => {
  return dbCards.add(data);
};
// Read
const getAll = () => {
  return dbCards;
};
// Update
const update = (id, value) => {
  return dbCards.doc(id).update(value);
};
// Delete
const remove = (id) => {
  return dbCards.doc(id).delete();
};

const CardsService = {
  getAll,
  create,
  update,
  remove,
};

export default CardsService;
