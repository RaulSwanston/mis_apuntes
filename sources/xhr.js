//@ts-check
/** 
 * Realiza una consulta del tipo XMLhttpRequest - Más información en {@tutorial Xhr}
 * @tutorial Xhr
 * @see http://reffacil.com/javascript/ajax/objeto-xmlhttprequest
 * @todo Implementar los manejos de eventos
 * @example
 * var xhr = new Xhr({path:"ruta-del-recurso"}).response;
 */
class Xhr{
    /**
     * @param {Object} data Contiene las propiedades o datos con las que trabajará la clase.
     */
    constructor(data){
        this.xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        this.xhr.responseType = data.responseType || "";
        // this.addEventListeners(this.event, this.prueba, false);
        this.addEventListeners(data.event, data.handler, data.asynchronous || false);
        this.open(data.method || "GET", data.path, data.asynchronous || false, data.username || null, data.password || null);
        this.send(data.send || null);
    }

    /**
     * Manejador de eventos del objeto XMLHttpRequest creado.
     */
    addEventListeners(eventHandler, handler, asynchronous){
        this.xhr.addEventListener(eventHandler, handler, asynchronous);
    }

    /**
     * Se encarga de realizar la apertura a la invocación del recurso.  
     * @param {String} method Es el tipo de petición que se realizará. Su valor puede ser: "CONNECT", "DELETE", "GET", "HEAD", "PATCH", "POST", "PUT", "OPTION" y "TRACE".
     * @param {String} path Hace referencia a la ruta o destino (url) del recurso a consultar. 
     * @param {Boolean} asynchronous Señala si la petición debe ser síncrona (true) o asíncrona (false).
     * @param {String} [username] Opcional, en caso de ser necesario, establece el nombre de usuario. Su valor, sino se establece, es "NULL".
     * @param {String} [password] Opcional, en caso de ser necesario, establece la contraseña. Su valor, sino se establece, es "NULL".
    */
    open(method, path, asynchronous, username, password){
        this.xhr.open(method, path, asynchronous, username, password);
    }

    /**
     * Envía los datos especificados.
     * @param {Object|Array} send Es un objeto o arreglo que contiene la información a enviarse.
     */
    send(send){
        this.xhr.send(send);
    }

    /**
     * Señala si la petición debe ir con credenciales o no. 
     * @param {boolean} yesOrNot Recibe el valor "true" o "false" Señalando si la petición debe ir con credenciales o no.
    */
    set withCredentials(yesOrNot){
        this.xhr.withCredentials = yesOrNot;
    }

    /**
     * Con la ayuda de este método se puede establecer un tipo específico de "header" y su valor correspondiente 
     * @param {object} setRequestHeader Es un objeto que posee dentro las claves "header" y "value" que serán colocadas. Ejemplo: xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    */
    set setRequestHeaders(setRequestHeader){
        this.xhr.setRequestHeader(setRequestHeader.header, setRequestHeader.value);
    }

    /**
     * Si es necesario, con la ayuda de este método puede sobreescribirse el "mimeType".
     * @param {string} overrideMimeType Sobreescribe el MimeType. Ejemplo: xhr.overrideMimeType('text/plain; charset=x-user-defined');
     */
    set overrideMimeTypes(overrideMimeType){
        this.xhr.overrideMimeType(overrideMimeType);
    }

    /**
     * Obtiene la respuesta del servidor.
     * @return {Object} Retorna la respuesta (response) en forma de objeto.
     */
    get result(){
        return this.xhr.response;
    }
}