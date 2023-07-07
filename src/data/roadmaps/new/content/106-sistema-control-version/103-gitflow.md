# GitFlow

### ¿Qué es Gitflow? 
Es un flujo de trabajo, un modelo alternativo de creación de ramas en Git en el que se utilizan ramas de función y varias ramas principales. Esta práctica es la recomendada por la filosofía DevOps.

### ¿En que consiste?
Con Gitflow, se crean dos ramas de larga duración (se mantendrán durante todo el proyecto): *master* (sólo contendrá código de producción) y *develop* (rama a partir de master, para el desarrollo diario), y 3 ramas perecederas: *feature* (una rama feature distinta por cada funcionalidad, una vez acaba merge a develop), *release*(aquí se testea el código de develop y se solucionan bugs) y *hotfix* (para arreglar problemas que aparezcan ya en producción).

### Reglas de cumplimiento obligatorio 
1. Las ramas feature sólo se podrán crear desde develop, y asimismo, desde feature sólo se podrá hacer merge a develop.
2. Las ramas release sólo se podrán crear desde develop y se hará merge tanto a master como a develop.
3. Las ramas hotfixs únicamente se crean desde master, pero se realizará merge tanto a develop como a master.
4. Cualquier código a introducir a master, tiene que estar en develop.

## Guía instalación

- [Flujo de trabajo de Gitflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)

## Recomendación para manejar todo

- [SourceTree](https://www.sourcetreeapp.com/)