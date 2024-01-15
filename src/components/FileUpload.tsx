'use client'
import React from 'react'
import {useDropzone} from 'react-dropzone'
import {Inbox} from 'lucide-react'

const FileUpload = () => {
    const {getRootProps, getInputProps} = useDropzone({
      accept: {"application/pdf": [".pdf"]},
      maxFiles: 1,
      onDrop: (acceptedFiles) => {
        console.log(acceptedFiles)
      }
    });
  return (
    <div className='p-3 bg-white rounded-lg ml-3'>
        <div {...getRootProps({className: "flex border-dashed border-2 w-40 py-2 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 items-center text-center flex-col"})}>
            <input {...getInputProps()}/>
            <>
                <Inbox className="w-7 h-7 text-[#505946]" />
                <h1 className="mt-2 text-sm text-slate-400">Drop your PDF</h1>
            </>
        </div>
    </div>

  )

}

export default FileUpload