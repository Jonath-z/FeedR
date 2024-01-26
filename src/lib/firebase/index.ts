import { Target, User } from "../../types/user";
import { ref, set, push, child, update, get } from "firebase/database";
import { uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { database, feedrImageStore } from "./setup";
export async function createUser(user: User) {
  await set(ref(database, "/users" + user.userId), user);
}

export async function updateUser(user: User) {
  const newUserKey = push(child(ref(database), "users")).key;
  const updates: any = {};
  updates["/posts/" + newUserKey] = user;
  return await update(ref(database), updates);
}

export async function createTarget(target: Target) {
  await set(ref(database, "targets" + target.targetId), target);
}

export async function getAllTargets() {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, "targets"));
  if (snapshot.exists()) {
    return snapshot.val() as Target[];
  }

  return null;
}

const dbRef = ref(database);
export async function getTargetById(targetId: string) {
  const snapshot = await get(child(dbRef, `targets/${targetId}`));
  if (snapshot.exists()) return snapshot.val() as Target;
  return null;
}

export async function getAllUsers() {
  const snapshot = await get(child(dbRef, "users"));
  if (snapshot.exists()) return snapshot.val() as User[];
  return null;
}

export async function getUserById(userId: string) {
  const snapshot = await get(child(dbRef, `users/${userId}`));
  if (snapshot.exists()) return snapshot.val() as User;
  return null;
}

export async function uploadFile(file: File, getFileUrl: (url: string) => Promise<void>, getProgress?: (progress: number) => void, error?: (err: any) => void) {
  const uploadTask = uploadBytesResumable(feedrImageStore, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      getProgress?.(progress);
    },
    (err) => {
      error?.(err);
    },
    async () => {
      const fileUrl = await getDownloadURL(uploadTask.snapshot.ref);
      getFileUrl(fileUrl);
    },
  );
}
