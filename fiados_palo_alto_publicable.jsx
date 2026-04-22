import React from 'react';

export default function App(){
  return (
    <div className='min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50 p-8 font-sans'>
      <div className='max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8'>
        <h1 className='text-4xl font-bold text-slate-800 mb-2'>Fiados Palo Alto</h1>
        <p className='text-slate-500 mb-8'>Proyecto listo para publicar</p>

        <div className='grid md:grid-cols-2 gap-6'>
          <div className='rounded-2xl border p-6'>
            <h2 className='text-2xl font-semibold mb-3'>✅ Ya quedó listo</h2>
            <ul className='space-y-2 text-slate-600'>
              <li>• Formato React</li>
              <li>• Compatible con Vercel</li>
              <li>• Compatible con GitHub</li>
              <li>• Puedes seguir editándolo</li>
            </ul>
          </div>

          <div className='rounded-2xl border p-6'>
            <h2 className='text-2xl font-semibold mb-3'>🚀 Tus pasos</h2>
            <ol className='space-y-2 text-slate-600 list-decimal list-inside'>
              <li>Descargar este proyecto</li>
              <li>Crear cuenta GitHub</li>
              <li>Subir carpeta</li>
              <li>Entrar a Vercel</li>
              <li>Conectar GitHub</li>
              <li>Deploy</li>
            </ol>
          </div>
        </div>

        <div className='mt-8 rounded-2xl bg-amber-50 p-5 text-amber-800'>
          En el siguiente paso te explicaré EXACTAMENTE dónde presionar para descargar y subirlo sin enredo.
        </div>
      </div>
    </div>
  )
}
