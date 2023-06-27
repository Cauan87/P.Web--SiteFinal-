import React from 'react';
import '/src/styles/Post.css';

function Post() {
    return <div className='postBox'>
        <div className='postBoxUp'>
        <p>Galáxias são enormes aglomerados de estrelas, planetas, gás, poeira cósmica e matéria escura, unidos pela gravidade. Existem diferentes tipos de galáxias, como espirais, elípticas e irregulares. Elas variam em forma, tamanho e composição. No centro de muitas galáxias, incluindo a Via Láctea, há um buraco negro supermassivo. As galáxias interagem umas com as outras, causando colisões e fusões que podem alterar sua estrutura. Estudar as galáxias nos ajuda a compreender a evolução do Universo e a formação das estruturas cósmicas.</p>     
        <img className="postButton" src='src/assets/imagePost.svg'></img>
        </div>
        <button>Comentários</button>        
    </div>
}

export default Post;