# Pipeline
Un Pipeline es una secuencia de tareas automatizadas que definen el ciclo de vida de la aplicación de nuestro flujo de integración/entrega/despliegue continuo. Podemos decir que un Pipeline es un conjunto de instrucciones del proceso que siga una aplicación desde el repositorio de control de versiones hasta que llega a los usuarios.
Consiste en un flujo comprendido en varias fases que van en forma secuencial, siendo la entrada de cada una la salida de la anterior.

El pipeline estaría formado por un conjunto de procesos o herramientas automatizadas que permiten que los desarrolladores (y otros roles), trabajen de forma coherente para crear e implementar código en un entorno de producción.

NO existe un pipeline estándar, ya que depende completamente de la tecnología que se esté utilizando. Ahí surge la figura del ingeniero DevOps, que debe conocer por una parte el desarrollo como la infraestructura, la administración de sistemas y las herramientas de DevOps.

La arquitectura definida esta basada en pipelines. Cada paso dará comienzo inmediatamente al finalizar el paso previo satisfactoriamente . Toda la lógica de proceso esta contenida por Jenkins, que aguarda pacientemente a un cambio en el repositorio de código configurado. El cambio propiciado por un Merge Request (petición de integración de cambios a una rama productiva) desencadena una ejecución de un Job. Al iniciarse la ejecución es necesario disponer del código localmente para ser compilado y obtener el artefacto versionado. Por ello, el primer paso es realizar la descarga de código. Posteriormente se realiza el compilado y análisis de calidad, siendo este último bloqueante si no se cumplen los estandartes configurados en SonarQube, provocando la parada inmediata de la ejecución. Una vez finalizados estos pasos, se sube el artefacto versionado al repositorio de artefactos dando comienzo el despliegue por los entornos configurados. Ansible es el encargado de realizar esta operativa. Para finalizar, se genera una tag con la versión del aplicativo en Gitlab para guardar una foto del código actual.

Un pipeline es una secuencia de operaciones automatizadas que usualmente representa una parte de la entrega y el aseguramiento de la calidad del software. Podemos verlo simplemente como una secuencia de scripts que provee algunos beneficios como:

Agrupación de operaciones Las operaciones se agrupan en etapas que llamaremos stages, pero también son conocidas como gates o quality gates estas introducen una estructura del proceso y definen claramente una regla: si un stage falla, ningun otro stage se ejecuta.
Visibilidad Todos los aspectos del proceso son visualizados, lo que puede ayudar a un análisis del fallo rápido y promueve la colaboración de los equipos.
Retroalimentación Los miembros del equipo se dan cuenta de los problemas tan pronto como ocurren. Esto les permite reaccionar de manera rápida.

una Pipeline, es una expresión automatizada para obtener el software desde un sistema de control de versiones hacia los equipos de destinos.

Cada cambio en el software pasa por un proceso complejo antes de ser entregado. Este proceso implica construirlo de manera confiable y repetible, y acto seguido hacerlo vascular entre las distintas etapas de la prueba de implementación.

La definición de una Pipeline de Jenkins se escribe en un archivo de texto (llamado Jenkinsfile) que, a su vez, existe en el repositorio de control de versiones del proyecto en cuestión. Esta es la base de “Pipeline-as-code”; trata el flujo de CD (entrega continua) como parte de la aplicación para ser versionada y revisada como cualquier otra pieza del código



Disparadores: Motivo por el cual se comienza la ejecución de tareas automáticas. Puede ser por varios motivos: push en un repositorio github, ejecución cada cierto tiempo, finalización de otra tarea,…
Stage: Son las etapas lógicas en las que se dividen los flujos de trabajo de Jenkins. Es una práctica recomendada dividir nuestro flujo de trabajo en etapas ya que nos ayudará a organizar nuestros pipelines en fases. Ejemplos de fases: build, test, deploy,…
Steps: Son las tareas ó comandos que ejecutados de forma secuencial implementan la lógica de nuestro flujo de trabajo.
Node: Máquina que es parte del entorno de Jenkins y es capaz de ejecutar un Pipeline Jenkins. También llamada agentes de ejecución. Pueden ser la misma máquina donde tenemos instalado Jenkins, o máquinas configuradas para este fin. También podemos usar contenedores docker como agentes de ejecución. Es importante reseñar que el directorio de trabajo (workspace) es compartido por los steps del nodo, de forma que steps de un nodo pueden acceder a ficheros/directorios generados por steps de ese mismo nodo.
Notificaciones: Por ejemplo que envíe un correo electrónico al terminar.

## Estructura de un pipeline

Un pipeline de jenkins consiste de dos clases de elementos: stages y pasos (steps).

Entonces los pipelines tienen dos componentes fundamentales:

Step: Representa una sola operación (le dice a jenkins que hacer, por ejemplo, clonar un repositorio o ejecutar un script)
Stage: Es una separación lógica de los steps. Es decir grupos de secuencias conceptualmente distintas. que se usan para visualizar el progreso en jenkins. Lo mas común es que tengamos Stages como: Compilar, Probar e Instalar.
Los stages y los pasos se pueden configurar muy fácilmente a través de la interfaz gráfica de jenkins. Para ello tendriamos que escribir un script:


#### Bibliografía

- [Pipeline Syntax ](https://www.jenkins.io/doc/book/pipeline/syntax/)
- [Instalción de Jenkins en docker](https://fp.josedomingo.org/iaw2223/7_ic/jenkins/instalacion_docker.html)