# Docker

Docker es una plataforma que facilita la construcción, ejecución y compartición de aplicaciones. Utiliza una tecnología de *contenedores* para empaquetar aplicaciones y sus dependencias en una sola *imagen*. Esto permite ejecutar la aplicación en cualquier plataforma que tenga Docker instalado.

Para la creación de contenedores la herramienta más utilizada es Docker. Realiza virtualización a nivel de sistema operativo, en unidades aisladas llamadas contenedores. Su utilización se ha impuesto en el mercado por su sencillez de uso, su versatilidad, su eficiencia y un repositorio público donde están disponibles multitud de aplicaciones que se pueden descargar y utilizar en cuestión de segundos. También se pueden crear contenedores propios con un lenguaje muy sencillo.

## Componentes

- **DockerFile** = Se trata de un fichero de texto utilizado para la construcción de imágenes. Contiene todas las características y herramientas necesarias para la correcta ejecución de la aplicación. Es decir, a través de este fichero, escribimos con comandos la instalación y configuración de los requisitos necesarios para su funcionamiento.
- **Imagen** = Una imagen Docker es el resultado de la compilación de un Dockerfile. Al construir una imagen se genera una capa por cada una de las sentencias ejecutadas. Estas capas son de solo lectura y no se pueden modificar. Su principal ventaja es que se reutilizan entre imágenes evitando así duplicidades. Se podría decir, que las imágenes son equivalentes a un snapshot de una máquina virtual. Con la gran ventaja de ser muy liviano.
- **Contenedor** = Un contenedor es una instancia de una imagen, es decir, es una imagen en ejecución. A partir de una imagen se pueden ejecutar N contenedores que nacen de una configuración común funcionando independientemente.

### Ventajas

1. **Portabilidad**. Los contenedores de Docker son ligeros y portátiles. Pueden ejecutarse en cualquier entorno compatible con Docker, lo que facilita el despliegue consistente y confiable en diferentes plataformas, ya sea en entornos locales, en la nube, etc.

2. **Eficiencia y aislamiento**. Los contenedores comparten el núcleo del sistema operativo subyacente, lo que los hace más eficientes en términos de recursos en comparación con las máquinas virtuales. Además, cada contenedor se ejecuta de forma aislada de los demás, lo que garantiza que las aplicaciones no entren en conflicto entre sí.

3. **Escalabilidad** Docker permite escalar aplicaciones fácilmente agregando o eliminando contenedores según las necesidades. Esto facilita el manejo de cargas de trabajo variables y la respuesta rápida a cambios en la demanda.

4. **Desarrollo y pruebas consistentes**. Docker garantiza que las aplicaciones se ejecuten de manera consistente en diferentes etapas del ciclo de vida de desarrollo y pruebas. Los mismos contenedores utilizados en el entorno de desarrollo también se pueden utilizar en entornos de prueba y producción.

5. **Entrega rápida y despliegue continuo**. Docker simplifica el proceso de empaquetar una aplicación y todas sus dependencias en un contenedor, lo que facilita la entrega y el despliegue continuo de aplicaciones.

6. **Microservicios**. Docker es ampliamente utilizado en arquitecturas de microservicios, donde las aplicaciones se dividen en componentes más pequeños e independientes, cada uno de los cuales se ejecuta en su propio contenedor.

## Docker Compose

Docker-compose es una herramienta desarrollada para definir y ejecutar aplicaciones en contenedores. Usando un fichero .yaml se puede definir una aplicación con varios micro-servicios. Esta práctica, facilita la interconexión de contenedores permitiendo crear redes entre sí, apertura de puertos o volúmenes donde almacenar de manera persistente los datos (evitando en caso de caída de contenedor no perder toda la información). Gracias a Docker-compose podemos orquestar una infraestructura y gestionarla con un único comando.

## Instalación

- [Instalación Docker Windows](https://www.enmilocalfunciona.io/instalando-y-probando-docker-en-windows-10/)
- [Instalación Docker Desktop](https://docs.docker.com/desktop/install/windows-install/)

#### Bibliografía

## Recomendado y evaluado por LKS

- [DevOps con Docker, Jenkins, Kubernetes, git, GitFlow CI y CD](https://www.udemy.com/course/devops-con-dockers-kubernetes-jenkins-y-gitflow-cicd/) | 4.5 sobre 5 puntos
- [Docker Crash Course - The Net Ninja](https://youtu.be/31ieHmcTUOk) | 5 sobre 5 puntos
- [Introducción a Docker - OpenWebinars](https://openwebinars.net/accounts/login/?next=/academia/portada/docker-introduccion/) | 4 sobre 5 puntos