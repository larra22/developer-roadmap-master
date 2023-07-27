# Cucumber

Cucumber es una herramienta de código abierto que se utiliza en el desarrollo de software para admitir la escritura de pruebas automatizadas en un formato legible por humanos, conocido como lenguaje Gherkin. El objetivo principal de Cucumber es mejorar la colaboración entre los miembros del equipo de desarrollo y las partes interesadas no técnicas.

Las pruebas escritas en Cucumber están diseñadas para ser entendidas por cualquier persona, no solo por los desarrolladores o especialistas en pruebas, lo que facilita la comunicación y la participación de todos los miembros del equipo en el proceso de pruebas. Cucumber se utiliza comúnmente en conjunto con Selenium para automatizar pruebas funcionales de aplicaciones web, aunque también puede ser utilizado con otros marcos de automatización de pruebas.

## BDD en metodologías ágiles

Esta estrategia encaja bien en las metodologías ágiles, ya que generalmente en ellas se especifican los requerimientos como historias de usuario. Estas historias de usuario deberán tener sus criterios de aceptación, y de ahí se desprenden pruebas de aceptación, las cuales pueden ser escritas directamente en lenguaje Gherkin.

### BDD y testeabiliidad

El enfoque BDD favorece la testeabilidad del sistema. La mejor forma de hacer funcionar este esquema es con una arquitectura del estilo de microservicios, que permita agregar y trabajar una funcionalidad por todas sus capas en forma independiente. Este esquema facilita las pruebas, entonces mejora la testeabilidad.

### BDD para automatizar pruebas

El lenguaje Gherkin es simplemente texto con algunas palabras clave y algo de estructura, que luego hay herramientas como Cucumber, que permiten implementar una capa de conexión entre esa especificación de prueba y la interfaz del sistema que se quiere probar, pudiendo así utilizar eso como los pasos de una prueba automatizada.

*Para practicar un poco, existe un plugin de Google Chrome llamado Tidy Gherkin. Uno puede escribir las features en el campo de texto de arriba, y muestra cómo es el código necesario para ejecutar esos pasos en distintos lenguajes (Java, Ruby y JavaScript).*

## Gherkin

Gherkin es un lenguaje común, que lo puede escribir alguien sin conocimientos en programación, pero que lo puede comprender también un programa, de forma tal de utilizarlo como especificación de pruebas.

Típicamente, estas pruebas se van a guardar en archivos “.feature”, los cuales deberían estar versionados junto al código fuente del sistema que se está probando.

### Conceptos clave

- Características (Feature files) $\rightarrow$ Son archivos que contienen los escenarios de prueba escritos en Gherkin. Cada archivo de característica representa una funcionalidad o característica específica de la aplicación. Los escenarios dentro del archivo de características se ejecutan como pruebas de aceptación.

- Pasos de prueba (Step Definitions) $\rightarrow$ Son fragmentos de código escritos en lenguajes de programación como Java, Ruby, JavaScript, etc., que vinculan los pasos de los escenarios en el archivo de características con la implementación de las pruebas. Estos pasos se encargan de ejecutar las acciones y comprobar los resultados esperados.

- Informes $\rightarrow$ Cucumber proporciona informes detallados sobre la ejecución de las pruebas, lo que facilita el seguimiento y la comprensión de los resultados de las pruebas.

- Scenario Outline $\rightarrow$ Cucumber permite la reutilización de escenarios mediante el uso de Scenario Outlines. Un Scenario Outline es una plantilla que se puede llenar con datos diferentes para ejecutar el mismo escenario varias veces con diferentes conjuntos de datos. Se utiliza la palabra clave "Scenario Outline" en lugar de "Scenario" y se definen parámetros entre corchetes {} en los pasos del escenario.

- Hooks $\rightarrow$ Los Hooks en Cucumber son métodos que se ejecutan antes o después de cada escenario o conjunto de escenarios. Permiten configurar y preparar el entorno antes de que se ejecuten las pruebas y limpiar o realizar acciones posteriores a la prueba. Los Hooks son útiles para inicializar datos, establecer conexiones con bases de datos o servicios, cerrar sesiones y otras tareas de configuración.

- Tags $\rightarrow$ Los Tags son etiquetas que se pueden agregar a los escenarios o conjuntos de escenarios en el archivo de características. Permiten agrupar y organizar las pruebas para que se puedan ejecutar selectivamente utilizando filtros de tags. Los Tags son útiles para categorizar las pruebas y permiten ejecutar un subconjunto específico de pruebas según las necesidades.

- Step Argument Transformations $\rightarrow$ Es una funcionalidad avanzada de Cucumber que permite convertir automáticamente argumentos de pasos en objetos con tipos específicos. Esto es útil cuando se necesitan datos en un formato particular para realizar acciones en las pruebas.

- Hooks con Etiquetas $\rightarrow$ Cucumber también permite utilizar Hooks específicos para ciertas etiquetas. Esto permite ejecutar acciones antes o después de escenarios específicos que tengan ciertas etiquetas, lo que brinda mayor flexibilidad en la configuración y limpieza de pruebas según las necesidades.

## Estructura básica

La estructura básica de un archivo de característica (Feature file) en Cucumber se ve así:

Feature: Descripción de la funcionalidad a probar

  Scenario: Nombre del escenario
    Given paso inicial
    When paso de acción
    Then paso de verificación

## Instalación

- Guía oficial gran variedad de lenguajes $\rightarrow$ [Instalación cucumber](https://cucumber.io/docs/installation/)

### Cheatsheet

- [cucumber_cheatsheet.markdown](https://gist.github.com/yuriiik/5728701)