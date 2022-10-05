class Tabela extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      componentes: [
        { numero: 1, disciplina: 'Sistemas Operacionais', carga: 66.7, periodo: 'Noturno' },
        { numero: 2, disciplina: 'Inglês', carga: 33.3, periodo: 'Noturno' },
        { numero: 3, disciplina: 'Laboratório de Estruturas de Dados e Programação', carga: 33.3, periodo: 'Noturno' },
        { numero: 4, disciplina: 'Introdução a Banco de Dados', carga: 66.7, periodo: 'Noturno' }
      ]
    }
  }

  renderHeader() {
    let header = Object.keys(this.state.componentes[0]).splice(1, 3);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()} <img src={"img/" + key + ".svg"} width="20px" height="20px"></img></th>
    })
  }

  renderData() {
    return this.state.componentes.map((componente, index) => {
      const { numero, disciplina, carga, periodo } = componente
      return (
        <tr key={numero}>
          <td>{disciplina}</td>
          <td>{carga}</td>
          <td>{periodo}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <>
        <div>
          <h2 id="titulo">Componentes curriculares</h2>
          <table id='dados'>
            <tbody>
              <tr>{this.renderHeader()}</tr>
              {this.renderData()}
            </tbody>
          </table>
        </div>
      </>
    )
  };
}

ReactDOM.render(<Tabela />, document.getElementById('tabela'));