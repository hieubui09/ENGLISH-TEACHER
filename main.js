function teacher() {
    //gọi API 
    $.get("https://607e5da702a23c0017e8b367.mockapi.io/list", (res)=>{
        const $ = document.querySelector.bind(document);
        const list = res.map(col => {
            return `<div class="col-md-12 col-lg-6 col-xl-4 tt ">
            <div class="card">
                <div class="bl">
                <img class="card-img-top border-bottom rounded-circle img mx-auto d-block" src="${col.avatar}" alt="Card image cap">
            </div>
                <div class="card-body">
                    <h5 class="card-title text-center"><i class="fas fa-circle font ${col.online}"></i> ${col.name}</h5>
                    <p class="card-text">${col.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${col.stats}<i class="far fa-comment-dots"></i></small>
                </div>
            </div>
        </div>`
        })
        $('.TeacherList').innerHTML = list.join("");
    })
}
teacher();