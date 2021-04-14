import React from 'react'

export default function ResultSearch({ show, children, onClose }) {
    const handleOnClose = (e) => {
        if (e.target.className === 'result__search_overlay') {
          onClose()
          return;
        };
      }
    return (
        <>
            {show &&
                <div className="result__search">
                    <div className="result__search_overlay" onClick={handleOnClose}>
                        <div className="result__search_content">
                            <div className="result__search_header">
                                <span>Результаты поиска</span>
                                <span className="modal_close" onClick={() => onClose()}>&times;</span>
                            </div>
                            <div className="result__search_body">
                                {children}
                            </div>
                            <div className="result__search_footer modal_footer">
                                <button type="button" className="btn btn-danger" onClick={() => onClose()}>Закрыть</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
