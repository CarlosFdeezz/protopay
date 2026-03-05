/*
 * Copyright (c) 2025 Carlos Fernández Cabeza
 * Licensed under the MIT License. See LICENSE file in the project root for details.
 */

// Importa las dependencias necesarias
import express, { json } from 'express'; // Framework para crear el servidor web
import cors from 'cors'; // Middleware para permitir peticiones desde otros orígenes (CORS)
const sqlite3 = require('sqlite3').verbose(); // Módulo para manejar la base de datos SQLite
import { resolve } from 'path'; // Módulo para manejar rutas de archivos

// Inicializa la aplicación Express
const app = express();
const PORT = process.env.PORT || 3001; // Puerto en el que se ejecutará el servidor

app.use(cors()); // Permite solicitudes desde cualquier origen (útil para desarrollo frontend)
app.use(json()); // Permite recibir y procesar datos en formato JSON en las peticiones

// Inicializa la base de datos SQLite y crea el archivo si no existe
const dbPath = resolve(__dirname, 'expenses.db'); // Ruta absoluta al archivo de la base de datos
const db = new sqlite3.Database(dbPath); // Abre la base de datos

// Crea la tabla 'expenses' si no existe
// La tabla almacena: id, descripción, monto y fecha del gasto
// 'id' es autoincremental y clave primaria
// 'description' es texto obligatorio
// 'amount' es un número obligatorio
// 'date' es texto obligatorio (puede ser una fecha en formato ISO)
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT NOT NULL,
    amount REAL NOT NULL,
    date TEXT NOT NULL
  )`);
});

// Endpoint GET para obtener todos los gastos
// Devuelve un array de objetos con los gastos ordenados por fecha descendente
app.get('/api/expenses', (req, res) => {
  db.all('SELECT * FROM expenses ORDER BY date DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message }); // Si hay error, responde con código 500 y el mensaje
    res.json(rows); // Si todo va bien, responde con los gastos en formato JSON
  });
});

// Endpoint POST para agregar un nuevo gasto
// Espera un objeto JSON con 'description', 'amount' y 'date'
app.post('/api/expenses', (req, res) => {
  const { description, amount, date } = req.body; // Extrae los datos del cuerpo de la petición
  // Valida que todos los campos estén presentes
  if (!description || !amount || !date) {
    return res.status(400).json({ error: 'Faltan datos requeridos.' }); // Si falta algún dato, responde con error 400
  }
  // Validación de formato de fecha (ISO: YYYY-MM-DD)
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!isoDateRegex.test(date)) {
    return res.status(400).json({ error: 'El formato de la fecha debe ser YYYY-MM-DD.' });
  }
  // Inserta el nuevo gasto en la base de datos
  db.run(
    'INSERT INTO expenses (description, amount, date) VALUES (?, ?, ?)',
    [description, amount, date],
    function (err) {
      if (err) return res.status(500).json({ error: err.message }); // Si hay error, responde con código 500
      // Si todo va bien, responde con el gasto recién creado (incluye el id generado)
      res.json({ id: this.lastID, description, amount, date });
    }
  );
});

// Endpoint DELETE para eliminar un gasto por su id
// El id se recibe como parámetro en la URL
app.delete('/api/expenses/:id', (req, res) => {
  const { id } = req.params; // Extrae el id de los parámetros de la URL
  db.run('DELETE FROM expenses WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message }); // Si hay error, responde con código 500
    res.json({ deleted: this.changes }); // Responde con la cantidad de registros eliminados (debería ser 1 si existe)
  });
});

// Inicia el servidor y muestra un mensaje en consola
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
