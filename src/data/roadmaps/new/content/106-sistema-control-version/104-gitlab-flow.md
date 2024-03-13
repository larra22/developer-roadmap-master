# GitLab-Flow

El flujo de trabajo GitLab Flow es una variante del flujo de trabajo Git que se enfoca en utilizar la funcionalidad y características específicas proporcionadas por GitLab para colaborar en el desarrollo de software. Es un enfoque simple y efectivo que permite a los equipos trabajar de manera colaborativa y ágil utilizando GitLab como plataforma de desarrollo.

## Ramas del repositorio

1. Main/Master branch: Representa la versión de producción del código. Es una rama protegida, lo que significa que solo se deben fusionar cambios comprobados y de alta calidad en ella.

2. Feature branches: Cuando un desarrollador trabaja en una nueva función o característica, crea una rama de características (feature branch) a partir de la rama principal. El nombre de esta rama refleja el contenido de la función que se está desarrollando.

## Desarrollo y colaboración

El desarrollador trabaja en la nueva función en su rama de características. Durante el proceso de desarrollo, puede realizar confirmaciones locales y empujar la rama a GitLab para realizar un seguimiento del progreso y permitir que otros miembros del equipo colaboren en ella.

## Creación de solicitudes de fusión (Merge Requests)

Una vez que el desarrollo en la rama de características está completo, el desarrollador crea una solicitud de fusión (Merge Request) en GitLab para fusionar los cambios en la rama principal. En esta solicitud, se describen los cambios realizados y se asignan revisores para que revisen el código.

Antes de que se apruebe una solicitud de fusión, GitLab puede ejecutar pruebas automatizadas para asegurarse de que el código cumpla con los estándares y no introduzca errores.

Una vez que se completa la revisión y todas las pruebas automatizadas pasan con éxito, la solicitud de fusión se aprueba y se fusionan los cambios en la rama principal. Después de la fusión en la rama principal, el código se considera parte de la versión de producción y se puede implementar en un entorno de producción para su uso por parte de los usuarios finales.

Después de la fusión, la rama de características puede eliminarse, ya que su contenido ahora forma parte de la rama principal. Esto ayuda a mantener el repositorio limpio y organizado.

### Ciclo continuo

El flujo de trabajo se repite con cada nueva característica o cambio que se desea agregar al proyecto.

En resumen, el GitLab Flow es un enfoque sencillo pero efectivo para el desarrollo colaborativo de software utilizando GitLab como plataforma de desarrollo. Al utilizar ramas de características, solicitudes de fusión, revisión del código y pruebas automatizadas, el equipo puede trabajar de manera organizada y asegurarse de que el código de alta calidad llegue a la rama principal antes de su despliegue en producción.

## GitFlow Vs GitLab Flow

GitFlow y GitLab Flow son dos enfoques diferentes para gestionar el flujo de trabajo y la colaboración en proyectos de desarrollo de software utilizando Git.
|| GitFlow | GitLab Flow |
|----------|----------|
|Desarrollo ramificado: Utiliza varias ramas principales para organizar el desarrollo (dos ramas principales principales: develop y master) | Simplificación del flujo: Es una variante más simple del flujo de trabajo Git. Se basa en el uso de una sola rama principal |
| El desarrollo de nuevas características se realiza en ramas de características que se crean a partir de la rama develop. Una vez que una funcionalidad está completa, se fusiona de nuevo en develop | Al igual que GitFlow, las nuevas características se desarrollan en ramas de características separadas que se crean a partir de la rama principal. Una vez completadas, se fusionan nuevamente en la rama principal |
| Ramas de lanzamiento: Antes de un lanzamiento, se crea una rama de lanzamiento a partir de develop | Sin ramas de lanzamiento ni hotfix: NO se utilizan ramas de lanzamiento o hotfix. Los cambios se prueban y se fusionan directamente en la rama principal cuando están listos para su implementación |
| Ramas de hotfix: Si se encuentran errores en producción (master), se crea una rama de hotfix a partir de master, se corrige el error y luego se fusiona tanto en master como en develop | **Énfasis en las solicitudes de fusión**. Se pone un fuerte énfasis en el uso de solicitudes de fusión (Merge Requests) para revisar y aprobar los cambios antes de su fusión en la rama principal |
| Propenso a "ramas zombie": Puede resultar en un gran número de ramas persistentes en el repositorio, lo que a veces se conoce como "ramas zombie" | Enfoque ágil: GitLab Flow es más ágil y se centra en la iteración rápida y en la entrega continua de código de alta calidad |

En resumen, GitFlow es un enfoque más estructurado y complejo que utiliza múltiples ramas principales para organizar el desarrollo, mientras que GitLab Flow es más simple y ágil, basándose en el uso de una sola rama principal y en el uso de solicitudes de fusión para gestionar los cambios.
