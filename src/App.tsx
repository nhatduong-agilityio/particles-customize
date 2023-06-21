import { ParticlesCustomize } from '~/components/ParticlesCustomize';

function App() {
  return (
    <>
      <ParticlesCustomize />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          color: '#ffffff',
          fontSize: '34px',
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        Dark Brain
      </div>
    </>
  );
}

export default App;
