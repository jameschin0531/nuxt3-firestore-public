import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  updateDoc
} from "firebase/firestore";
import { firestoreDb } from "./firebase";

export const queryByCollection = async (col: string) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col);

  const snapshot = await getDocs(colRef);

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return docs;
};

export const set = async (col: string, document: Object) => {
  await setDoc(doc(collection(firestoreDb, col)), document, { merge: true });
};

export const add = async (col: string, document: Object) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col);

  const docRef = await addDoc(colRef, document);

  return docRef;
};

export const del = async (col, id) => {
  const docRef = doc(firestoreDb, col, id);
  return await deleteDoc(docRef);
};

export const update = async (col: string, docId: string, updates: Object) => {
  const docRef = doc(firestoreDb, col, docId);
  console.log('docref',docRef);
  
  await updateDoc(docRef, updates);
};