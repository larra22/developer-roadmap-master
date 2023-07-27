# Funcionamiento

## Virtualización de contenedores

La virtualización de contenedores se basa en la creación de un entorno aislado y seguro para ejecutar aplicaciones, servicios o sistemas operativos en un único host físico. A diferencia de la virtualización tradicional, que utiliza un hipervisor para crear máquinas virtuales, la virtualización de contenedores se basa en la utilización de un motor de contenedores.

El motor de contenedores (Container Engine) es responsable de crear y gestionar los contenedores, que son instancias aisladas de un sistema operativo que comparten el mismo kernel (kernel es una parte fundamental del sistema operativo que se encarga de conceder el acceso al hardware de forma segura para todo el software que lo solicita). Esto significa que todos los contenedores comparten el mismo sistema operativo, pero cada uno tiene su propia biblioteca de aplicaciones y configuraciones, lo que los hace independientes y portables.

El proceso de virtualización de contenedores se basa en tres componentes clave:

Imágenes: son plantillas de configuración que contienen todos los archivos necesarios para ejecutar una aplicación, servicio o sistema operativo dentro de un contenedor. Las imágenes de contenedor se utilizan para crear y desplegar contenedores.
Contenedores: son instancias aisladas de una imagen. Cada contenedor tiene su propio sistema de archivos y se ejecuta en un espacio aislado, lo que garantiza que las aplicaciones o servicios que se ejecutan en él no afecten al resto del sistema.
Motor de contenedores: es el encargado de crear, gestionar y orquestar los contenedores. El motor de contenedores también se encarga de la gestión de redes, volúmenes, y otros recursos compartidos entre contenedores.
La virtualización de contenedores ofrece ventajas como la portabilidad, la escalabilidad y la eficiencia. Debido a que los contenedores comparten el mismo kernel, su creación y ejecución es más rápida y eficiente que en la virtualización tradicional. Además, los contenedores pueden moverse fácilmente entre diferentes hosts, lo que facilita la migración y la escalabilidad de aplicaciones y servicios.

Otros conceptos básicos de los contenedores incluyen:

Registro de contenedor: es un repositorio que se utiliza para almacenar y distribuir imágenes de contenedor. Los registros de contenedores permiten a los desarrolladores compartir y distribuir fácilmente sus imágenes de contenedor con otros usuarios.
Cluster de contenedores: es un grupo de servidores que se utilizan para alojar y ejecutar contenedores de forma distribuida. Los clusters de contenedores permiten una mayor escalabilidad y resiliencia para las aplicaciones que se ejecutan en contenedores.
Volumen de contenedor: es una forma de persistir datos más allá del ciclo de vida de un contenedor. Los volúmenes de contenedor permiten compartir datos entre contenedores y almacenar datos de una aplicación de manera segura.
Red de contenedor: es una red virtual que permite que los contenedores se comuniquen entre sí y con el mundo exterior. Las redes de contenedores pueden ser privadas o públicas y se utilizan para aislar los contenedores y mejorar la seguridad.
Orquestador de contenedores: es una herramienta que automatiza el despliegue, la gestión y la escalabilidad de los contenedores. Los orquestadores de contenedores, como Kubernetes, permiten a los usuarios administrar un gran número de contenedores de manera eficiente y escalable.