# Terraform

Es una herramienta de código abierto desarrollada para aumentar la automatización aprovisionando la infraestructura como código definido en archivos declarativos y gestionando todo el ciclo de vida: creación de recursos, modificación de recursos existentes y destrucción cuando ya no son necesarios. Permite crear infraestructura reproducible, es decir, puedes aprovisionar entornos de prueba y de producción consistentes con la misma configuración. Terraform utiliza un formato llamado HashiCorp Configuration Language (HCL), el cual permite definir recuros e infraestructura en ficheros de configuraión legibles y declarativos.

Terraform tiene unas particularidades interesantes como poder comprobar la configuración antes de aplicarla, con solo ejecutar un comando, *terraform plan*. De tal manera que siempre se puede corregir algo antes de ejecutar los cambios, validando que lo que está definido en el código es lo que se tenía en mente hacer.

## Ventajas

- Puede utilizarse con muchos proveedores de servicios de cloud $\rightarrow$ Una de las principales ventajas es que se puede usar con cientos de proveedores de nube. Así que, no es necesario aprender una herramienta para trabajar con cada proveedor de nube, ya sea que utilices AWS, Azure, Google Cloud Platform, etc., siempre tendrás la posibilidad de definir la infraestructura con Terraform. Es una de las razones por las que se ha convertido en la herramienta más utilizada para aprovisionar infraestructuras en la nube.
- Su lenguaje (HCL) es muy sencillo de usar, lo que facilita la implementación de infraestructura de manera mucho más ágil, con menos coste en tiempo y adaptación por parte del desarrollador.
- El estado de Terraform le permite realizar un seguimiento de los cambios de recursos a lo largo de sus implementaciones.
- Puede enviar sus configuraciones al control de versiones para colaborar de manera segura en la infraestructura.

### Características

- Archivos de configuración declarativos: Puede definir la infraestructura como código y gestionar todo el ciclo de vida. Le ayudará a crear recursos, administrar los recursos existentes y destruir los recursos que ya no necesita.
- Módulo Instalable: Puede instalar módulos de socios o comunidades automáticamente desde el registro utilizando terraform init.
- Predecir y planificar cambios: Terraforms le permite modificar la infraestructura de manera predecible y segura separando la planificación y la aplicación y utilizando dependencias mapeadas.
- Gráficos de dependencia: Puede crear fácilmente un plan de terraform y actualizar el estado utilizando gráficos de dependencia de configuración
- Administración del Estado: Asigne recursos del mundo real a configuraciones, mejore el rendimiento y realice un seguimiento de metadatos para grandes infraestructuras.
- Soporta múltiples idiomas: Puede aprovisionar infraestructura en Java, Go, C #, Python, TypeScript y otros lenguajes de programación con módulos HCL y más de 1000 proveedores de Terraform como AWS, GCP, Azure, Oracle, VMware, Datadog, etc.

#### Bibliografía

- [antonbabenko/pre-commit-terraform](https://github.com/antonbabenko/pre-commit-terraform#1-install-dependencies)
- [TFLint](https://github.com/terraform-linters/tflint) (como un SonarLint para Terraform)