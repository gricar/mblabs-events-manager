import 'dotenv/config';
import { app } from './app';

const { API_PORT } = process.env;

app.use('/', (req, res) => res.send('MB Labs'));

app.listen(API_PORT, () => console.log(`Server is running on PORT: ${API_PORT}`));
