# git stash

Gracias al comando *git stash* los cambios efectuados en el código en el que uno este trabjando en el momento se almacenan temporalmente, para, así, poder moverse entre ramas y trabajar en cualquier arreglo/necesidad que haya surgido en el momento. Con git stash, se puede regrasar más tarde y volver a aplicar los cambios realizados.

Guardar los cambios en stashes resulta práctico si se tiene que cambiar rápidamente de contexto y para realizar otra tarea, pero se esta en medio de un cambio en el código y no se tiene del todo listo para confirmar los cambios.

Normalmente, el trabajo en Git funciona así: un desarrollador hace cambios en su repositorio local, los prueba cuidadosamente y luego se envían a la rama principal. Por desgracia, el trabajo no siempre se desarrolla de forma lineal. En algunas circunstancias, es posible que se este trabajando en un sito, pero que luego sea necesario traladarse a otra rama antes de poder completar la función de la primera rama. En este caso, realizar commit no sería la opción correcta, ya que se añadirían cambios inacabados, lo que generaría mucha confusión. La solución a esto e git stash. Al ejecutar el comando, los cambios iniciados se guardarán y restaurará la rama al último commit.

Esto afecta a todos los cambios que aún no se han confirmado. Si luego se quieren revertir estos archivos, no se tienen más que recuperar de nuevo del git stash y terminar los cambios. De esta manera no se pierde ningún avance, se conserva el trabajo y al mismo tiempo se tiene la libertad de seguir trabajando con flexibilidad en otros puntos. Sin git stash, se obtendría un mensaje de error durante un git checkout o incluso se perderían los cambios importantes.

#### Bibliografía
- [git stash](https://www.atlassian.com/es/git/tutorials/saving-changes/git-stash#:~:text=El%20comando%20git%20stash%20almacena,aplicar%20los%20cambios%20m%C3%A1s%20tarde.)
- [Git stash: la útil caché de Git](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/git-stash/)