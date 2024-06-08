import AddArticleHandler from "../../utils/add-article-handler";
import { createFormArticle } from "../templates/template";
import Swal from "sweetalert2";

const AddArticle = {
  async render() {
    return `
    <section class="add-article">
        <div class="form-container"></div>
    </section>
`;
  },

  async afterRender() {
    try {
      const formContainer = document.querySelector(".form-container");
      formContainer.innerHTML += createFormArticle();

      const addArticleForm = document.getElementById("article-form");
      addArticleForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const articleAuthor = document.getElementById("author").value;
        const articleTitle = document.getElementById("title").value;
        const articleBody = document.getElementById("body").value;
        const date = new Date().toISOString().split("T")[0];

        const articleData = {
          author: articleAuthor,
          title: articleTitle,
          content: articleBody,
          createdAt: date,
        };

        try {
          const data = await AddArticleHandler.addArticle(articleData);

          if (data && data.name) {
            AddArticleHandler.renderArticle(articleData);
          } else {
            console.error("Unexpected data format:", data);
          }
        } catch (error) {
          console.error("Error:", error);
        }

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Berhasil Menambah Artikel",
        });

        addArticleForm.reset();
      });

      const clearForm = document.getElementById("clear");
      clearForm.addEventListener("click", () => {
        document.getElementById("author").value = "";
        document.getElementById("title").value = "";
        document.getElementById("body").value = "";
      });
    } catch (error) {
      console.error("Error rendering articles:", error);
    }
  },
};

export default AddArticle;