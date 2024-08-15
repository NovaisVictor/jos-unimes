'use client'
import Script from 'next/script'

const MapEmbed: React.FC = () => {
  return (
    <div>
      <iframe
        width="100%"
        height="400"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&height=400&hl=en&q=R.%20Barão%20de%20Paranapiacaba,%2015%20Santos+(Unimes)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        title="Mapa"
      ></iframe>
      <Script
        src="https://embedmaps.com/google-maps-authorization/script.js?id=96b6206e88cff8d0d04fec445d343c16c2e176bd"
        strategy="lazyOnload" // Carrega o script quando a página estiver carregada
        onLoad={() => {
          console.log('Script carregado com sucesso!')
        }}
      />
    </div>
  )
}

export default MapEmbed
