document.addEventListener('DOMContentLoaded', () => {
    const filterSelect = document.getElementById('filter-select');
    const recursosList = document.getElementById('recursos-list');
  
    filterSelect.addEventListener('change', async (event) => {
      const filterValue = event.target.value;
      const topicId = 'your-topic-id'; // replace with actual topicId or make it dynamic if needed
  
      // Send AJAX request to the server
      const response = await fetch(`/filter-resources?topicId=${topicId}&filter=${filterValue}`);
      const filteredResources = await response.json();
        console.log('Ha pasado')
      // Update the recursosList with the filtered resources
      recursosList.innerHTML = `
        <ul class="space-y-4">
          ${filteredResources.length > 0
            ? filteredResources.map((recurso) => `
              <li class="bg-white p-4 rounded shadow hover:shadow-md transition-shadow duration-200">
                <a href="${recurso.enlaceFichero}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
                  ${recurso.titulo}
                </a>
              </li>
            `).join('')
            : '<p>No hay recursos para esta categoría</p>'
          }
        </ul>
      `;
    });
  });
  