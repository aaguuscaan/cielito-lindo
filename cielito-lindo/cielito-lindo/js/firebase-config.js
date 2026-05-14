// ============================================================
// FIREBASE CONFIGURATION - Cielito Lindo
// Reemplazá estos valores con los de tu proyecto Firebase
// ============================================================

// ============================================================
// FIREBASE CONFIGURATION - Cielito Lindo
// Reemplazá estos valores con los de tu proyecto Firebase
// ============================================================

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAeHpQQWkDlmBaOrzc1XIvzLPGuxIfqD2M",
  authDomain: "cielito-lindo-50c3f.firebaseapp.com",
  projectId: "cielito-lindo-50c3f",
  storageBucket: "cielito-lindo-50c3f.firebasestorage.app",
  messagingSenderId: "591671052455",
  appId: "1:591671052455:web:4bc22a201034d5e5ce7382"
};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios
export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

// ============================================================
// DATOS INICIALES - ejecutar UNA VEZ para seedear Firestore
// ============================================================
async function seedInitialData() {
  // Verificar si ya existe la cabaña
  const cabinRef = db.collection('cabins').doc('cielito-lindo');
  const cabinDoc = await cabinRef.get();

  if (!cabinDoc.exists) {
    await cabinRef.set({
      nombre: 'Cielito Lindo',
      descripcion: 'Una cabaña de montaña diseñada para reconectar con lo esencial. Rodeada de naturaleza, con vistas únicas a las Sierras de Córdoba. Cada detalle fue pensado para que tu estadía sea una experiencia memorable.',
      precio: 45000, // precio por noche en pesos
      capacidad: 6,
      servicios: ['WiFi', 'Pileta', 'Asador', 'Cocina Equipada', 'Estacionamiento', 'Aire Acondicionado', 'Calefacción', 'Smart TV', 'Vista a las Sierras'],
      imagenes: [],
      ubicacion: 'Villa Yacanto, Córdoba, Argentina',
      lat: -32.0874,
      lng: -64.8597,
      whatsapp: '5493511234567',
      activa: true,
      creadoEn: serverTimestamp()
    });
    console.log('✅ Cabaña creada');
  }
}

// Reglas de Firestore sugeridas (agregar en Firebase Console):
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /cabins/{cabinId} {
      allow read: if true;
      allow write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    match /bookings/{bookingId} {
      allow read: if request.auth != null && (resource.data.userId == request.auth.uid || get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      allow read: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    match /reviews/{reviewId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && (resource.data.userId == request.auth.uid || get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }
  }
}
*/
