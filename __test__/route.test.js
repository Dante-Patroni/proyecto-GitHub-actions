/*Este test verifica que el endpoint de subida de fotos (/subirfoto) 
sigue siendo un método POST y devuelve un código de estado 200 al 
intentarlo de forma correcta*/ 

const request = require('supertest');
const app = require('../app');//Importa la instancia de Express de app.js

describe('Pruebas de Integración Continua (CI) de Rutas', () => {

    // Prueba correcta para verificar el método POST de subida de fotos
    test('POST /subirfoto debe devolver un status 200 (OK)', async () => {
        // Hacemos una petición POST a la ruta, simulando el envío de datos.
        const response = await request(app)
            .post('/subirfoto')
            .send({}); // Enviamos un cuerpo vacío, solo para probar que la ruta responde.
        
        // **LA REGLA:** Esperamos un código de respuesta 200 (éxito).
        expect(response.statusCode).toBe(200); 
    });
    
});