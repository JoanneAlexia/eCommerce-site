import {
  doc,
  collection,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firestore";

export const getCocktailList = async () => {
  const collectionRef = collection(db, "CocktailList");
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map((doc) => {
    const id = doc.id;
    const restOfData = doc.data();

    return { id, ...restOfData };
  });

  return data;
};

export const getCart = async () => {
  const collectionRef = collection(db, "Cart");
  const querySnapshot = await getDocs(collectionRef);

  const data = querySnapshot.docs.map((doc) => {
    const id = doc.id;
    const restOfData = doc.data();

    return { id, ...restOfData };
  });

  return data;
};

export const addToCart = async (id, data) => {
  await setDoc(doc(db, "Cart", id), data);
};

export const updateCart = async (id, data) => {
  await updateDoc(doc(db, "Cart", id), data);
};

export const updateCocktailList = async (id, data) => {
  await updateDoc(doc(db, "CocktailList", id), data);
};

export const removeCocktailFromCart = async (id) => {
  await deleteDoc(doc(db, "Cart", id));
};
