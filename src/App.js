import React, { Component } from 'react'
import EmailEditor from 'react-email-editor'

class App extends Component {

  exportHtmls = () => {
    this.editor.exportHtml(data => {
      const { design, html } = data
      console.log('exportHtml', html)
    })
  }

  render() {

    return(
      <div>
        <div>
          <button onClick={this.exportHtmls}>Export HTML</button>
        </div>
        
        <EmailEditor
          ref={editor => this.editor = editor}
          projectId={1001}
          options={{
            appearance: {
              theme: 'dark',
              panels: {
                tools: {
                  dock: 'left'
                }
              }
            },
  
            tools: {
              button: {
                enabled: false
              },
              divider: {
                enabled: false
              },
              html: {
                enabled: false
              },
              layout: {
                enabled: false
              }
            }
          }}
        />
      </div>
    ) 
    
  }
}


export default App;