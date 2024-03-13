# Kubernetes

Kubernetes es un sistema de orquestación de contenedores de código abierto que automatiza el despliegue, escalamiento y gestión de aplicaciones en contenedores. Kubernetes proporciona un marco de trabajo para gestionar aplicaciones en contenedores en distintos entornos (físicos, virtuales o en la nube).

Dispone de Kubectl, una herramienta de línea de comandos diseñada para gestionar clústeres de Kubernetes. Permite realizar una amplia gama de tareas de administración, como crear, actualizar y eliminar recursos de Kubernetes, así como también visualizar y gestionar el estado de los clústeres de Kubernetes y las aplicaciones desplegadas en ellos. Esta herramienta es fundamental para comprobar y monitorear el estado de los pods, y asegurar que los recursos de Kubernetes estén funcionando correctamente.

## Conceptos básicos

Los objetos básicos de Kubernetes son:

- Nodos: Un nodo es la unidad fundamental más pequeña de hardware informático. Representa una sola máquina en un clúster, que podría ser una máquina física en un centro de datos o una máquina virtual de un proveedor de nube. Cada máquina puede sustituir a cualquier otra máquina en un clúster de Kubernetes. El maestro en Kubernetes controla los nodos que tienen contenedores.
- Pod: Los pods son estructuras de alto nivel que envuelven uno o más contenedores. Esto se debe a que los contenedores no se ejecutan directamente en Kubernetes. Los contenedores en el mismo pod comparten una red local y los mismos recursos, lo que les permite comunicarse fácilmente con otros contenedores en el mismo pod como si estuvieran en la misma máquina y, al mismo tiempo, mantienen un grado de aislamiento.
- Servicio:  es una forma de exponer una aplicación que se ejecuta en un conjunto de pods como servicio de una red.
- Clúster de contenedores: Un clúster de contenedores es un conjunto de elementos de máquina que son nodos. Los clústeres inician rutas específicas para que los contenedores que se ejecutan en los nodos puedan comunicarse entre sí. En Kubernetes, el motor del contenedor (no el servidor de la API de Kubernetes) proporciona alojamiento para el servidor de la API.
- Volumen:  los archivos en un contenedor son efímeros. Si un Pod crashea, los datos que no estén en un volumen persistente se perderán
- Namespace:  se utilizan para dividir los recursos del clúster entre varios usuarios. Están pensados ​​para entornos en los que hay muchos usuarios repartidos entre proyectos o equipos y proporcionan una gama de recursos.
- Controladores (abstracciones de nivel superior): Los controladores son bucles de control que observan el estado del clúster y ejecutan o solicitan los cambios que sean necesarios para alcanzar el estado deseado. Incluyen:
  - ReplicaSet: su propósito es mantener un conjunto estable de réplicas de Pods ejecutándose en todo momento, asegurando de esta forma la disponibilidad de un número específico de Pods idénticos.
  - Deployment: proporciona actualizaciones declarativas para Pods y ReplicaSets.
  - StatefulSet: gestiona el despliegue y escalado de un conjunto de Pods. Además, garantiza el orden y unicidad de dichos Pods.

- *Un clúster de Kubernetes es un conjunto de máquinas de nodos que ejecutan aplicaciones en contenedores.

#### Bibliografía

- [Kubernetes: Introducción y Conceptos Clave](https://aprenderbigdata.com/kubernetes/)