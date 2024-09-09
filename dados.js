function pesquisar()
{
  let section = document.getElementById
  ("resultados-pesquisa") 
   console.log(section)
let campoPesquisa = document.getElementById
("campo-pesquisa").value;
console.log(campoPesquisa)

if(campoPesquisa == ""){
  section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um filme</p>"
  return
}
let resultados = "";
let titulo = "";
let descricao = "";

//para cada dado dentro da lista de dados 
for (let filmes of filmesToyStory) {
    titulo = filmes.titulo.toLowerCase()
   
  if (filmes.titulo.includes(campoPesquisa) || filmes.sinopse.includes(campoPesquisa))
    {
       console.log(filmes.titulo.includes(campoPesquisa))

       campoPesquisa = campoPesquisa.toLowerCase()

    resultados += `

    <div class="item-resultado">
      <h2>
      <a href="#" target="_blank">${filmes.titulo}</a>
      </h2>
      <p class="descricao-meta">
      ${filmes.sinopse}
      ${filmes.diretor}
      ${filmes.anoDeLancamnto}
      </p>
      <a href=${filmes.link} target="_blank">Mais Informações</a>
    </div> 
    `
      }
    }
section.innerHTML = resultados
}




        
      
