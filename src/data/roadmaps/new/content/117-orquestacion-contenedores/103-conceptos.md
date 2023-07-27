# Conceptos clave

## ¿Qué es ClusterIP?

ClusterIP es el servicio de Kubernetes predeterminado que proporciona un servicio dentro de un clúster (sin acceso externo) al que pueden acceder otras aplicaciones dentro de su clúster.

## ¿Qué es NodePort?

El servicio NodePort es la forma más fundamental de llevar tráfico externo directamente a su servicio. Abre un puerto específico en todos los nodos y reenvía cualquier tráfico enviado a este puerto al servicio.

## ¿Qué es el LoadBalancer en Kubernetes?

El servicio LoadBalancer se utiliza para exponer servicios a Internet. Un balanceador de carga de red, por ejemplo, crea una única dirección IP que reenvía todo el tráfico a su servicio.  

## ¿Qué es un servicio headless?

Se utiliza un servicio sin cabeza para interactuar con los mecanismos de detección de servicios sin estar vinculado a un ClusterIP, lo que le permite acceder directamente a los pods sin tener que acceder a ellos a través de un proxy. Es útil cuando no se requiere equilibrio de carga ni una única IP de servicio. 

## ¿Qué es un kubelet?

El kubelet es un agente de servicio que controla y mantiene un conjunto de pods observando las especificaciones de los pods a través del servidor API de Kubernetes. Conserva el ciclo de vida del pod al garantizar que un conjunto determinado de contenedores funcione como debería. El kubelet se ejecuta en cada nodo y permite la comunicación entre los nodos maestro y esclavo.

## ¿Qué es Kubectl?

Kubectl es una CLI (interfaz de línea de comandos) que se utiliza para ejecutar comandos en clústeres de Kubernetes. Como tal, controla el administrador de clústeres de Kubernetes a través de diferentes comandos de creación y administración en el componente de Kubernetes.

## ¿Qué es el proxy de Kube?

Kube-proxy es una implementación de un equilibrador de carga y un proxy de red que se utiliza para admitir la abstracción de servicios con otras operaciones de red. Kube-proxy es responsable de dirigir el tráfico al contenedor correcto según la IP y el número de puerto de las solicitudes entrantes.