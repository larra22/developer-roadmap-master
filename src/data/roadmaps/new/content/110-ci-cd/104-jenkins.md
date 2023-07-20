# Jenkins
Jenkins CI no es más que un sistema desplegado en un servidor que nos ayuda en la tarea de hacer integración continua y programar tareas automáticas cuando ocurra una determinada acción. A este tipo de servicios se los conoce como CI/CD (Coninuous integration / Continuous deploy) y no es el único existen un montón de sistemas parecidos,

Jenkins es un servidor de integración continua. Su principal función es la automatización de tareas. Dispone de multitud de integraciones mediante plugins con diferentes plataformas, lenguajes de programación, funcionalidades, etc. Gracias a su fácil desarrollo y amplia configuración permite gestionar compilaciones, notificaciones, despliegues, seguimiento de calidad de código, generar documentación o simplemente comprobar periódicamente el estado de un servicio. Su lógica esta basada en pipelines, desarrollado mediante una sintaxis propia de la plataforma o mediante librerías en Groovy. Cada pipeline es ejecutado por un job que realizan la tareas configuradas.

So the process is as follows:

You link Jenkins and GitHub repository just like you linked your local machine and GitHub.
Now you, the developer make all the modifications and create a branch, pushing the code and also testing team will write testcase for that code and push the changes or add a new feature into the repository.
The admin now has to make the decision whether to let the master allow/accept the branch or not.
Once the code is moved to master(by default), the build trigger of Jenkins is pulled off. Now it has detected the change and is awake and ready to do its job.

## Plugin: Blue Ocean



## Generador
- [](https://crontab.guru/)

- [](https://codingpotions.com/jenkins-integracion-continua/)