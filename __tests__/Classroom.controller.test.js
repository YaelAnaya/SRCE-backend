const request = require('supertest');
const express = require('express');
const { getCourses, getCourseWork } = require('../controllers/Clasroom.controller');

const app = express();
app.use(express.json());
app.post('/getCourses', getCourses);
app.post('/getCourseWork', getCourseWork);

describe('Classroom Controller', () => {
  //Token y courseId
  const token = 'ya29.a0AWY7CknZydLe-zFxw5QgwYrEI_Tg447Yq-mX7ugm7qhW-lAYzD4qaYau6UxJUdKOsgjFY17A4S3Wra4ijPrbuihm3ifLQRR05IV3PzuZ7AgqmdtQ5ZGMe7fOEXN8SZVgD0iukKb7fMHGS-H3Vp5PEyKvoW9daCgYKARwSARASFQG1tDrpE5XX4-GCZxav607Rs0Q3TQ0163';
  const courseId = '513476151579';

  test('Obtener cursos', async () => {
    const response = await request(app).post('/getCourses').send({ token });
    expect(response.statusCode).toBe(200);
    expect(response.body.ok).toBe(true);
    expect(response.body).toHaveProperty('courses');
  });

  test('Obtener tareas', async () => {
    const response = await request(app).post('/getCourseWork').send({ token, courseId });
    expect(response.statusCode).toBe(200);
    expect(response.body.ok).toBe(true);
    expect(response.body).toHaveProperty('courseWork');
  });
});
