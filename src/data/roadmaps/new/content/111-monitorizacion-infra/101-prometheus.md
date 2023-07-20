# Prometheus

Prometheus es una solución de monitoreo flexible que está en desarrollo. El software almacena todos sus datos en una base de datos de tipo Time Series (TSDB) y ofrece un modelo de datos multidimensional y un poderoso lenguaje de consulta para generar informes de los recursos monitoreados.

Basicamente, Prometheus es un sistema de recolección métrica de aplicaciones y servicios para el almacenamiento en un banco de datos de serie temporal resultando muy eficiente.

Prometheus sigue una arquitectura basada en pull donde el servidor obtiene métricas periódicamente de los objetivos que está configurado para monitorear. Los objetivos pueden ser varios tipos de aplicaciones, servicios o servidores, y exponen sus métricas mediante un protocolo compatible, como HTTP, SNMP o JMX. Prometheus admite varios tipos de métricas, como contadores, indicadores, histogramas y resúmenes, y puede realizar agregaciones y cálculos complejos en ellos.

El servidor Prometheus almacena las métricas recopiladas en una base de datos de series de tiempo donde una combinación única de nombre de métrica, etiquetas y una marca de tiempo identifica cada serie de tiempo. El nombre de la métrica representa el tipo de métrica, como solicitudes HTTP, uso de CPU o uso de memoria. Las etiquetas proporcionan metadatos adicionales que se pueden usar para diferenciar entre instancias de la misma métrica, como el nombre de host del servidor, el nombre del servicio o la versión. La marca de tiempo representa la hora en que se recopiló la métrica.

## Objetivos

1. Recolección de métrias $\rightarrow$ Prometheus tiene como objetivo principal la recopilación de datos de métricas de sistemas, servicios y aplicaciones de manera eficiente y en tiempo real.
2. Almacenamiento y recuperación $\rightarrow$ La herramienta almacena las métricas en una base de datos de series de tiempo que permite una recuperación rápida y eficiente para consultas y análisis.
3. Monitoreo y alertas $\rightarrow$ Prometheus ofrece un potente sistema de alertas que notifica a los operadores cuando ciertas métricas superan umbrales predefinidos, permitiendo una reacción rápida ante problemas.

### Beneficios

1. Flexibilidad: Prometheus es altamente adaptable y puede funcionar en una gran variedad de entornos, incluidos sistemas locales y en la nube.
2. Integración: Es compatible con una amplia gama de sistemas y aplicaciones, lo que facilita su incorporación en entornos existentes.
3. Alta escalabilidad: Puede gestionar grandes volúmenes de métricas en entornos de alta carga, lo que lo hace adecuado para sistemas de gran escala.
4. Soporte para lenguajes y tecnologías: Es compatible con numerosos lenguajes de programación y tecnologías de monitoreo, lo que facilita su adopción.

### Desventajas

Configuración inicial: Configurar Prometheus correctamente puede requerir un tiempo y esfuerzo significativo debido a su amplia gama de opciones y configuraciones.
Almacenamiento a largo plazo: Aunque Prometheus es excelente para datos en tiempo real, no está diseñado para un almacenamiento a largo plazo de datos históricos, lo que puede requerir integración con otras soluciones.
### Consultas PromQL

Después de configurar Prometheus para raspar sus objetivos, se puede comenzar a consultar las métricas recopiladas utilizando PromQL. PromQL es un lenguaje de consulta flexible y potente que permite realizar varios tipos de agregaciones, filtros y cálculos en las métricas recopiladas.

Para comenzar con PromQL,  para un pimerizo dipspone en el proel navegador de expresiones de Prometheus, que proporciona una interfaz basada en web para explorar y probar las consultas de PromQL. El navegador de expresiones le permite seleccionar el nombre de la métrica, las etiquetas, el rango de tiempo y las funciones de agregación y muestra el resultado de la consulta como un gráfico o una tabla.

alertando
Prometheus admite funciones de alerta integradas que le permiten configurar y activar alertas en función de reglas y umbrales predefinidos. Para crear una alerta, debe definir un conjunto de reglas en el archivo de reglas de alerta de Prometheus, que especifica el nombre de la métrica, las etiquetas y las condiciones que activan la alerta.

Conclusión
Prometheus es un sistema de monitoreo potente y flexible que puede ayudarlo a realizar un seguimiento del estado y el rendimiento de sus aplicaciones, servidores y componentes de infraestructura. En este artículo, cubrimos los conceptos y características esenciales del monitoreo de Prometheus, incluida la arquitectura, la instalación y la configuración, las consultas de PromQL, las alertas y la integración de Grafana.

Con Prometheus, puede recopilar, almacenar y consultar métricas de varias fuentes y utilizar los resultados para obtener información sobre el comportamiento y las tendencias de sus sistemas. También puede configurar alertas y paneles que lo ayuden a detectar y responder a problemas antes de que se conviertan en problemas críticos.

Ya sea un desarrollador, operador o ingeniero de confiabilidad del sitio, Prometheus puede brindarle la visibilidad y el control que necesita para garantizar la confiabilidad y disponibilidad de sus sistemas.

#### Bibliografía

- [How to Setup Prometheus Monitoring On Kubernetes Cluster](https://devopscube.com/setup-prometheus-monitoring-on-kubernetes/)
- [Practical Introduction to Prometheus Monitoring in 2023](https://www.statuspal.io/blog/2023-2-23-practical-introduction-to-prometheus-monitoring-in-2023)