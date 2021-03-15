import React from 'react'

export function Modal({ title, children, onClose, show }) {
  const handleOnClose = (e) => {
    if (e.target.className === 'modal_overlay') {
      onClose()
      return;
    };
    return;
  }
  return (
    <>
      {show &&
        <div className="modal">
          <div className="modal_overlay" onClick={handleOnClose}>
            <div className="modal_content">
              <div className="modal_header">
                <span className="modal_title">{title}</span>
                <span className="modal_close" onClick={onClose}>&times;</span>
              </div>
              <div className="modal_body">
                {children}
              </div>
              <div className="modal_footer">
                <button onClick={onClose} className="btn btn-danger" type="button">Закрыть</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
