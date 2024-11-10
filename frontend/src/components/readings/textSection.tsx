import React from 'react'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

export default function TextSection ({ file }: { file: any }) {
  const [highlights, setHighlights] = React.useState<any>([])

  // Function to handle highlight creation
  const handleHighlight = (start: any, end: any) => {
    setHighlights([...highlights, { start, end }])
  }

  // Function to render highlights:
  const renderHighlights = () => {
    return highlights.map((highlight: any, index: number) => (
      <div
        key={index}
        style={{
          position: 'absolute',
          backgroundColor: 'yellow',
          left: highlight.start.x,
          top: highlight.start.y,
          width: highlight.end.x - highlight.start.x,
          height: highlight.end.y - highlight.start.y,
          zIndex: 1
        }}
      />
    ))
  }

  const handleMouseUp = () => {
    const selection = window.getSelection()
    if (selection !== null && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)
      const rect = range.getBoundingClientRect()
      const start = { x: rect.left, y: rect.top }
      const end = { x: rect.right, y: rect.bottom }
      handleHighlight(start, end)
    }
  }
  return (
    <div onMouseUp={handleMouseUp} style={{ position: 'relative' }}>
      <Document file={file}>
        <Page pageNumber={1} />
      </Document>
      {renderHighlights()}
    </div>
  )
}
