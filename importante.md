PARA TENER EN CUENTA

El puerto de la base de datos es el port= 5433.

SELECT * FROM pg_tables WHERE schemaname = 'public';

Vale, para los recursos en la tabla, el atributo quienIncluido será el correo electronico de la persona que lo ha incluido

En la parte del frontend, al incluir un nuevo recurso en la base de datos, debería haber casillas también para las relaciones, es decir, deben aparecer en esa tabla o no? Y si es que si, debería aparecer ahí para que la persona escoja, es decir, para recursos relacionados una lista desde la cual pueda escoger y las categorias igual supongo??

IDEA: Los textos de entrada, realizarse con chatgpt. Y ya, abajo se añaden los links, por ejemplo.

Todo lo de la carpeta scripts, no se ejecuta directamente en la app. Si necesitamos algo de ello debe ejecutarse a mano.

Vale la informacion de la izquierda se incluye en [..topicId].astro, cuando hace file.content añade todo lo que contienete el fichero.

He comentado la clase de PageProgress, porque da un error con los preact/hooks. Mirar para arreglar, por tan esta comentado tanto en BaseLayout.
Tambien he comentado pracitcamente toda la clase de CommandMenu.tsx