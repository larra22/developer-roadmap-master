# git merge Vs git rebase

En git existen dos formas que nos permiten unir ramas, git merge y git rebase. Ambos comandos están diseñados para integrar cambios de una rama a otra rama, simplemente lo hacen de formas muy diferentes.

| Git merge | Git rebase |
|----------|----------|
| Crea un commit de merge (o commit basura) | Cambia la base de una de las ramas, incorporando todos los commits |
| Es una operación no destructiva, evita peligros potenciales | La reorganización reescribe el historial mediante la creación de nuevos commits para cada commit en la rama original |
| | Obtiene un historial de proyecto mucho más limpio, con rebase el historial del proyecto es perfectamente lineal |
| | Puede ser potencialmente catastrófico para el flujo de trabajo de colaboración y la reorganización pierde el contexto proporcionado por un commit de combinación: no puede ver cuándo se incorporaron los cambios anteriores a la característica |

Para realizar un rebase seguro en caso de necesitarlo, se deberá seguir la regla de oro de la reorganización que es: NO usarlo nunca en ramas públicas/colaborativas.


#### Bibliografía 
- [Fusionar vs. Reorganizar](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)
- [GIT MERGE O GIT REBASE](https://www.solucionex.com/blog/git-merge-o-git-rebase)