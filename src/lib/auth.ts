import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

const SESSION_KEY = "admintwin_session";

export type Session = {
  id: string;
  companyName: string;
  email: string;
};

export async function registerUser(
  companyName: string,
  email: string,
  password: string,
): Promise<Session> {
  const usersRef = collection(db, "users");
  const existing = await getDocs(query(usersRef, where("email", "==", email)));
  if (!existing.empty) throw new Error("An account with that email already exists.");

  const docRef = await addDoc(usersRef, {
    companyName,
    email,
    password,
    createdAt: Timestamp.now(),
  });
  const session: Session = { id: docRef.id, companyName, email };
  saveSession(session);
  return session;
}

export async function loginUser(email: string, password: string): Promise<Session> {
  const usersRef = collection(db, "users");
  const snap = await getDocs(
    query(usersRef, where("email", "==", email), where("password", "==", password)),
  );
  if (snap.empty) throw new Error("Invalid email or password.");
  const docSnap = snap.docs[0];
  const data = docSnap.data() as { companyName: string; email: string };
  const session: Session = { id: docSnap.id, companyName: data.companyName, email: data.email };
  saveSession(session);
  return session;
}

export function saveSession(session: Session) {
  if (typeof window !== "undefined") {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
}

export function getSession(): Session | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Session;
  } catch {
    return null;
  }
}

export function logout() {
  if (typeof window !== "undefined") localStorage.removeItem(SESSION_KEY);
}
