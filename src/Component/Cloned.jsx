import React from 'react'

function Cloned() {
  return (
    <div className='cloned'>
      <main>
        <div className="clonedproject1">
          <div className="clonedcon1">
            <div className="div1">
            <img src="data:image/png;base64,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" alt="" />
            </div>
            <div className="div2">
              <div className="para">
              <p>Spotify cloned by using html,css</p>
              </div>
              <div className="button">
                <button>GitHub</button>
              </div>
              <div className="spotifydetails">
                
              </div>

          </div>
          


          </div>

        </div>
      </main>
    </div>
  )
}

export default Cloned