import { ParticlesCustomize } from '~/components/ParticlesCustomize';

function App() {
  return (
    <>
      <ParticlesCustomize />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 'calc((100% - 155px) / 2)',
          color: '#ffffff',
          fontSize: '34px',
          textAlign: 'center',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        Dark Brain
      </div>
    </>
  );
}

export default App;
