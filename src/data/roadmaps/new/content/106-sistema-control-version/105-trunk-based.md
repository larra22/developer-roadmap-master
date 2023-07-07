# Desarrollo basado en troncos (Trunk-based)

In the trunk-based development model, all developers work on a single branch with open access to it. Often it’s simply the master branch. They commit code to it and run it. It’s super simple.

In some cases, they create short-lived feature branches. Once code on their branch compiles and passess all tests, they merge it straight to master. It ensures that development is truly continuous and prevents developers from creating merge conflicts that are difficult to resolve.

The only way to review code in such an approach is to do full source code review. Usually, lengthy discussions are limited. No one has strict control over what is being modified in the source code base—that is why it’s important to have enforceable code style in place. Developers that work in such style should be experienced so that you know they won’t lower source code quality.

Desarrolla en lotes pequeños. Uno de los factores más importantes que hacen posible el desarrollo basado en troncos son los equipos que aprenden a desarrollar en lotes pequeños. Esto requiere capacitación y asistencia organizativa para el equipo de desarrollo.
Revisa el código de forma síncrona. Como se mencionó antes, pasar a la revisión de código síncrona o, al menos, garantizar que los desarrolladores prioricen la revisión de código ayuda a garantizar que los cambios no tengan que esperar horas, o incluso días, para combinarse en el tronco.
Implementa pruebas automatizadas integrales. Asegúrate de tener un conjunto completo y significativo de pruebas de unidades automatizadas y que se ejecuten antes de cada confirmación. Por ejemplo, si usas GitHub, puedes proteger ramas para permitir solo combinaciones de solicitudes de extracción cuando se pasen todas las pruebas. En el instructivo Ejecuta compilaciones con las verificaciones de GitHub, se muestra cómo integrar las verificaciones de GitHub a Cloud Build.
Realiza una compilación rápida. El proceso de compilación y prueba debería ejecutarse en unos minutos. Si esto parece difícil de lograr, es probable que haya mejoras que se puedan implementar en la arquitectura del sistema.
Crea un grupo principal de capacitadores y mentores. El desarrollo basado en troncos es un cambio importante para muchos desarrolladores, y se puede esperar un poco de resistencia. Muchos desarrolladores no pueden pensar en trabajar de esta manera. Se recomienda buscar desarrolladores que hayan trabajado de esta manera y pedirles que capaciten a otros desarrolladores. También es importante que algunos equipos adopten un estilo de trabajo basado en troncos. Una forma de hacerlo es obtener una cantidad importante de desarrolladores con experiencia en el desarrollo basado en troncos para que al menos un equipo siga las prácticas de este tipo de desarrollo. Luego, puedes hacer que otros equipos adopten este estilo cuando estés seguro de que el equipo que sigue esta práctica tiene el rendimiento esperado.

## Conceptos clave

- Tener tres ramas activas, o menos, en el repositorio de código de la aplicación.
- Combinar las ramas con el tronco al menos una vez al día.
- No tener congelación de código ni fases de integración.

#### Bibliografía

- [Tecnología de DevOps: Desarrollo basado en troncos]((https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development?hl=es-419#:~:text=En%20el%20desarrollo%20basado%20en%20troncos%2C%20los%20desarrolladores%20env%C3%ADan%20el,flechas%20descendentes)%20lo%20antes%20posible.)