# Pipeline

Un Pipeline es una secuencia de tareas automatizadas que definen el ciclo de vida de la aplicación de nuestro flujo de integración/entrega/despliegue continuo. Podemos decir que un Pipeline es un conjunto de instrucciones del proceso que siga una aplicación desde el repositorio de control de versiones hasta que llega a los usuarios.
Consiste en un flujo comprendido en varias fases que van en forma secuencial, siendo la entrada de cada una la salida de la anterior.

En resumen, un pipeline podría estar formado por un conjunto de procesos o herramientas automatizadas que permiten que los desarrolladores (y otros roles), trabajen de forma coherente para compilar, construir, probar e implementar código en un entorno de producción de forma más rápida y sencilla.

### A tener en cuenta

NO existe un pipeline estándar, ya que depende completamente de la tecnología que se esté utilizando. Ahí surge la figura del ingeniero DevOps, que debe conocer tanto el desarrollo como la infraestructura, la administración de sistemas y las herramientas de DevOps.

## Importancia de las pipelines

Las pipelines son fundamentales para implementar prácticas de CI/CD. Permiten a los equipos de desarrollo entregar software de forma rápida y confiable, lo que conduce a una mayor eficiencia, una mejor colaboración y una mayor satisfacción del cliente.

### Consideraciones importantes acerca de las pipelines:

- Es fundamental contar con un sólido sistema de pruebas automatizadas para asegurar la calidad del software entregado.
- La pipeline debe ser versionada y gestionada como cualquier otro código fuente para tener un seguimiento histórico de cambios y mejoras.
- La seguridad es un aspecto crítico; se deben implementar medidas para proteger la integridad y confidencialidad del código y los despliegues.
- La automatización es clave; la pipeline debe requerir la menor intervención manual posible para garantizar la velocidad y confiabilidad del proceso.
- La colaboración entre los equipos de desarrollo, pruebas y operaciones es esencial para garantizar una pipeline eficiente y bien integrada.

### Ventajas

Un pipeline es una secuencia de operaciones automatizadas que usualmente representa una parte de la entrega y el aseguramiento de la calidad del software. Podemos verlo simplemente como una secuencia de scripts que provee algunos beneficios como:

1. Agrupación de operaciones $\rightarrow$ Las operaciones se agrupan en etapas que llamaremos stages, pero también son conocidas como gates o quality gates estas introducen una estructura del proceso y definen claramente una regla: si un stage falla, ningun otro stage se ejecuta.
2. Visibilidad $\rightarrow$ Todos los aspectos del proceso son visualizados, lo que puede ayudar a un análisis del fallo rápido y promueve la colaboración de los equipos.
3. Retroalimentación $\rightarrow$ Los miembros del equipo se dan cuenta de los problemas tan pronto como ocurren. Esto les permite reaccionar de manera rápida.

### Ejemplo proceso

*La arquitectura definida esta basada en pipelines. Cada paso dará comienzo inmediatamente al finalizar el paso previo satisfactoriamente . Toda la lógica de proceso esta contenida por Jenkins, que aguarda pacientemente a un cambio en el repositorio de código configurado. El cambio propiciado por un Merge Request (petición de integración de cambios a una rama productiva) desencadena una ejecución de un Job. Al iniciarse la ejecución es necesario disponer del código localmente para ser compilado y obtener el artefacto versionado. Por ello, el primer paso es realizar la descarga de código. Posteriormente se realiza el compilado y análisis de calidad, siendo este último bloqueante si no se cumplen los estandartes configurados en SonarQube, provocando la parada inmediata de la ejecución. Una vez finalizados estos pasos, se sube el artefacto versionado al repositorio de artefactos dando comienzo el despliegue por los entornos configurados. Ansible es el encargado de realizar esta operativa. Para finalizar, se genera una tag con la versión del aplicativo en Gitlab para guardar una foto del código actual.*

#### Bibliografía

- [Pipeline Syntax ](https://www.jenkins.io/doc/book/pipeline/syntax/)
- [Instalción de Jenkins en docker](https://fp.josedomingo.org/iaw2223/7_ic/jenkins/instalacion_docker.html)