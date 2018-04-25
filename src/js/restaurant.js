var txtSearch = document.querySelector("#txtSearch");
console.log(txtSearch);
/* FUNCOES */

function search()
{
	var visibles = document.querySelectorAll(".visible");
	
	for(var i = 0; i < visibles.length; i++)
	{
		if( ! visibles[i].id.toLowerCase().includes(txtSearch.value.toLowerCase()) )
		{
			visibles[i].classList.remove("visible");
			visibles[i].classList.add("invisible");
		}
		else
		{
			visibles[i].classList.remove("invisible");
			visibles[i].classList.add("visible");
		}
	}
	
	var invisibles = document.querySelectorAll(".invisible");
	
	for(var i = 0; i < invisibles.length; i++)
	{
		if( ! invisibles[i].textContent.toLowerCase().includes(txtSearch.value.toLowerCase()) )
		{
			invisibles[i].classList.remove("visible");
			invisibles[i].classList.add("invisible");
		}
		else
		{
			invisibles[i].classList.remove("invisible");
			invisibles[i].classList.add("visible");
		}
	}
}

/* EXECUCAO PRINCIPAL */

if(btnSearch.length > 0)
{
	btnSearch[0].addEventListener("click", search);
}

if(txtSearch != null && txtSearch != undefined)
{
	txtSearch.addEventListener("change", search);
}

	