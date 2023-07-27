# Ansible

En Ansible, las tareas automatizadas se definen en ficheros YAML
denominados ‘playbooks’, el host donde se ejecutan las tareas se
especifica en un fichero de inventario, y para personalizar el
comportamiento de las tareas se utilizan variables especificadas en
ficheros de variables. Con Ansible, es posible gestionar de manera
centralizada y automatizada la configuración de una infraestructura completa, lo que permite mejorar la eficiencia y la fiabilidad de los
procesos de DevSecOps.

Ansible es un motor de automatización de código abierto que automatiza el aprovisionamiento en la nube, la gestión de la configuración, la implementación de las aplicaciones, entre otras cosas. Está diseñado para describir cómo se interrelacionan todos sus sistemas en lugar de solo administrar un sistema a la vez. Utiliza un lenguaje muy simple (YAML, en forma de Ansible-Playbooks) que permite realizar los trabajos de automatización de una forma sencilla. Ansible funciona conectándose a sus nodos y distribuyendo pequeños programas llamados módulos, que están escritos para ser modelos de recursos del estado deseado de la máquina. Ansible ejecuta estos módulos y los elimina cuando termina.

Ansible es un software encargado de la provisión automática de software, gestión de configuraciones o despliegue de aplicaciones. Su único requisito es python y ssh, ya que utiliza esta última tecnología para que el controlador se comunique con sus nodos. Mediante un fichero yaml llamado playbook se definen todas las acciones necesarias. Además de disponer de muchas tareas predefinidas, se pueden desarrollar propias mediante módulos en python. [8]