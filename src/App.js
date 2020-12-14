import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List'
import { Container } from 'react-bootstrap'

function App (){
  return (
    <Container className='mt-5 mb-5'>
      <h4>Articles</h4>
      <List />
      
    </Container>
  );
}

export default App;
