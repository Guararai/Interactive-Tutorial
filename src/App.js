import { useEffect, useRef } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import './App.css';

function App() {
  const driverRef = useRef(null);

  useEffect(() => {
    // Configuração do Driver
    driverRef.current = driver({
      popoverClass: 'custom-driver',
      animate: true,
      progressText: 'Passo {{current}} de {{total}}',
      doneBtnText: 'Finalizar 🎉',
      nextBtnText: 'Próximo →',
      prevBtnText: '← Voltar',
    });

    // Definir os passos do tour
    driverRef.current.setSteps([
      {
        element: '#header',
        popover: {
          title: '🎩 Cabeçalho',
          description: 'Área principal de navegação',
        }
      },
      {
        element: '#sidebar',
        popover: {
          title: '📚 Menu Lateral',
          description: 'Acesso rápido às funcionalidades',
        }
      },
      {
        element: '#main-form',
        popover: {
          title: '📝 Formulário',
          description: 'Cadastre novos itens aqui',
          side: 'left'
        }
      },
      {
        element: '#data-grid',
        popover: {
          title: '📊 Tabela',
          description: 'Visualização de dados',
          side: 'top'
        }
      }
    ]);
  }, []);

  const startTour = () => {
    driverRef.current.drive();
  };

  return (
    <div className="app-container">
      <header id="header" className="platform-header">
        <h1>Plataforma Fictícia PRO</h1>
        <button onClick={startTour} className="help-button">
          🚀 Iniciar Tour
        </button>
      </header>

      <nav id="sidebar" className="platform-sidebar">
        <h2>📋 Menu</h2>
        <ul>
          <li>🏠 Dashboard</li>
          <li>📈 Relatórios</li>
          <li>⚙️ Configurações</li>
        </ul>
      </nav>

      <main className="platform-content">
        <section id="main-form" className="form-section">
          <h2>➕ Novo Item</h2>
          <input type="text" placeholder="Nome" />
          <textarea placeholder="Descrição detalhada" />
          <button>💾 Salvar</button>
        </section>

        <section id="data-grid" className="data-section">
          <h2>🗃️ Registros</h2>
          <table>
            <thead>
              <tr>
                <th>🔖 ID</th>
                <th>📛 Nome</th>
                <th>🔄 Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>001</td><td>Projeto Alpha</td><td>✅ Ativo</td></tr>
              <tr><td>002</td><td>Projeto Beta</td><td>⏳ Pendente</td></tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;