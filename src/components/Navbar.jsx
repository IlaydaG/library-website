import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import SearchBar from "./SearchBar.jsx";

const categories = [
  "romantik",
  "felsefi/çocuk",
  "biyografi/deneme",
  "tarih/siyasi",
  "psikolojik/roman",
  "dram/toplumsal",
  "psikolojik/klasik",
  "polisiye/gizem",
  "polisiye/toplumsal",
  "polisiye/psikolojik",
  "kişisel gelişim/psikoloji",
  "manevî/felsefi",
  "absürd/psikolojik",
  "romantik/klasik"
];

export default function AppNavbar({ onSearch }) {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="mb-4 py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="mx-auto order-1 order-lg-0 text-center fw-bold fs-2">
          📚 Kitapp
        </Navbar.Brand>

    
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-0" /> {/* Mobil Menü Düzeni*/}

        
        <div className="d-lg-none order-2">
          <Button variant="outline-light" size="sm" onClick={() => navigate("/login")}>
            Giriş Yap
          </Button>
        </div>

      
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between order-3 w-100">
          <Nav className="mx-auto d-flex flex-column flex-lg-row align-items-center gap-3 mt-3 mt-lg-0">

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Kategoriler
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {categories.map((cat, index) => (
                  <Dropdown.Item
                    key={index}
                    as={Link}
                    to={`/category/${encodeURIComponent(cat)}`}
                  >
                    {cat}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <div style={{ minWidth: "200px" }}>
              <SearchBar onSearch={onSearch} />
            </div>
          </Nav>

          
          <div className="d-none d-lg-block">
            <Button variant="outline-light" onClick={() => navigate("/login")}>
              Giriş Yap
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
