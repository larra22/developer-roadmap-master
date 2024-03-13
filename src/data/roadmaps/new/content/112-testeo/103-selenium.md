# Selenium

Selenium es una suite de herramientas de código abierto utilizada para la automatización de pruebas en aplicaciones web. Es especialmente útil para realizar pruebas funcionales en páginas web, lo que implica simular acciones del usuario y verificar si la aplicación web se comporta según lo esperado. La versión actual de Selenium está basada exclusivamente en HTML y JavaScript y permite a los desarrolladores probar y registrar las interacciones con una aplicación web y luego repetirlas las veces que se desee, de forma completamente automática.

## Componentes

Los componentes más importantes para realizar este proceso de pruebas son los siguientes:

- **Selenium Core**: El módulo del núcleo contiene la funcionalidad básica del marco de trabajo, incluyendo el JavaScriptTestRunner y la API de comandos de prueba básicos.
- **Selenium IDE**: Selenium IDE es el entorno de desarrollo del marco de pruebas, sobre el que se basa la extensión IDE para Chrome y Firefox. Es una extensión de navegador que permite la grabación y reproducción de interacciones del usuario en el navegador.
- **Selenium WebDriver**: WebDriver es la interfaz básica para simular las interacciones del usuario con cualquier navegador. Es la pieza central de Selenium y proporciona una interfaz de programación que permite interactuar con navegadores web de manera automatizada. Permite controlar y manipular acciones del navegador, como hacer clic en elementos, rellenar formularios, navegar por páginas, etc.
- **Selenium Grid**: Selenium Grid es una extensión de WebDriver, que permite la ejecución de pruebas en paralelo en múltiples servidores. De este modo, el tiempo de pruebas se reduce considerablemente y garantizar la compatibilidad en diferentes plataformas.

### Ventajas

Selenium es ampliamente utilizado en el desarrollo ágil y en equipos de control de calidad para la automatización de pruebas en aplicaciones web. Algunas de las ventajas de utilizar Selenium incluyen:

1. Automatización de pruebas cruzadas: Permite ejecutar las mismas pruebas en diferentes navegadores y sistemas operativos, asegurando la compatibilidad multiplataforma.

2. Repetición y escalabilidad: Una vez escritas las pruebas, se pueden repetir fácilmente en diferentes iteraciones del desarrollo, lo que ahorra tiempo y recursos.

3. Integración con entornos de desarrollo: Se integra bien con lenguajes de programación como Java, C#, Python, etc., lo que facilita la incorporación de pruebas en los flujos de trabajo de desarrollo existentes.

4. Feedback rápido: Al automatizar las pruebas, se pueden detectar rápidamente errores y problemas en el software, lo que permite una corrección temprana y una entrega más confiable del producto final.

En resumen, Selenium es una herramienta poderosa y ampliamente utilizada para automatizar pruebas en aplicaciones web, lo que mejora la calidad y la eficiencia del proceso de desarrollo de software.

## Conceptos clave

1. Localizadores: Cuando se automatizan pruebas con Selenium, es fundamental identificar los elementos de la página web con los que se interactuará. Para hacerlo, se utilizan localizadores, que son expresiones que permiten encontrar y acceder a elementos específicos en el DOM (Document Object Model) de la página. Los localizadores pueden ser de diferentes tipos, como ID, nombre, clase, etiqueta, etc. Es esencial comprender cómo utilizar los localizadores adecuadamente para interactuar con los elementos correctos.

2. Esperas implícitas y explícitas:Dado que la ejecución de acciones en una página web puede ser más lenta en algunos casos debido a la carga de elementos o la latencia de la red, Selenium ofrece mecanismos para manejar las esperas. Las esperas implícitas permiten que Selenium espere un tiempo determinado antes de lanzar una excepción si el elemento no está presente, mientras que las esperas explícitas permiten esperar hasta que se cumpla una determinada condición antes de continuar con la ejecución del código.

3. Interacción con ventanas emergentes y marcos: En ocasiones, las páginas web pueden contener ventanas emergentes o marcos (iframes) que requieren una interacción especial. Es importante saber cómo cambiar el foco a estas ventanas o marcos y volver al contexto principal después de completar las acciones necesarias.

4. Acciones avanzadas del usuario: Además de las interacciones básicas, Selenium permite realizar acciones más avanzadas, como arrastrar y soltar elementos, mover el mouse, presionar teclas de modificación (Ctrl, Alt, Shift), etc. Estas acciones son útiles para probar escenarios más complejos.

5. Manejo de excepciones: Cuando se automatizan pruebas, es común encontrar situaciones inesperadas, como elementos que no están presentes o interacciones que no se pueden realizar. Selenium permite manejar estas excepciones adecuadamente para evitar interrupciones en la ejecución de las pruebas.

6. Ejecución de pruebas en diferentes navegadores: Como ya se ha mencionado anteriormente, Selenium WebDriver permite la ejecución de pruebas en varios navegadores, lo que ayuda a garantizar la compatibilidad multiplataforma. Sin embargo, es esencial tener en cuenta las diferencias en el comportamiento entre los navegadores y asegurarse de que las pruebas sean estables y consistentes en todos ellos.

## Instalación

- Java: Eclipse: [Selenium – Instalación y configuración](https://www.testermoderno.com/selenium-instalacion-y-configuracion/)
- Pyhton: [Instalando Selenium en Python](https://unipython.com/instalando-selenium-python/)
