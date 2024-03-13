# Desarrollo basado en troncos (Trunk-based development)

El desarrollo basado en troncos es una práctica de control de versiones en la que los desarrolladores fusionan pequeñas actualizaciones de forma frecuente en un "tronco" o rama principal. En este enfoque, los desarrolladores trabajan directamente sobre la rama principal en lugar de crear ramas de desarrollo separadas para cada nueva funcionalidad o corrección de errores. Dado que esta práctica simplifica las fases de fusión e integración, ayuda a lograr la CI y la CD y, al mismo tiempo, aumenta la entrega de software y el rendimiento de la organización.

Se ha convertido en una práctica habitual entre los equipos de DevOps y parte del ciclo de vida de DevOps, ya que simplifica las fases de fusión e integración. De hecho, el desarrollo basado en troncos es una práctica obligatoria de la CI y la CD. Permite a los desarrolladores crear ramas de corta duración con pequeñas confirmaciones, a diferencia de otras estrategias de ramas de funciones de larga duración. A medida que la complejidad del código base y el tamaño del equipo van creciendo, el desarrollo basado en troncos ayuda a mantener el flujo de publicación de la producción.

## ¿Cómo funciona el flujo de trabajo trunk-based?

1. **Rama Principal (Trunk)**: En este flujo, la rama principal es considerada como la rama de integración. Representa la versión de desarrollo más actualizada y estable del proyecto.

2. **Commit Tempranos y Frecuentes**: Los desarrolladores realizan confirmaciones de sus cambios en la rama principal de manera temprana y frecuente, lo que permite una rápida integración de código.

3. **Pruebas Continuas**: Se implementan pruebas automatizadas para garantizar que las confirmaciones no rompan la funcionalidad existente.

4. **Integración Continua**: Todos los cambios se integran continuamente en la rama principal, lo que facilita la detección temprana de conflictos e incompatibilidades.

5. **Entrega Continua** Con las pruebas y la integración continua en su lugar, se facilita la entrega de software de manera más regular y confiable.

## Ventajas

El desarrollo basado en troncos es una práctica obligatoria para la integración continua. Si los procesos de desarrollo y pruebas están automatizados, pero los desarrolladores trabajan en ramas de función aisladas y largas que se integran con poca frecuencia en una rama compartida, no se está aprovechando todo el potencial de la integración continua.

El desarrollo basado en troncos disminuye la fricción de la integración del código. Cuando los desarrolladores terminan una tarea nueva, deben fusionar el código nuevo en la rama principal; pero no deben fusionar los cambios en el tronco hasta que hayan comprobado que los pueden compilar correctamente. Durante esta fase, pueden surgir conflictos si se han realizado modificaciones desde el inicio de la tarea nueva. En concreto, estos conflictos son cada vez más complejos a medida que los equipos de desarrollo crecen y la base de código se amplía. Esto ocurre cuando los desarrolladores crean ramas independientes que se desvían de la rama de origen y otros desarrolladores están fusionando a la vez código que se solapa. Por suerte, el modelo de desarrollo basado en troncos reduce estos conflictos.

1. Permite la integración continua del código
En el modelo de desarrollo basado en troncos hay un repositorio con un flujo constante de confirmaciones que se incorporan a la rama principal. El hecho de añadir un conjunto de pruebas automatizadas y la supervisión de la cobertura de código a este flujo de confirmaciones contribuye a una integración continua. Cuando se fusiona un código nuevo en el tronco, se ejecutan pruebas automatizadas de integración y cobertura de código para validar la calidad de dicho código.

2. Garantiza la revisión continua del código
Las rápidas y pequeñas confirmaciones del desarrollo basado en troncos convierten la revisión del código en un proceso más eficiente. Al realizar confirmaciones tempranas y frecuentes, los desarrolladores pueden obtener comentarios rápidos sobre sus cambios, lo que facilita la corrección de errores y la mejora continua (agiliza la retroalimentación).

3. Permite la publicación consecutiva de código en producción
Los equipos deben hacer fusiones a diario y con frecuencia en la rama principal. El objetivo del desarrollo por tronco es que la rama del tronco siempre tenga luz verde, de modo que siempre esté lista para la implementación con cualquier confirmación. Las pruebas automatizadas, la cobertura de código y las revisiones de código proporcionan un proyecto de desarrollo por tronco con la garantía de estar listo para hacer la implementación en producción en cualquier momento. De este modo, el equipo puede hacer implementaciones en producción con frecuencia y agilidad y fijar más objetivos para la publicación de producción diaria.

4. Menos Ramas para Administrar
A diferencia de otros flujos de trabajo como Gitflow, donde se crean múltiples ramas, el flujo trunk-based reduce la sobrecarga de administrar varias ramas.

5. Mayor Colaboración
Al trabajar en la misma rama principal, los desarrolladores están más alineados y pueden colaborar más estrechamente.

6. Entrega Más Rápida
Al eliminar la necesidad de fusionar muchas ramas, se acelera el tiempo de entrega del software.

### Conceptos clave

- Desarrollar en lotes pequeños.
- Tener tres ramas activas, o menos, en el repositorio de código de la aplicación.
- Fusionar las ramas con el tronco al menos una vez al día.
- No tener congelación de código ni fases de integración.
- Compilar rápido y ejecutar de inmediato.

### Pasos para implementar el flujo de trabajo trunk-based:

1. Educación del Equipo: Es importante que todos los miembros del equipo comprendan los principios y beneficios del flujo trunk-based y estén dispuestos a adoptar esta metodología.

2. Establecer Pruebas Automatizadas: Implementar pruebas automatizadas para garantizar que los cambios realizados no afecten negativamente la funcionalidad existente.

3. Comunicación y Colaboración: Fomentar la comunicación y la colaboración entre los miembros del equipo para garantizar una integración sin problemas y para abordar rápidamente cualquier problema que surja.

4. Integración Continua: Anima a los desarrolladores a realizar confirmaciones frecuentes y tempranas en la rama principal.

5. Monitoreo Continuo: Establece un sistema de monitoreo continuo para detectar problemas o errores lo antes posible.

6. Retroalimentación y Mejora Continu: Analiza regularmente el flujo de trabajo para identificar oportunidades de mejora y ajustar el proceso según sea necesario.

#### Bibliografía

- [¿Qué es el desarrollo basado en troncos?](https://apiumhub.com/es/tech-blog-barcelona/desarrollo-basado-en-troncos/#:~:text=El%20desarrollo%20basado%20en%20troncos%20(TBD)%20es%20un%20modelo%20de,rama%20se%20llama%20%C2%ABtronco%C2%BB.)
- [Tecnología de DevOps: Desarrollo basado en troncos]((https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development?hl=es-419#:~:text=En%20el%20desarrollo%20basado%20en%20troncos%2C%20los%20desarrolladores%20env%C3%ADan%20el,flechas%20descendentes)%20lo%20antes%20posible.)
- [Beneficios De Las Feature Toggles O Feature Flags](https://apiumhub.com/es/tech-blog-barcelona/beneficios-feature-toggles-feature-flags/)
- [Tecnología de DevOps: Desarrollo basado en troncos](https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development?hl=es-419)

## Recomendado y evaluado por LKS

- [Version Control for Multiple Agile Teams](https://www.infoq.com/articles/agile-version-control/) | 5 sobre 5 puntos
