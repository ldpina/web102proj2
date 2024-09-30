import './App.css';

const App = () => {

  return (
    <div className="App">
      <h2>Flash Cards!</h2>
      <h4>Test your knowledge on!</h4>
      <h5>Number of Cards: </h5>
      <br/>

      <div className = "card">
        <div className = "front">
          <div className = "back"></div>

        </div>
      </div>
      <button type="next" class="nextCard">⭢</button>
    </div>
  )
}

export default App