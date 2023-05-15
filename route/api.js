const express = require("express");

const route = express.Router();

route.post("/users", (req, res) => {
    const { fname, lname } = req.body;
    res.render("user.ejs", {
        fname, lname
    })
})

const fetch = require('isomorphic-fetch');


route.get("/ilgi_alanlarim/:name", (req, res) => {
    const pokemonName = req.params.name;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Pokémon verilerini kullanabilirsiniz
            const pokemon = {
                name: data.name,
                type: data.types[0].type.name,
                height: data.height,
                weight: data.weight,
                imageUrl: data.sprites.front_default
            };

            // Pokémon görselini almak için bir istek daha yapın
            return fetch(pokemon.imageUrl)
                .then(response => response.buffer())
                .then(imageBuffer => {
                    // Buffer'ı kullanarak görseli kaydedebilir veya başka işlemler yapabilirsiniz



                    pokemon.imageBuffer = imageBuffer;
                    res.set('Content-Type', 'image/png');
                    res.send(pokemon.imageBuffer);
                });
        })
        .catch(error => {
            console.error("Veri çekme hatası:", error);
            res.status(500).json({ error: "Veri çekme hatası" });
        });
});
module.exports = route;