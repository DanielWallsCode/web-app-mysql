import  express, { urlencoded }  from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import morgan from "morgan";
import { router } from "./routes/clientes.routes.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// SETTINGS
app.set('port',process.env.PORT || 3000);
app.set('view-engine','ejs');
app.set('views',path.join(__dirname + '/views'));


// MIDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


// ROUTES
app.use(router);


// ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname + 'public')));


// ESCUCHANDO SERVIDOR
app.listen(app.get('port'), () => {
    console.log('Ejecutando servidor');
});