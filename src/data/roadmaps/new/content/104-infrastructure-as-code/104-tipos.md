# Tipos de IaC

### Infraestructura como código inmutable 

La infraestructura como código inmutable representa un futuro simplificado, que requiere que cada componente siga unas especificaciones exactas sin variaciones. Cuando resulta necesario introducir un cambio, la infraestructura se aprovisiona  con los nuevos requisitos y la infraestructura como código antigua se sustituye. Con esta homogeneidad de la infraestructura subyacente, se pueden diseñar e implementar aplicaciones de forma mucho más rápida y estable.

En resumen, ayuda a los equipos de desarrollo a mantener una configuración de infraestructura y codificación consistente hasta el lanzamiento final de la aplicación. 

### Infraestructura como código mutable

Cuando los desarrolladores pueden cambiar el estado de IaC después del aprovisionamiento, se conoce como infraestructura mutable. Permite que el equipo de desarrollo sea más flexible. La infraestructura como código mutable debe actualizarse continuamente para poder seguir respondiendo a la evolución de las necesidades empresariales.

Si hay algún cambio repentino en el producto de software, el equipo puede realizar personalizaciones rápidas de la infraestructura de implementación. También es más fácil responder a las amenazas de seguridad cuando se usa un IaC mutable. Sin embargo, el seguimiento de la consistencia del código se vuelve complejo en tales elementos IaC. 

## Enfoques

### Enfoque declarativo

Conocido como el enfoque funcional, el declarativo define un estado deseado del sistema sin indicar cómo conseguirlo. Una vez que establezca sus requisitos, la plataforma IaC activará contenedores o máquinas virtuales (VM), instalará el software necesario, configurará el software, resolverá las interdependencias del software y del sistema, y control de versiones.  

Con este enfoque, se definen qué recursos se desean, incluidas las propiedades necesarias. El software de infraestructura como código aprovisiona automáticamente la infraestructura y siempre que se introducen cambios, una herramienta de infraestructura como código declarativa los aplica automáticamente. La infraestructura como código declarativa se puede ejecutar multitud de veces con el mismo resultado sin intervención humana.

### Enfoque imperativos

En un enfoque imperativo, se permite crear un script de automatización interno. Luego, el script aprovisiona la infraestructura paso a paso. Es decir, se debe de definer tanto la configuración de la infraestructura como la manera de conseguirlo. También conocido como el enfoque procedimental, el imperativo define los comandos necesarios para lograr una configuración específica. Dichos comandos deben ejecutarse en el orden correcto, uno a uno.

Se trata de un enfoque frágil que emplea instrucciones explícitas y que no admite actualizaciones. Si resulta necesario introducir algún cambio, una herramienta de infraestructura como código imperativa obligará a los operarios a descifrar la forma de aplicarlo.

#### Bibliografía

- [Infraestructura como código](https://www.hpe.com/es/es/what-is/infrastructure-as-code.html)