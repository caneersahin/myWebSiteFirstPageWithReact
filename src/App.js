import './App.css';
import { Icon } from 'react-icons-kit'
// import { ic_keyboard_arrow_right } from 'react-icons-kit/icomoon/ic_keyboard_arrow_right'
import {cogs} from 'react-icons-kit/icomoon/cogs'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Web sitem güncelleniyor.<i class="fas fa-heart"></i></h1>
        <div className='mb-5 ' style={{width: 60, height: 60}}>
            <Icon className='text-info ' size={'100%'} icon={cogs}/>
        </div> 
        <h3> İlgi ve anlayışınız için teşekkür ederim!</h3>
        <div >
          <h4>Caner Şahin</h4>

          <hr/>


            <i className="bi bi-laptop  text-info"></i>  Frontend Developer   <br></br>
            <i class="bi bi-telephone text-info"></i><a href="tel:+905313277914" style={{color: "white", textDecorationLine: "none"}}>  +905313277914</a> <br></br>
            <i class="bi bi-envelope-check  text-info"></i><a href = "mailto:caneersahin77@gmail.com" style={{color: "white", textDecorationLine: "none"}}>  caneersahin77@gmail.com</a>

        </div>
      </header>
    </div>
  );
}

export default App;
