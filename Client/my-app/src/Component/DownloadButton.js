import React from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'
function DownloadButton(props) {
   const handleDownload = () => {
   
        axios.get("http://localhost:8000/downloadsub/646916e74f89a1148725fb48"
           ).then((res) => {
            console.log(res);
          fileDownload(res.data, 'subtitle.srt')
        })
      }
       

  return (
    <div>
        <button style={{fontSize:'large'}} className='btn btn-warning' onClick={()=>handleDownload()}>Download Subtitle</button>
    </div>
  )
}

export default DownloadButton