import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [razaoSocial, setRazaoSocial] = useState('')
  const [qtdStands, setQtdStands] = useState('')
  
  //Função que coleta as informações e envia para um número de whats
  function sendMessageWhats(e) {
    //Mude a variável 
    let numeroTelefone = "5599999999999";
    let name = document.querySelector('.inputName').value;
    let email = document.querySelector('.inputEmail').value;
    let razaoSocial = document.querySelector('.inputSocial').value;
    let quantidadeStands = document.querySelector('.inputStands').value;

    /*let url = "https://wa.me/" + phoneNumber + "?text=" + "*Name :*" + name + "%0a"
    + "*Email :*" + email + "%0a" + "*razaoSocial :*" + razaoSocial + "%0a" + "*QuantidadeStands :*" + quantidadeStands + "%0a%0a";*/

    e.preventDefault();
    
    //Validação dos campos em branco do formulário
    if(name === '' || email ==='' || razaoSocial === '' || qtdStands === ''){
      alert("Há campos em branco");
    } else {

      //Base URL
      const url =
      "https://wa.me/" +
      numeroTelefone +
      "?text=" +
      `*Name :* ${name}\n*Email :* ${email}\n*Razao Social :* ${razaoSocial}\n*Quantidade Stands :* ${quantidadeStands}\n\n`;
  
      window.open(url, '_blank').focus();
    }
  }

  function validaTermos(e) {
    let checkbox = document.getElementById('checkedaco');
  
    if (!checkbox.checked) {
      alert('Você precisa concordar com os termos para continuar.');
      e.preventDefault(); 
    }
  }

  return (
    <div className="container">
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={sendMessageWhats}>

        <h2>EXEMPLO</h2>

        <input 
          className="inputName"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="inputEmail"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input 
          className="inputSocial"
          type="text"
          placeholder="Digite sua razão social"
          onChange={(e) => setRazaoSocial(e.target.value)}
          value={razaoSocial}
        />

        <input 
          className="inputStands"
          type="number"
          placeholder="Digite a quantidade de stands que queira"
          onChange={(e) => setQtdStands(e.target.value)}
          value={qtdStands}
        />

        <div className='areaConcordar'>
          <label>
            <input type='checkbox' id='checkedaco' name='concordarTermos' value={validaTermos}></input>
            Eu li e concordo com os termos de uso e política de privacidade.
          </label>
        </div>

        <input className="button" type="submit" value="Solicitar Atendimento" onClick={sendMessageWhats} />
      </form>

    </div>
  );
}

export default App;