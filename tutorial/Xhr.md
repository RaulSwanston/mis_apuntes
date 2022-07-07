# Tutorial de la clase Xhr (XMLHttpRequest)

XMLHttpRequest es un objeto JavaScript que fue diseñado por Microsoft y adoptado por Mozilla, Apple y Google. Actualmente es un estándar de la W3C. Proporciona una forma fácil de obtener información de una URL sin tener que recargar la página completa. Una página web puede actualizar sólo una parte de la página sin interrumpir lo que el usuario está haciendo. XMLHttpRequest es ampliamente usado en la programación AJAX (Asynchronous JavaScript and XML).

**La clase Xhr busca simplificar la forma de realizar AJAX**, de manera que para hacer uso del objeto XMLHttpRequest basta con escribir:
```javascript
    var xhr = new Xhr({path:"ruta-del-recurso"}).response;
```
Esto realiza la consulta utilizando el método **GET**

##  La clase Xhr recibe un objeto donde pueden definirse los valores para el método open() y send().
**No es necesario definir todos los parámetros**, solo los que solicite el recurso que se desea consultar.
```js
    // Definiendo los parámetros del método open()

    new Xhr({
        method: "GET", // [ CONNECT | DELETE | GET | HEAD | PATCH | POST | PUT | OPTION | TRACE ]
        path:"ruta-del-recurso",
        asynchronous: false, // [ true | false ]
        username: "nombre-del-usuario",
        password: "contraseña-del-usuario"
    });
```
```javascript
    // Definiendo solo algunos parámetros del método open() y enviando datos a través del método send()

    new Xhr({path:"ruta-del-recurso", method:"POST", send:{name:"nombre", email:"ejemplo@email.com"}});
```
El valor dado al parámetro **send** puede ser un arreglo o un objeto, en este ejemplo ha sido un objeto, aunque en la práctica lo ideal sería colocar una variable del tipo arreglo u objeto. Ejm.: **send:variable**.

El parámetro **"method" es un String** (cadena de carácteres) que puede ser de los siguientes tipos:
* **CONNECT** <span style="color:#6d426d">**establece**</span> un túnel hacia el servidor identificado por el recurso.
* **DELETE** <span style="color:#6d426d">**borra**</span> un recurso en específico.
* **GET** <span style="color:#6d426d">**solicita**</span> una representación de un recurso específico, las peticiones que usan el método GET sólo deben recuperar datos.
* **HEAD** <span style="color:#6d426d">**solicita**</span> una respuesta idéntica a la de una petición "GET", pero sin el cuerpo de la respuesta.
* **PATCH** <span style="color:#6d426d">**aplica**</span> modificaciones parciales a un recurso.
* **POST** <span style="color:#6d426d">**envia**</span> una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.
* **PUT** <span style="color:#6d426d">**reemplaza**</span> todas las representaciones actuales del recurso de destino con la carga útil de la petición.
* **OPTIONS** <span style="color:#6d426d">**describe**</span> las opciones de comunicación para el recurso de destino.
* **TRACE** <span style="color:#6d426d">**establece**</span> una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.

Con "POST" no poseemos limitaciones de tamaño para enviar información entre diferentes archivos. En cambio con "GET" si que podemos encontrar estas limitaciones.

# Los métodos open() y send()

Los métodos open() y send() son los más importantes de un objeto XMLHttpRequest, **aunque no son los únicos**, dado que a través de estos dos métodos es posible acceder a un recurso. Estos métodos han sido definidos dentro de la clase Xhr y sólo es posible acceder a ellos definiendo sus parámetros. Recuerda que **no es necesario definir todos los parámetros**, solo los que solicita el recurso.

```javascript
    // Método open()
    open(method, path, asynchronous, username, password){
        this.xhr.open(method, path, asynchronous, username, password);
    }
```

```javascript
    // Método send()
    send(send){
        this.xhr.send(send);
    }
```

# Manejo de eventos del objeto XMLHttpRequest

Cuando se consulta o accede a un recurso a través del objeto XMLHttpRequest ocurren una serie de eventos en el servidor mientras se realiza la tarea. Estos eventos pueden ser tratados a través de sus métodos correspondientes. El más utilizado es el **onReadyStateChange** que ocurre cuando el estado de la consulta cambia.

## Los estados del objeto XMLHttpRequest pueden ser los descritos a continuación. 

| Estado           | Valor del Estado (**readyState**) | Descripción                                                                           |
|------------------|:---------------------------------:|---------------------------------------------------------------------------------------|
| UNSENT           | 0                                 | El objeto ha sido construido                                                          |
| OPENED           | 1                                 | El método open() ha sido invocado correctamente.                                      |
| HEADERS_RECEIVED | 2                                 | Toda redirección (en caso de haber) ha sido revisada y todos los cabezales recibidos. |
| LOADING          | 3                                 | La respuesta esta siendo enviada                                                      |
| DONE             | 4                                 | La transferencia de datos ha sido completada                                          |

## Los métodos (eventos) ocurridos en el objeto XMLHttpRequest son los siguientes

| Métodos (Eventos)  | Usando **addEventListener** | Descripción de la Acción                                                     |
|--------------------|-----------------------------|------------------------------------------------------------------------------|
| onloadstart        | loadstart                   | La busqueda inicializo                                                       |
| onprogress         | progress                    | Transmitiendo datos                                                          |
| onabort            | abort                       | Cuando la busqueda ha sido abortada                                          |
| onerror            | error                       | La busqueda ha fallado                                                       |
| onload             | load                        | La busqueda se realizo correctamente                                         |
| ontimeout          | timeout                     | El tiempo de espera ha sido superado antes de que la busqueda se completara  |
| onloadend          | loadend                     | La busqueda ha sido completada                                               |
|--------------------|-----------------------------|------------------------------------------------------------------------------|
| onreadystatechange | readystatechange            | El atributo **readyState** va cambiando de valor excepto cuando es **UNSET** |

## Manejo de los Métodos (Eventos)
Es posible tratar los eventos del objeto XMLHttpRequest, creado en la clase Xhr, de dos formas particulares, estas son, invocando al método correspondiente o través del método addEventListener

```javascript
    // Invocando al método

    this.xhr.onreadystatechange = () => {
        if(this.xhr.readyState === 4 && this.xhr.status === 200){
            // Acción a realizar...
        }
    };
```

```javascript
    // A través del método addEventListener

    this.xhr.addEventListener("readystatechange", stateChange, false);
```