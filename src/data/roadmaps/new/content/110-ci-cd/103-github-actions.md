# GitHub Actions

GitHub Actions es un servicio de integración continua (CI) y entrega continua (CD) proporcionado por GitHub, una plataforma de alojamiento y colaboración para proyectos de desarrollo de software basados en Git. GitHub Actions permite a los desarrolladores automatizar el flujo de trabajo de CI/CD directamente dentro del repositorio de código, lo que facilita la construcción, pruebas y despliegue de aplicaciones de forma rápida y confiable.

Es parecido a GitLab CI con pequeñas variaciones.

## Características y Funcionalidades únicas de GitHub Actions

.github/workflows. Las acciones de GitHub se definen en archivos YAML ubicados en el directorio .github/workflows del repositorio. Estos archivos especifican los flujos de trabajo, los jobs y las tareas que se ejecutarán.

Acciones Predefinidas. GitHub Actions proporciona un conjunto de acciones predefinidas que cubren tareas comunes de CI/CD, como la construcción de código, pruebas unitarias, despliegue en entornos de prueba, entre otros.

Acciones Personalizadas. Los desarrolladores pueden crear sus propias acciones personalizadas o utilizar acciones desarrolladas por la comunidad para cubrir sus necesidades específicas.

Integración Nativa con GitHub. GitHub Actions tiene una integración nativa con el flujo de trabajo de desarrollo de GitHub, lo que facilita la automatización en respuesta a eventos como la creación de solicitudes de extracción o la creación de etiquetas.

Entornos de Ejecución Personalizados: Los flujos de trabajo pueden ejecutarse en diferentes sistemas operativos y ambientes, lo que permite simular diferentes configuraciones y garantizar la consistencia en diferentes etapas de desarrollo.

Plantillas de Flujos de Trabajo: GitHub Actions proporciona plantillas de flujos de trabajo para diferentes tipos de proyectos y lenguajes, lo que facilita la configuración inicial.

GitHub Actions también tiene carácteristicas compartidas con GitLab CI como los secretos, los registros de los pipelines, etc.

#### Bibliografía

- [Guía de inicio rápido para GitHub Actions](https://docs.github.com/es/actions/quickstart)
- [actions-cheat-sheet](https://github.com/github/actions-cheat-sheet/blob/master/actions-cheat-sheet.pdf)
- [GitHub Actions Security Best Practices cheatsheet](https://blog.gitguardian.com/github-actions-security-cheat-sheet/)
- [Github Actions Vs GitLab CI](https://nira.com/github-actions-vs-gitlab-ci/)