# JUnit

JUnit es un popular marco de pruebas unitarias para el lenguaje de programación **Java**. Proporciona una serie de bibliotecas y herramientas para facilitar la creación y ejecución de pruebas automatizadas en el código Java, lo que permite verificar que las funciones, métodos y componentes individuales funcionen correctamente.

## Métodos

A grandes rasgos, una clase de Test realizada para ser tratada por JUnit tiene una estructura con 4 tipos de métodos:

1. Método setUp $\rightarrow$ Se asignan valores iniciales a variables antes de la ejecución de cada test. Si sólo queremos que se inicialicen al principio una vez, el método se debe llamar "setUpClass".
2. Método tearDown $\rightarrow$ Es llamado después de cada test y puede servir para liberar recursos o similar. Igual que antes, si queremos que sólo se llame al final de la ejecución de todos los test, se debe llamar "tearDownClass".
3. Métodos Test $\rightarrow$ Contienen las pruebas concretas que vamos a realizar.
4. Métodos auxiliares.

## Anotaciones

Se trata de palabras clave que se colocan delante de los métodos definidos antes y que indican a las librerías JUnit instrucciones concretas. Las más relevantes son:

- **@RunWith** $\rightarrow$ Se le asigna una clase a la que JUnit invocará en lugar del ejecutor por defecto de JUnit.
- **@Before** $\rightarrow$ Indica que el siguiente método se debe ejecutar antes de cada test (precede al método setUp). Si tiene que preceder al método setUpClass, la notación será "@BeforeClass".
- **@After** $\rightarrow$ Indica que el siguiente método se debe ejecutar después de cada test (precede al método tearDown). Si tiene que preceder al método tearDownClass, la notación será "@AfterClass".
- **@Test** $\rightarrow$ Indicamos a Junit que se trata de un método de Test. Con esta notación colocada delante de los métodos podemos elegir el nombre libremente.
- **@Ignore** $\rightarrow$ especifica que no se debe ejecutar un método de prueba.

## Características y Funcionalidades

- **Assertions**. JUnit proporciona un conjunto de métodos de aserción que permiten verificar si un resultado esperado coincide con el resultado real de una prueba. Por ejemplo, assertEquals, assertTrue, assertFalse, etc.

- **Test Suites**. JUnit permite agrupar pruebas relacionadas en suites de pruebas, lo que facilita la ejecución de múltiples pruebas de forma conjunta.

- **Excepciones Esperadas**. JUnit permite declarar qué excepciones se espera que se lancen en ciertos casos de prueba. Si una excepción no se lanza cuando se espera, la prueba fallará.

- **Parametrización**. JUnit 4 y versiones posteriores permiten la parametrización de pruebas, lo que significa que se pueden ejecutar varias veces con diferentes valores de entrada.

JUnit es una herramienta esencial en el desarrollo de software en Java, ya que facilita la creación de pruebas unitarias efectivas y confiables. Con JUnit, puede asegurarse que el código funcione según lo previsto y detectar errores temprano en el ciclo de desarrollo.

## Instalación

- Eclipse $\rightarrow$ [instalación junit](https://developrogramming.com/testear-con-junit-5/#:~:text=Instalar%20JUnit%205%20en%20Eclipse&text=Una%20vez%20abierto%20el%20proyecto,Finish%20%2D%3E%20Apply%20and%20close.)
- IntelliJ IDEA $\rightarrow$ [instalación junit](https://www.jetbrains.com/help/idea/junit.html)
- Visual Studio Code $\rightarrow$ [instalación junit](https://code.visualstudio.com/docs/java/java-testing)

#### Bibliografía

- [Primeros pasos con JUnit 5](https://www.adictosaltrabajo.com/2016/11/24/primeros-pasos-con-junit-5/)
- [Primeros Pasos con JUnit](https://programacion.net/articulo/primeros_pasos_con_junit_265)
