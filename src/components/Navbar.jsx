import { Link, NavLink } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";

export default function Navbar() {
  const {
    budgetMode,
    setBudgetMode,
    budgetLimit,
    setBudgetLimit,
    maxPrice,
    setMaxPrice,
  } = useBudget();
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Compra.com
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/Products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
            </ul>
            {budgetMode && (
              <div>
                <label for="range4" class="form-label">
                  Price range (0 - {budgetLimit}$)
                </label>
                <input
                  type="range"
                  class="form-range"
                  min="0"
                  max={maxPrice}
                  value={budgetLimit}
                  id="range4"
                  onChange={(e) => setBudgetLimit(Number(e.target.value))}
                />
                <output
                  for="range4"
                  id="rangeValue"
                  aria-hidden="true"
                ></output>
              </div>
            )}

            <button
              onClick={() => setBudgetMode(!budgetMode)}
              className="btn btn-light"
            >
              {budgetMode ? "Disattiva Budget Mode" : "Attiva Budget Mode"}
            </button>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
