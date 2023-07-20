# GitLab

Gitlab es un proyecto open-source instalable en servidor propio basado en Git que permite tener repositorios de código y control de versiones. GitLab se basa en varios componentes que forman una solución completa para DevOps y la gestión de proyectos. En primer lugar, se pueden crear repostiorios para alojar código, colaborar en ellos o identificar problemas.

Las funciones nativas de integración continua y entrega continua (Gitlab CI/CD) permiten el desarrollo, las pruebas y el despliegue continuos de una aplicación. Los repositorios pueden hacerse públicos o restringirse a un público interno o privado.

Permite el trabajo colaborativo sobre el mismo proyecto. Gestionar usuarios, grupos e incluye integración con múltiples servicios como LDAP, wikis, etc. Se habla de control de cambios a la administración de los cambios realizados sobre un repositorio. Es decir, permite visualizar quién, cuando y qué se ha modificado en todo momento. Su mayor beneficio es poder volver a versiones anteriores de código fácilmente.

Los cambios son realizados mediante Branches (ramas), estas son espacios independientes donde los desarrolladores pueden trabajar libremente sin miedo de afectación. Cada uno puede realizar los cambios en una rama y publicarla en otra, llevando los cambios de una a otra mediante una petición de Merge Request.

Las funciones de integración continua (CI), ofrecidas de forma nativa por GitLab, permiten añadir pequeñas piezas de código a una aplicación alojada en Git. Para cada *push*, se puede ejecutar una línea de scripts para probar el código antes de validar los cambios en el proyecto.

La entrega y el despliegue continuo (CD) permiten poner la aplicación en producción con cada push. El CI/CD de GitLab se configura mediante un archivo llamado *.gitlab-ci.yml* colocado en la raíz del repositorio Git, y los scripts de este archivo son ejecutados por el GitLab Runner.

## Instalación Windows

- Pre-requisito: Tener instalado Git.

GitLab en sí no puede instalarse en un servidor de Windows, pero puedes usar un denominado GitLab Runner para acceder desde Windows a una instalación ya configurada de GitLab en un servidor Linux. Este software se instala en Windows y es compatible con la funcionalidad de integración continua de GitLab (GitLab CI/CD). De esta forma, el Runner puede enviar consultas y solicitudes de trabajo a GitLab.

- [Guía instalación GitLab](https://about.gitlab.com/install/#other-official-methods)

#### Bibliografía

- [GitLab: Saber todo sobre el repositorio Git para DevOps](https://datascientest.com/es/gitlab-todo-lo-que-hay-que-saber#:~:text=%C2%BFQu%C3%A9%20es%20GitLab%3F,plataforma%20completamente%20de%20c%C3%B3digo%20abierto.)

