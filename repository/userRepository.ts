import { db } from '../config/firebaseConfig';
import { User } from '../entities/user';

const usersCollection = db.collection('users');

// Create a new user
export const createUser = async (user: User): Promise<User> => {
  const newUserRef = await usersCollection.add(user);
  const newUser = await newUserRef.get();
  return { id: newUser.id, ...newUser.data() } as User;
};

// Get all users
export const getAllUsers = async (): Promise<User[]> => {
  const snapshot = await usersCollection.get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as User));
};

// Get a user by ID
export const getUserById = async (id: string): Promise<User | null> => {
  const doc = await usersCollection.doc(id).get();
  return doc.exists ? ({ id: doc.id, ...doc.data() } as User) : null;
};

// Update a user
export const updateUser = async (id: string, data: Partial<User>): Promise<User | null> => {
  const userRef = usersCollection.doc(id);
  await userRef.update(data);
  const updatedUser = await userRef.get();
  return { id: updatedUser.id, ...updatedUser.data() } as User;
};

// Delete a user
export const deleteUser = async (id: string): Promise<void> => {
  await usersCollection.doc(id).delete();
};