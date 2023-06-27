import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc  } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import "/src/styles/AddPost.css";

const firebaseConfig = {
  apiKey: "AIzaSyCrxOh5MjNAx7AhCo877HOlr9xA0HBSc3o",
  authDomain: "astral-perceptions.firebaseapp.com",
  projectId: "astral-perceptions",
  storageBucket: "astral-perceptions.appspot.com",
  messagingSenderId: "956022700400",
  appId: "1:956022700400:web:7c90de1b30cd27ad7af7b5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

function AddPost() {
    const [postContent, setPostContent] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const inputFileRef = useRef(null);
  
    const handlePostSubmit = async (event) => {
      event.preventDefault();
  
      // Salvar o conteúdo no banco de dados
      const docRef = await addDoc(collection(db, "posts"), {
        content: postContent,
      });
  
      // Verificar se uma imagem foi selecionada
      if (selectedImage) {
        // Fazer upload da imagem para o storage do Firebase
        const imageRef = ref(storage, `images/${docRef.id}`);
        await uploadBytes(imageRef, selectedImage);
      }
  
      // Limpar os campos após salvar
      setPostContent("");
      setSelectedImage(null);
      setPreviewImage(null);
    };
  
    useEffect(() => {
      document.title = "Adicionar Postagem";
    }, []);
  
    const handleImageChange = (event) => {
      const image = event.target.files[0];
      setSelectedImage(image);
      setPreviewImage(URL.createObjectURL(image));
    };
  
    return (
      <div>
        <Header />
        <div className="container">
          <form className="formPost" onSubmit={handlePostSubmit}>
            <div id="formUp">
              <textarea
                placeholder="Galáxias são enormes aglomerados de estrelas, planetas, gás, poeira cósmica e matéria escura, unidos pela gravidade. Existem diferentes tipos de galáxias, como espirais, elípticas e irregulares. Elas variam em forma, tamanho e composição. No centro de muitas galáxias, incluindo a Via Láctea, há um buraco negro supermassivo. As galáxias interagem umas com as outras, causando colisões e fusões que podem alterar sua estrutura. Estudar as galáxias nos ajuda a compreender a evolução do Universo e a formação das estruturas cósmicas."
                rows="10"
                value={postContent}
                onChange={(event) => setPostContent(event.target.value)}
              ></textarea>
              <div className="pickImage">
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Imagem selecionada"
                  />
                )}
                <input
                  ref={inputFileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <button id="sendPost" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default AddPost;
