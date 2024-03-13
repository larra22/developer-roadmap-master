# Jenkins

Jenkins CI no es más que un sistema desplegado en un servidor que nos ayuda en la tarea de hacer integración continua y programar tareas automáticas cuando ocurra una determinada acción. A este tipo de servicios se los conoce como CI/CD (Coninuous integration / Continuous deploy) y no es el único existente. Dispone de multitud de integraciones mediante plugins con diferentes plataformas, lenguajes de programación, funcionalidades, etc. Gracias a su fácil desarrollo y amplia configuración permite gestionar compilaciones, notificaciones, despliegues, seguimiento de calidad de código, generar documentación o simplemente comprobar periódicamente el estado de un servicio. Su lógica esta basada en pipelines, desarrollado mediante una sintaxis propia de la plataforma o mediante librerías en Groovy. Cada pipeline es ejecutado por un job que realizan la tareas configuradas.

En términos simples, Jenkins automatiza el proceso de construcción, prueba y despliegue de aplicaciones, lo que facilita la entrega continua de software a través de pipelines configuradas de manera específica.

## Componentes pipeline

- Disparadores: Motivo por el cual se comienza la ejecución de tareas automáticas. Puede ser por varios motivos: push en un repositorio github, ejecución cada cierto tiempo, finalización de otra tarea,…
- Stage: Son las etapas lógicas en las que se dividen los flujos de trabajo de Jenkins. Es una práctica recomendada dividir nuestro flujo de trabajo en etapas ya que nos ayudará a organizar nuestros pipelines en fases. Ejemplos de fases: build, test, deploy,…
- Steps: Son las tareas ó comandos que ejecutados de forma secuencial implementan la lógica de nuestro flujo de trabajo.
- Node: Máquina que es parte del entorno de Jenkins y es capaz de ejecutar un Pipeline Jenkins. También llamada agentes de ejecución. Pueden ser la misma máquina donde tenemos instalado Jenkins, o máquinas configuradas para este fin. También podemos usar contenedores docker como agentes de ejecución. Es importante reseñar que el directorio de trabajo (workspace) es compartido por los steps del nodo, de forma que steps de un nodo pueden acceder a ficheros/directorios generados por steps de ese mismo nodo.
- Notificaciones: Por ejemplo que envíe un correo electrónico al terminar.

## Ventajas de Jenkins

1. Automatización: Jenkins automatiza tareas repetitivas y propensas a errores, lo que ahorra tiempo y reduce la posibilidad de fallos humanos.

2. Integración Continua : Permite la integración rápida y continua del código, lo que facilita la detección temprana de errores y la solución rápida de problemas.

3. Entrega Continua: Jenkins facilita la entrega rápida y confiable del software a través de pipelines bien definidas y procesos automatizados.

4. Escalabilidad: Es altamente escalable y puede adaptarse a proyectos de diferentes tamaños y complejidades.

5. Personalización: Mediante el uso de plugins, Jenkins se puede personalizar para ajustarse a las necesidades específicas de cada proyecto.

## Instalación

Asegúrate de tener Java instalado.

- [Installing Jenkins (Oficial)](https://www.jenkins.io/doc/book/installing/windows/)
- [Primeros Pasos con Jenkins](https://webipedia.es/tecnologia/cursos/jenkins-tutorial-primeros-pasos/)

### Generador

- [crontab guru](https://crontab.guru/)

### Tutoriales

- [Jenkins: tutorial para esta herramienta de CI](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/jenkins-tutorial/)
- [Tutorial Jenkins. Qué es y cómo hacer integración continua](https://codingpotions.com/jenkins-integracion-continua/)
