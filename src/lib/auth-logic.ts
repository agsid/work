import { ref, get } from "firebase/database";
import { db } from "./firebase";

export async function checkUserTeamStatus(uid: string) {
  const userRef = ref(db, `users/${uid}`);
  const snapshot = await get(userRef);
  
  if (snapshot.exists()) {
    return snapshot.val().teamId; // Returns the ID or null
  }
  return null;
}