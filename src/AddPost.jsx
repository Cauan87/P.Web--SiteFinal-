import React from "react";
import Header from "./Header";
import "./AddPost.css";
import ImagePicker from "./ImagePicker";

function AddPost() {
    return <div>
        <Header/>
        <div className="container">
            <div className="formPost">
                <textarea> Galáxias são enormes aglomerados de estrelas, planetas, gás, poeira cósmica e matéria escura, 
                unidos pela gravidade. Existem diferentes tipos de galáxias, como espirais, elípticas e irregulares. 
                Elas variam em forma, tamanho e composição. No centro de muitas galáxias, incluindo a Via Láctea, há um 
                buraco negro supermassivo. As galáxias interagem umas com as outras, causando colisões e fusões que podem 
                alterar sua estrutura. Estudar as galáxias nos ajuda a compreender a evolução do Universo e a formação das
                estruturas cósmicas.</textarea>
                <div className="pickImage">
                    <ImagePicker/>
                </div>
                <button id="sendPost">Enviar</button>
            </div>
        </div>
    </div>
}

export default AddPost;