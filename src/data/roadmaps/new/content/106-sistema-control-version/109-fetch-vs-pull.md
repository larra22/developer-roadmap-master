# git fetch Vs git pull

Hay que tener claro cuando, cómo y por qué se usan los comandos. 

| Git fetch | Git pull | 
|----------|----------|
| *git fetch* sólo recupera la última información de los metadatos del original (aunque no hace ninguna transferencia de archivos, es más bien como comprobar si hay algún cambio disponible) | *git pull* actualiza la rama HEAD actual con los últimos cambios del servidor remoto | 
| No integra ningún dato nuevo en los archivos de trabajo local | Descarga nuevos datos y los integra con los archivos de trabajo actuales | 
| Los usuarios pueden ejecutar una búsqueda de Git en cualquier momento para actualizar las ramas de seguimiento remoto | Intenta fusionar los cambios remotos con los locales, pueden surgir conflictos | 

#### Bibliografía

- [Git Fetch vs Pull: ¿Cuál es la diferencia entre los comandos?](https://www.freecodecamp.org/espanol/news/git-fetch-vs-pull-cual-es-la-diferencia-entre-los-comandos-git-fetch-y-git-pull/)
- [Top 110+ DevOps Interview Questions and Answers for 2023](https://www.simplilearn.com/tutorials/devops-tutorial/devops-interview-questions)