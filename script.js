const container = document.getElementById("data-container")
const inputRicerca = document.getElementById("ricerca")

const datiOriginali = [
    {
        titolo: "Il figlio dell'uomo",
        artista: "René Magritte",
        anno: 1964,
        collocazione: "Collezione privata"
    },
    {
        titolo: "Gli amanti",
        artista: "René Magritte",
        anno: 1928,
        collocazione: "MoMA, New York"
    },
    {
        titolo: "Il tradimento delle immagini",
        artista: "René Magritte",
        anno: 1929,
        collocazione: "LACMA, Los Angeles"
    },
    {
        titolo: "Falso specchio",
        artista: "René Magritte",
        anno: 1928,
        collocazione: "MoMA, New York"
    },
    {
        titolo: "Golconda",
        artista: "René Magritte",
        anno: 1953,
        collocazione: "Collezione privata"
    },
    {
        titolo: "La condizione umana",
        artista: "René Magritte",
        anno: 1933,
        collocazione: "National Gallery of Art, Washington"
    },
    {
        titolo: "L'impero delle luci",
        artista: "René Magritte",
        anno: 1954,
        collocazione: "Collezione Peggy Guggenheim, Venezia"
    },
    {
        titolo: "Il castello dei Pirenei",
        artista: "René Magritte",
        anno: 1959,
        collocazione: "Israel Museum, Gerusalemme"
    },
    {
        titolo: "La Clairvoyance",
        artista: "René Magritte",
        anno: 1936,
        collocazione: "Collezione privata"
    },
    {
        titolo: "La chiave dei campi",
        artista: "René Magritte",
        anno: 1936,
        collocazione: "Collezione privata"
    },
    {
        titolo: "Il modello rosso",
        artista: "René Magritte",
        anno: 1935,
        collocazione: "Edward James Foundation, Chichester, UK"
    },
    {
        titolo: "La voce dei venti",
        artista: "René Magritte",
        anno: 1931,
        collocazione: "Collezione Peggy Guggenheim, Venezia"
    },
    {
        titolo: "Il dominio di Arnheim",
        artista: "René Magritte",
        anno: 1962,
        collocazione: "Museo Magritte, Bruxelles"
    },
    {
        titolo: "La grande famiglia",
        artista: "René Magritte",
        anno: 1963,
        collocazione: "Collezione privata"
    },
    {
        titolo: "La firma in bianco",
        artista: "René Magritte",
        anno: 1965,
        collocazione: "National Gallery of Art, Washington, D.C."
    },
    {
        titolo: "Il sorriso del diavolo",
        artista: "René Magritte",
        anno: 1966,
        collocazione: "Collezione privata"
    },
    {
        titolo: "La chiave di ghiaccio",
        artista: "René Magritte",
        anno: 1959,
        collocazione: "The Menil Collection, Houston, Texas"
    },
    {
        titolo: "La battaglia delle Argonne",
        artista: "René Magritte",
        anno: 1959,
        collocazione: "Collezione privata"
    },
    {
        titolo: "L'assassino minacciato",
        artista: "René Magritte",
        anno: 1926,
        collocazione: "MoMA, New York"
    },
    {
        titolo: "La posa incantata",
        artista: "René Magritte",
        anno: 1927,
        collocazione: "Collezione privata"
    }
]

function mostraDati(dati) {
    container.innerHTML = ""

    const tabella = document.createElement("table")
    tabella.border = "1"

    const intestazione = document.createElement("tr")
    const intestazioni = ["Titolo", "Artista", "Anno", "Collocazione"]
    intestazioni.forEach(testo => {
        const th = document.createElement("th")
        th.textContent = testo
        intestazione.appendChild(th)
    })
    tabella.appendChild(intestazione)

    dati.forEach(opera => {
        const riga = document.createElement("tr")

        Object.values(opera).forEach(valore => {
            const cella = document.createElement("td")
            cella.textContent = valore
            riga.appendChild(cella)
        })

        tabella.appendChild(riga)
    })

    container.appendChild(tabella)
}

inputRicerca.addEventListener("input", () => {
    const testo = inputRicerca.value.toLowerCase()

    const filtrati = datiOriginali.filter(opera =>
        opera.titolo.toLowerCase().includes(testo) ||
        opera.artista.toLowerCase().includes(testo) ||
        opera.collocazione.toLowerCase().includes(testo)
    )

    mostraDati(filtrati)
})

mostraDati(datiOriginali)
