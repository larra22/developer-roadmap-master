import express from 'express';
import express from 'express';
import bcrypt from 'bcrypt';


import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();
// Modifica esto en función de la opción `base` de tu archivo astro.config.mjs.
// Deben coincidir. El valor predeterminado es "/".
const base = '/'
app.use(base, express.static('dist/client/'));
app.use(ssrHandler);
//app.use(express.json());

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await auth.register(username, email, hashedPassword);
        res.send('User registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user');
    }
});

// Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Retrieve user from database based on username
        const user = await auth.getUserByUsername(username);

        // Check if user exists
        if (!user) {
            return res.status(401).send('Invalid username or password');
        }

        // Verify password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Passwords match, login successful
            res.send('Login successful');
        } else {
            // Passwords don't match
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Login failed');
    }
});

app.get('/protected', auth.required(), (req, res) => {
    res.send('This is a protected route');
});

app.post('/logout', auth.required(), (req, res) => {
    auth.logout(req);
    res.send('Logged out successfully');
});

app.listen(4321);