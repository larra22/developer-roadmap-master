# Docker


## Componentes
- **DockerFile** = Se trata de un fichero de texto utilizado para la construcción de imágenes. Contiene todas las características y herramientas necesarias para la correcta ejecución de la aplicación. Es decir, a través de este fichero, escribimos con comandos la instalación y configuración de los requisitos necesarios para su funcionamiento.
- **Imagen** = Una imagen Docker es el resultado de la compilación de un Dockerfile. Al construir una imagen se genera una capa por cada una de las sentencias ejecutadas. Estas capas son de solo lectura y no se pueden modificar. Su principal ventaja es que se reutilizan entre imágenes evitando así duplicidades. Se podría decir, que las imágenes son equivalentes a un snapshot de una máquina virtual. Con la gran ventaja de ser muy liviano.
- **Contenedor** = Un contenedor es una instancia de una imagen, es decir, es una imagen en ejecución. A partir de una imagen se pueden ejecutar N contenedores que nacen de una configuración común funcionando independientemente.

======
Features of Docker Images
Let’s discuss a few highlighting features of Docker Images that will help you understand them better.

Docker Images are simply templates consisting of read-only layers called intermediate layers that are a result of instructions specified inside the corresponding Dockerfiles.
You can create container instances for these read-only Docker Images which are writable and use them to modify the Images, commit the changes to build new and customized Images.
Also, you can download pre-built Images from Docker registries such as Dockerhub using the docker pull command.
You can push your own Docker Images to private registries, share them with our colleagues. It is also possible to backup Docker Images by converting them into tarball files using the docker save command and load them back as images using the Docker load command.
Docker Images are very small in size, typically a few megabytes.
====
Advantages of Docker Images
The following are the advantages or benefits of Docker Images that make them immensely popular among the developer communities.

Docker Images are highly portable. Even though they contain information about dependencies, libraries, environment files, etc., if you share them with others, they will run the same way in any platform as they run in yours. Please note that Docker Containers are not portable. This is so because when you create Docker containers and make changes inside them, the changes are lost once you exit the container. If you want to share these changes, you will need to first commit these changes using the Docker Commit command to create a new Docker image and then share this image.
They are extremely lightweight. This is so because they consist of multiple layers and each layer simply includes just the difference from the layers preceding them.
Docker Images are consistent. This is so because they are immutable. This characteristic of Docker Images is useful when you want to perform testing on the application while making sure that the environment does not break. 
It makes sharing applications very easy as you only need to push the images to repositories and share them with your teammates. You can also convert them to compressed tarball files.
Docker Images are highly secured because they have a hash value associated with them and can even be digitally signed to prevent unauthorized access.

============================
Contenedor: Un contenedor es una instancia de una imagen, es decir, es una imagen en ejecución. A partir de una imagen se pueden ejecutar N contenedores que nacen de una configuración común funcionando independientemente.

============= DOCKER COMPOSE
Docker-compose es una herramienta desarrollada para definir y ejecutar aplicaciones en contenedores. Usando un fichero .yaml se puede definir una aplicación con varios micro-servicios. Esta práctica, facilita la interconexión de contenedores permitiendo crear redes entre sí, apertura de puertos o volúmenes donde almacenar de manera persistente los datos (evitando en caso de caída de contenedor no perder toda la información). Gracias a Docker-compose podemos orquestar una infraestructura y gestionarla con un único comando. [10]



Para la creación de contenedores la herramienta más utilizada es Docker. Realiza virtualización a nivel de sistema operativo, en unidades aisladas llamadas contenedores. Su utilización se ha impuesto en el mercado por su sencillez de uso, su versatilidad, su eficiencia y un repositorio público donde están disponibles multitud de aplicaciones que se pueden descargar y utilizar en cuestión de segundos. También se pueden crear contenedores propios con un lenguaje muy sencillo.