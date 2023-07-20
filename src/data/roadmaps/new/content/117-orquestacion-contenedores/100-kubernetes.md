# Kubernetes

Kubernetes es un sistema de orquestación de contenedores de código abierto que automatiza el despliegue, escalamiento y gestión de aplicaciones en contenedores. Kubernetes proporciona un marco de trabajo para gestionar aplicaciones en contenedores en distintos entornos (físicos, virtuales o en la nube).

Dispone de Kubectl, una herramienta de línea de comandos diseñada para gestionar clústeres de Kubernetes. Permite realizar una amplia gama de tareas de administración, como crear, actualizar y eliminar recursos de Kubernetes, así como también visualizar y gestionar el estado de los clústeres de Kubernetes y las aplicaciones desplegadas en ellos. Esta herramienta es fundamental para comprobar y monitorear el estado de los pods, y asegurar que los recursos de Kubernetes estén funcionando correctamente.

## Conceptos básicos

Los objetos básicos de Kubernetes son:

- Nodos $\rightarrow$ Máquinas que realizan las tareas solicitadas que asigna el plano de control.
- Pod $\rightarrow$ es un conjunto de uno o más contenedores implementados en un solo nodo. Son los objetos más pequeños y básicos, poseen recursos compartidos para la red y almacenamiento. Su objetivo es ejecutar una única instancia de la aplicación en el clúster*.
- Servicio $\rightarrow$  es una forma de exponer una aplicación que se ejecuta en un conjunto de pods como servicio de una red.
- Volumen $\rightarrow$  los archivos en un contenedor son efímeros. Si un Pod crashea, los datos que no estén en un volumen persistente se perderán
- Namespace $\rightarrow$  es un clúster virtual respaldado por el mismo clúster físico.
- Controladores (abstracciones de nivel superior) $\rightarrow$ Los controladores son bucles de control que observan el estado del clúster y ejecutan o solicitan los cambios que sean necesarios para alcanzar el estado deseado. Incluyen:
  - ReplicaSet $\rightarrow$ su propósito es mantener un conjunto estable de réplicas de Pods ejecutándose en todo momento, asegurando de esta forma la disponibilidad de un número específico de Pods idénticos.
  - Deployment $\rightarrow$ proporciona actualizaciones declarativas para Pods y ReplicaSets.
  - StatefulSet $\rightarrow$ gestiona el despliegue y escalado de un conjunto de Pods. Además, garantiza el orden y unicidad de dichos Pods.

Master Node: The control plane of the cluster, responsible for managing the state of the cluster, scheduling and managing workloads, and providing a centralized configuration.

Worker Nodes: These are the machines (physical or virtual) that run your applications and services. Pods are scheduled on worker nodes, and the containers within those pods run on the worker nodes.

etcd: A distributed key-value store that provides a source of truth for the cluster state and configuration. The master node communicates with etcd to ensure the desired state of the cluster is maintained.

API Server: The front-end of the master node, responsible for serving the RESTful API used by all other components to interact with the cluster.

Controller Manager: Monitors the state of the cluster and makes changes as necessary to ensure the desired state is maintained.

Scheduler: Responsible for assigning pods to worker nodes based on available resources and constraints.

Kubelet: An agent that runs on each worker node, responsible for communicating with the master node and ensuring that containers are running as expected.

Container runtime: A software that is responsible for starting, stopping, and managing the containers. The most commonly used container runtime in Kubernetes is Docker.

- *Un clúster de Kubernetes es un conjunto de máquinas de nodos que ejecutan aplicaciones en contenedores.
- *Sistema de procesamiento paralelo o distribuido. Consta de un conjunto de computadoras independientes, interconectadas entre sí, de tal manera que funcionan como un solo recurso computacional.

#### Bibliografía

- [Kubernetes: Introducción y Conceptos Clave](https://aprenderbigdata.com/kubernetes/)