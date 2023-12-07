document.addEventListener("DOMContentLoaded", function() {
    fetchData();
});

function fetchData() {
    fetch('https://api.github.com/repos/yourusername/yourreponame/contents/public/cdn')
        .then(response => response.json())
        .then(data => {
            const fileLinks = data.map(file => `<a href="${file.download_url}" target="_blank">${file.name}</a>`).join('<br>');
            document.getElementById('cdnContent').innerHTML = `<h2>CDN Hierarchy</h2>${fileLinks}`;
        })
        .catch(error => console.error('Error fetching data:', error));
}
