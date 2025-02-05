import express from 'express';
import { chatAnalysis } from './helpers/chat_analysis';
import { PORT } from './constant';
import error from './middleware/error-middleware';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(error);

app.post('/api/analyse', chatAnalysis);

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
});

export default app;