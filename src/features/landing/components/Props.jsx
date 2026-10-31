import React from 'react'

const colors = {
  vanilla: '#fff8ec',
  cone: '#f6e3c3',
  chocolate: '#4a2c22',
}

// Tamaños de imgur: s = 90px, b = 160px, m = 320px, l = 640px, h = 1024px.
// Antes se usaba 's' (90px) y la imagen se estiraba hasta 150px, por eso se veía borrosa y pequeña.
// Con 'm' (320px) se ve nítida incluso en pantallas de alta resolución.
function getImageUrl(person, size = 'm') {
  return 'https://i.imgur.com/' + person.imageId + size + '.jpg'
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar rounded-circle"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      loading="lazy"
      style={{ width: size, height: size, objectFit: 'cover' }}
    />
  )
}

const people = [
  { name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' },
  { name: 'Aklilu Lemma', imageId: 'OKS67lh' },
  { name: 'Lin Lanying', imageId: '1bX5QH6' },
]

export default function Profile() {
  return (
    <main style={{ backgroundColor: colors.vanilla }}>
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {people.map((person) => (
            <div key={person.imageId} className="col-12 col-sm-6 col-lg-4">
              <article
                className="card h-100 border-0 rounded-4 shadow-sm text-center p-4"
                style={{ backgroundColor: '#fff' }}
              >
                <div className="d-flex justify-content-center mb-3">
                  <Avatar person={person} size={200} />
                </div>
                <h2 className="h5 mb-0" style={{ color: colors.chocolate }}>
                  {person.name}
                </h2>
              </article>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}