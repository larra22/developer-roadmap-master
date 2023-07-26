
# GitLab CI

GitLab CI es un componente integral de GitLab, una plataforma de gestión del ciclo de vida de desarrollo de software (SDLC) basada en Git. GitLab CI es una herramienta de integración continua (CI) y entrega continua (CD) que permite automatizar y gestionar el proceso de construcción, prueba y despliegue de aplicaciones directamente desde GitLab. Permite construir un pipeline completo con una sola herramienta.

## Características y Funcionalidades de GitLab CI

- **Pipelines y Jobs**. En GitLab CI, las pipelines son flujos de trabajo que definen una serie de jobs (trabajos) que se ejecutan automáticamente en respuesta a cambios en el código. Cada job puede contener tareas específicas, como construcción, pruebas o despliegue.

- **Configuración en el Repositorio**. La configuración de las pipelines se define directamente en el repositorio del proyecto, lo que permite tener el control total del flujo de CI/CD junto con el código fuente.

- **GitLab Runner**. GitLab utiliza un componente llamado GitLab Runner, que es el encargado de ejecutar los jobs definidos en las pipelines. Los runners pueden ser configurados en diferentes máquinas y sistemas operativos para realizar las tareas de construcción, pruebas y despliegue.

- **Triggers (Disparadores)**. Los disparadores son mecanismos para iniciar pipelines manualmente o mediante eventos específicos, como la creación de una etiqueta o una solicitud de fusión.

- **.gitlab-ci.yml**. Es un archivo de configuración en formato YAML ubicado en el directorio raíz del repositorio. Define las pipelines y jobs que se ejecutarán en respuesta a los cambios en el código.

- **Reglas (Rules).** Las reglas se utilizan en .gitlab-ci.yml para definir qué jobs se ejecutan y bajo qué condiciones. Permiten establecer condiciones específicas para activar ciertos jobs.

- **Etiqueta (Tag)**. Una etiqueta en GitLab CI es una cadena identificadora asociada a un runner. Se utiliza para identificar qué runners deben ejecutar determinados jobs.

- **Multi-Runner**. GitLab CI permite ejecutar múltiples pipelines simultáneamente, lo que facilita el paralelismo en el proceso de CI/CD y agiliza la entrega.

- **Reportes y Estadísticas**. Proporciona reportes detallados y estadísticas sobre el estado y el rendimiento de las pipelines y los jobs, lo que facilita la detección de problemas y la toma de decisiones.

- **Variables de Entorno**. Permite configurar variables de entorno en las pipelines, lo que posibilita la personalización de los despliegues para diferentes entornos (desarrollo, pruebas, producción).

## Más a fondo: Conceptos clave

- **Runners Específicos y Shared Runners**. GitLab CI permite configurar runners específicos para proyectos individuales o utilizar shared runners compartidos entre varios proyectos. Los shared runners son proporcionados por GitLab y permiten optimizar el uso de recursos al ejecutar varios proyectos en el mismo runner.

- **Variables Protegidas (Protected Variables)**. Algunas variables de entorno pueden contener información sensible, como credenciales o contraseñas. GitLab CI permite definir variables protegidas que no se muestran en los registros de los jobs para proteger información confidencial.

- **Secrets**. GitLab CI proporciona una forma segura de almacenar y acceder a secretos, como claves de API, tokens y contraseñas, que pueden ser utilizados en las pipelines sin exponerlos en el archivo .gitlab-ci.yml.

- **Despliegue Incremental**. GitLab CI permite realizar despliegues incrementales, lo que significa que solo se despliegan los componentes que han cambiado en lugar de todo el código. Esto acelera los tiempos de despliegue y reduce el riesgo de errores.

- **Despliegue Continuo**. GitLab CI facilita la entrega continua al permitir el despliegue automático del código probado en producción o en otros entornos, según las configuraciones definidas.

- **Docker Integration**. GitLab CI se integra estrechamente con Docker, lo que permite utilizar contenedores para crear un entorno de ejecución consistente para las pruebas y despliegues.

- **Integración con Kubernetes**. GitLab CI tiene una integración nativa con Kubernetes, lo que permite desplegar aplicaciones en clústeres de Kubernetes y gestionarlos directamente desde la interfaz de GitLab.

- **Docker-in-Docker (DinD) Support**. GitLab CI es compatible con Docker-in-Docker, lo que permite a los runners crear y ejecutar contenedores Docker durante las tareas de CI/CD.

- **Registros y Visualización de Pipelines**. GitLab CI proporciona registros detallados de cada job y pipeline, lo que facilita la visualización y solución de problemas durante el proceso de CI/CD.

- **Validación de Configuración**. GitLab CI ofrece herramientas de validación para .gitlab-ci.yml, lo que ayuda a evitar errores de sintaxis y configuración.

Amplia Comunidad: GitLab CI cuenta con una comunidad activa y en crecimiento, lo que significa que hay una gran cantidad de 

GitLab CI es una poderosa herramienta que forma parte integral del ecosistema de GitLab, brindando capacidades de CI/CD altamente flexibles y automatizadas. Con su enfoque en la automatización, seguridad y colaboración, GitLab CI es una solución completa para la integración y entrega continua, ofreciendo una integración nativa con el repositorio de código, una configuración sencilla, ejecución de pipelines paralelos y una integración sólida con el ecosistema de GitLab.

#### Bibliografía

- [Caso práctico GitLab CI/CD](https://www.icm.es/2020/07/17/caso-practico-gitlab-ci-cd/)
- [Primeros pasos con GitLab CI](https://www.adictosaltrabajo.com/2018/04/10/primeros-pasos-con-gitlab-ci/)
- [Cómo configurar GitLab CI con Pipeline: Guía paso a paso](https://blog.danieljsaldana.dev/como-configurar-gitlab-ci-con-pipeline-guia-paso-a-paso/)
- [Introducción a CI/CD con GitLab](https://alexmarket.medium.com/introducci%C3%B3n-a-ci-cd-con-gitlab-23d4e9cc6482)