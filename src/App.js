import './App.css';

function App() {
  let charCount = 0;
  let text = '';
  let dd = 0;
  const changeHandler = (t) => {
    let length = t.length;
    this.charCount = length;
    if (length > 8) {
      dd = 1;
    }
  };
  return (
    <div className='App'>
      <div>
        <textarea
          value={this.text}
          onChange={() => changeHandler(this.text)}
          placeholder='Insert Text..'
        ></textarea>

        <div>
          <p className='char-count'>Character Count: {this.charCount}</p>
        </div>
        <div>
          <button type='button' disabled={dd == 1 ? true : false}>
            Submit
          </button>
        </div>
        <div>
          <p>{this.text}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
