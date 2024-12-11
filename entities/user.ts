export interface User {
  id?: string; // Firestore document ID
  name: string;
  email: string;
  age: number;
}