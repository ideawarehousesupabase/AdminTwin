import { c as collection, g as getDocs, q as query, w as where, a as addDoc, T as Timestamp, b as getFirestore } from "../_libs/firebase__firestore.mjs";
import "../_libs/firebase.mjs";
import { c as getApps, g as getApp, i as initializeApp } from "../_libs/firebase__app.mjs";
const firebaseConfig = {
  apiKey: "AIzaSyD6LefS_FXtk1I5drYA6ZkxVfY6WIES-Aw",
  authDomain: "admintwin.firebaseapp.com",
  projectId: "admintwin",
  storageBucket: "admintwin.firebasestorage.app",
  messagingSenderId: "778227034946",
  appId: "1:778227034946:web:e6d86584f15735ab9df6db",
  measurementId: "G-D3X7ZGEXKB"
};
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const SESSION_KEY = "admintwin_session";
async function registerUser(companyName, email, password) {
  const usersRef = collection(db, "users");
  const existing = await getDocs(query(usersRef, where("email", "==", email)));
  if (!existing.empty) throw new Error("An account with that email already exists.");
  const docRef = await addDoc(usersRef, {
    companyName,
    email,
    password,
    createdAt: Timestamp.now()
  });
  const session = { id: docRef.id, companyName, email };
  saveSession(session);
  return session;
}
async function loginUser(email, password) {
  const usersRef = collection(db, "users");
  const snap = await getDocs(
    query(usersRef, where("email", "==", email), where("password", "==", password))
  );
  if (snap.empty) throw new Error("Invalid email or password.");
  const docSnap = snap.docs[0];
  const data = docSnap.data();
  const session = { id: docSnap.id, companyName: data.companyName, email: data.email };
  saveSession(session);
  return session;
}
function saveSession(session) {
  if (typeof window !== "undefined") {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
}
function getSession() {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
function logout() {
  if (typeof window !== "undefined") localStorage.removeItem(SESSION_KEY);
}
export {
  logout as a,
  getSession as g,
  loginUser as l,
  registerUser as r
};
