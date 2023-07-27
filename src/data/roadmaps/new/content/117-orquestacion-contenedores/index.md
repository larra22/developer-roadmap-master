# Orquestación de contenedores

## ¿Qué es?

La orquestación de contenedores se refiere al manejo y automatización del ciclo de vida de una aplicación contenedorizada en ambientes dinámicos. Es ejecutada a través de un orquestador de contenedores, el cual ofrece despliegues, autoescalado, auto reparación y monitoreo. 

*La orquestación es metafórica: Al igual que un director de orquesta, la herramienta de orquestación dirige a los contenedores asegurándose que cada contenedor (como un músico) haga lo que debe hacer.*

Las herramientas de orquestación de contenedores facilitan al usuario a definir el estado deseado de un sistema.

Con las Imágenes de Contenedor, limitamos el código de la aplicación, su tiempo de ejecución y todas sus dependencias en un formato predefinido. Y, con tiempos de ejecución de contenedores como runC, containerd o rkt, podemos usar esas imágenes preempaquetadas para crear uno o más Contenedores. 