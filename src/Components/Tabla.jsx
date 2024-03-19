import React from "react";
//import "./Tabla.css"; // Asegúrate de tener un archivo Tabla.css en el mismo directorio

const ITEMS_COUNT = 95;
const DATA_COUNT = 20;

const Tabla = ({ columnas }) => {
  let counter = 1;
  let itemsCount = Math.ceil(ITEMS_COUNT / DATA_COUNT);

  const handlePagination = (index) => {
    // Implementar lógica de paginación si es necesario
  };

  return (
    <div className="card">
      <div className="table-title">
        <h2>CSS ONLY TABLE</h2>
      </div>
      <div className="button-container">
        <span>These buttons aren't working &gt;</span>
        <button className="danger" title="Delete Selected">
          <svg viewBox="0 0 448 512" width="16" title="trash-alt">
            <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
          </svg>
        </button>
        <button className="primary" title="Add New Data">
          <svg viewBox="0 0 512 512" width="16" title="plus-circle">
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
          </svg>
        </button>
      </div>
      {Array.from({ length: itemsCount }).map((_, i) => {
        const currentPage = i * DATA_COUNT;
        let dataCount = DATA_COUNT;
        let dataDisplay = ITEMS_COUNT - (i + 1) * DATA_COUNT;
        if (dataDisplay < 0) {
          dataCount = Math.abs(dataDisplay);
        }

        return (
          <div key={i} className="table-concept">
            <input
              type="radio"
              name="table_radio"
              id={`table_radio_${i}`}
              checked={i === 0}
            />
            <div className="table-display">
              Showing {currentPage + 1} to {currentPage + dataCount} of{" "}
              {ITEMS_COUNT} items
            </div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  {columnas.map((columna, index) => (
                    <th key={index}>{columna}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: dataCount }).map((_, j) => {
                  return (
                    <tr key={j}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{counter}</td>
                      {Array.from({ length: columnas.length - 1 }).map(
                        (_, k) => (
                          <td key={k}>
                            This is Item number {k + 1}-{counter}
                          </td>
                        )
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="pagination">
              <label
                htmlFor={`table_radio_${i - 1}`}
                className={i === 0 ? "disabled" : ""}
                onClick={() => handlePagination(i - 1)}
              >
                &laquo; Previous
              </label>
              {Array.from({ length: itemsCount }).map((_, j) => (
                <label
                  key={j}
                  htmlFor={`table_radio_${j}`}
                  id={`table_pager_${j}`}
                  className={i === j ? "active" : ""}
                  onClick={() => handlePagination(j)}
                >
                  {j + 1}
                </label>
              ))}
              <label
                htmlFor={`table_radio_${i + 1}`}
                className={i === itemsCount - 1 ? "disabled" : ""}
                onClick={() => handlePagination(i + 1)}
              >
                Next &raquo;
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tabla;
