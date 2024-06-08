const createArticleCard = (article) => {
  const truncatedContent = article.content.length > 100
    ? `${article.content.substring(0, 100)} ...`
    : article.content;
  return `
  <div class="article-item">
    <h2>${article.title}</h2>
    <p>${truncatedContent}</p>
    <a href="/#/detail/${article.id}">Baca Selengkapnya  
      <i class="fa fa-long-arrow-right"></i>
    </a>
  </div>`;
};

const createCommentItem = (comment) => `
  <div class="comment-item">
    <h4>${comment.name}</h4>
    <p>${comment.comment}</p>
    <p>${comment.date}</p>
  </div>`;

const createCommentSection = () => `
  <article class="comments-container hidden">
    <h1>Post A Comment</h1>
    <div class="commentbox">
      <img src="/images/user.png" alt="" />
      <div class="form-content">
        <h2>Comment As:</h2>
        <form action="" class="comment-form" id="comment-form">
          <input
            type="text"
            placeholder="Enter Your Name ..."
            class="user"
            id="commentatorName"
            /><br />
          <textarea
            type="text"
            placeholder="Enter Your Comment ..."
            class="usercomment"
            id="commentatorComment"
            ></textarea>
          <button type="submit" id="publish">Publish</button>
        </form>
      </div>
    </div>
    <div class="comment-list">
      <img src="/images/user.png" alt="" />
      <div class="comments-detail" id="comment-list"></div>
    </div>
  </article>`;

const crateCigaretteContentCard = (content) => `
    <div class="card">
      <img src="${content.img}" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h3>${content.name}</h3>
      </div>
    </div>                
  `;

const createDiseaseContainer = (disease) => `
  <div class="disease-container">
    <div class="disease-title">
      <h3>${disease.title}</h3>
    </div>
    <div class="disease-body">
      <p>${disease.body}</p>
    </div>
  </div>`;

const createBenefitsCard = (benefit) => `
  <div class="card-benefit">
    <div class="user-picture">
      <img src="${benefit.img}" alt="" />
    </div>
    <h3 class="benefits-title">${benefit.title}</h3>
  </div>`;

const createFormArticle = () => `
  <form action="" id="article-form">
      <h2>Buat Artikel</h2>
      <div class="form-component">
        <i class="fa fa-user" aria-hidden="true"></i>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Silahkan Masukkan Nama Author ..."
        />
      </div>
      <div class="form-component">
        <i class="fa fa-font" aria-hidden="true"></i>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Silahkan Masukkan Judul Artikel ..."
        />
      </div>
      <div class="form-component">
        <i class="fa fa-align-justify" aria-hidden="true"></i>
        <textarea
          name="body"
          id="body"
          placeholder="Silahkan Masukkan Isi Konten Artikel ..."
        ></textarea>
      </div>
      <div class="form-button">
        <button id="clear">Bersihkan Form</button>
        <button type="submit">Tambah Artikel</button>
      </div>
  </form>`;

export {
  createArticleCard,
  createCommentItem,
  createCommentSection,
  crateCigaretteContentCard,
  createDiseaseContainer,
  createBenefitsCard,
  createFormArticle,
};
