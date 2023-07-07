# Kubernetes 

Con la creciente adopción de arquitecturas de microservicios, mantener y administrar todas estas aplicaciones que trabajan juntas no es tarea fácil. Aquí es donde entra en juego Kubernetes, que nos permite automatizar el despliegue de estas aplicaciones, gestionar su escalabilidad y las operaciones de mantenimiento. En definitiva, podemos controlar todo su ciclo de vida de una manera más cómoda.

Además, Kubernetes permite:
- Gestionar y asignar los recursos disponibles del sistema.
- Balancear la carga.
- Escalar los servicios y los contenedores.
- Monitorizar el estado de los contenedores.

## Conceptos básicos

Los objetos básicos de Kubernetes incluyen: x Pod: es un conjunto de uno o más contenedores implementados en un solo nodo. Son los objetos más pequeños y básicos, poseen recursos compartidos para la red y almacenamiento, y su objetivo es ejecutar una única instancia de la aplicación en el clúster.[6] x Servicio: es una forma de exponer una aplicación que se ejecuta en un conjunto de pods como servicio de una red.[7] x Volumen: los archivos en un contenedor son efímeros. Si un Pod crashea, los datos que no estén en un volumen persistente se perderán.[8] x Namespace: es un clúster virtual respaldado por el mismo clúster físico. Se denominan “espacios de nombres” (namespaces).[9] Kubernetes también cuenta con abstracciones de nivel superior llamadas Controladores. Los controladores son bucles de control que observan el estado del clúster y ejecutan o solicitan los cambios que sean necesarios para alcanzar el estado deseado. Incluyen: x ReplicaSet: su propósito es mantener un conjunto estable de réplicas de Pods ejecutándose en todo momento, asegurando de esta forma la disponibilidad de un número específico de Pods idénticos.[10] x Deployment: proporciona actualizaciones declarativas para Pods y ReplicaSets.[11] x StatefulSet: gestiona el despliegue y escalado de un conjunto de Pods. Además, garantiza el orden y unicidad de dichos Pods.

Master Node: The control plane of the cluster, responsible for managing the state of the cluster, scheduling and managing workloads, and providing a centralized configuration.

Worker Nodes: These are the machines (physical or virtual) that run your applications and services. Pods are scheduled on worker nodes, and the containers within those pods run on the worker nodes.

etcd: A distributed key-value store that provides a source of truth for the cluster state and configuration. The master node communicates with etcd to ensure the desired state of the cluster is maintained.

API Server: The front-end of the master node, responsible for serving the RESTful API used by all other components to interact with the cluster.

Controller Manager: Monitors the state of the cluster and makes changes as necessary to ensure the desired state is maintained.

Scheduler: Responsible for assigning pods to worker nodes based on available resources and constraints.

Kubelet: An agent that runs on each worker node, responsible for communicating with the master node and ensuring that containers are running as expected.

Container runtime: A software that is responsible for starting, stopping, and managing the containers. The most commonly used container runtime in Kubernetes is Docker.

#### Bibliografía

- [Kubernetes: Introducción y Conceptos Clave](https://aprenderbigdata.com/kubernetes/)