import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cabecalho from "./componentes/Cabecalho";
import Inicio from "./pages/Inicio";
import FavoritosProvider from "./contextos/Favoritos";
import Favoritos from "./pages/Favoritos";
import { PesquisaProvider } from "./contextos/Pesquisa";
import Informacao from "./pages/Informacao";

function AppRoutes() {
  return (
    <BrowserRouter>
    <PesquisaProvider>
      <FavoritosProvider>
        <Cabecalho/>
          <Routes>   
              <Route path="/" element={<Inicio/>}/>
              <Route path="/favoritos" element={<Favoritos/>}/>
              <Route path="/info-filme/:id" element={<Informacao/>}/>
          </Routes>
      </FavoritosProvider>
    </PesquisaProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;