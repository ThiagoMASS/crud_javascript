const input_nome = document.querySelector('#input-nome');
const input_quantidade = document.querySelector('#input-idade');
const input_valor = document.querySelector('#input-e-mail');
const input_descricao = document.querySelector('#input_descricao')

const input_pesquisar = document.querySelector('.pesquisar')

let valor = 0

const btn_salvar = document.querySelector('#btn-salvar');
const input_nome_edit = document.querySelector('#input-nome-edit');
const input_quantidade_edit = document.querySelector('#input-idade-edit');
const input_valor_edit = document.querySelector('#input-e-mail-edit');
const input_descricao_edit = document.querySelector('#descricao_edit')





let editedRowId = null;


// função de  apagar 

const tbody = document.querySelector('tbody')
tbody.addEventListener('click', (event) => {
   if (event.target.classList.contains('fa-trash')) {
       const row = event.target.closest('tr');
       row.parentNode.removeChild(row);
   }
});


// função de salvar 

 btn_salvar.addEventListener('click',()=>{
    
   
    if(input_nome.value == '' || input_descricao == '' || input_quantidade== '' || input_valor == ''){
       btn_salvar = false

    }
    if (!isValidNumber(input_quantidade.value, input_valor.value)) {
      alert("por favor digite somente numeros nos ultimos dois campos");
      return;  
   }

   const minLength = 8;  
   const inputValue = input_nome.value;
  if (inputValue.length < minLength) {
      
     
   alert('Digite no mínimo 8 caracteres no campo nome');
         return;
      }

    valor++
    criaTabela(valor)
   input_nome.value = '';
   input_quantidade.value = '';
   input_valor.value = '';
   input_descricao.value = '';

 })


 function isValidNumber(input,input2) {
   return /^[0-9]+$/.test(input,input2);
}





 const criaTabela = (valor1) =>{
    const tr = document.createElement('tr')
    tr.id= `${valor}`
     tr.innerHTML=`
     <th scope ="row">${valor1}</th>
     <td >${input_nome.value}</td>
     <td> ${input_descricao.value}
     <td>${input_quantidade.value}</td>
     <td>R$ ${input_valor.value}</td>              
     <td><i  onclick="deletar()"  id="deletar" class="fa-solid fa-trash"></i></td>
     <td><i onclick="editRow(${valor1})" data-bs-toggle="modal" data-bs-target="#myModal" class="fa-solid fa-pencil"></i></td>
     `
     tbody.appendChild(tr);
 }

function editRow(rowId) {
  editedRowId = rowId; 
   editedRowId
// Define editedRowId como o ID da linha atual
   const row = document.getElementById(rowId);
  const rowData = row.children; // Obtenha as células da linha
   
// Preencher campos de entrada com os dados da linha
   input_nome_edit.value = rowData[1].textContent;
   input_quantidade_edit.value = rowData[2].textContent;
   input_valor_edit.value = rowData[3].textContent;
   input_descricao_edit.value = rowData[4].textContent
}


const btn_salvar_edit = document.querySelector('#btn-salvar-edit');
btn_salvar_edit.addEventListener('click', () => {
    if (editedRowId !== null) { // Verifique se uma linha está sendo editada
      // Obtém os valores editados dos campos de entrada
        
       
const editedNome = input_nome_edit.value;
               
const editedIdade = input_quantidade_edit.value;
        
const editedEmail = input_valor_edit.value;

const editedescicao = input_descricao_edit.value

       
//Atualizar os valores das células da linha
  const editedRow = document.querySelector(`tr[id="${editedRowId}"]`);

if(editRow){

   const cells = editedRow.querySelectorAll('td');
   cells[0].textContent= editedNome
   cells[1].textContent= editedIdade
   cells[2].textContent= editedEmail
   cells[3].textContent = editedescicao
}

       
        //Redefinir o RowId editado
        editedRowId = null;

    }
});



// função de pequiar


input_pesquisar.addEventListener('keyup',()=>{
   let inputBusca = input_pesquisar.value.toLowerCase()
   let linhas = tbody.getElementsByTagName('tr')

   console.log(linhas)
   for(let posicao in linhas){
     if(true === isNaN(posicao)){
      continue
     }

     let conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase()
     if(true === conteudoDaLinha.includes(inputBusca)){
      linhas[posicao].style.display = ''
       
     }else{
      linhas[posicao].style.display = 'none'
     }
   }
})
