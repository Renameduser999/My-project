$(function() {
  $("body").on("click", ".rollup", function (e) {
    const currentElement = $(e.currentTarget); // Текущий элемент
    const currentCard = currentElement.closest(".add-list"); // Ищем текущую карточку
    const currentCardDescription = currentCard.find(".text"); // У карточки - дочерний элемент с описанием
    currentCard.find(".toggle-arrow").toggleClass("toggled");
    currentCardDescription.toggle(); // Скрываем/раскрываем описание
  });
})

$(function () {
  function addnote() {
    let name = $("input").val(),
      text = $("textarea").val();

    if (name.length > 0 && text.length > 0) {
      $(".list-empty").remove();
      $(".list").append(` 
      <div class="add-list">  
        <div class="add-list-name">${name}
          <div class="delete"> 
            <img src="img/clear-button.png">
          </div>
          <div class="rollup">
            <div class="toggle-arrow"></div>
          </div>
        </div> 

      <div class="text"> ${text}</div> 
      </div>`);

      $("input").val("");
      $("textarea").val("");
    }
  }

  $("form").on("submit", function (e) {
    e.preventDefault();
    addnote();
    $(function () {
      $(".delete").click(function () {
        $(this).parent().parent().remove();
      });
    });
  });
});
