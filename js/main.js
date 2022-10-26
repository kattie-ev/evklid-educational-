// Форма поиска
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form_show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form_show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})

// Меню бургера
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-burger-menu').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active')
    document.getElementById('burger-menu').classList.toggle('burger-menu_show')
  })
})

// document.addEventListener('DOMContentLoaded', (e) => {
//   document.querySelector(".burger").addEventListener("click", function() {
// 	  this.classList.toggle("active");
//   })
// })

// Табы
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.steps-nav__btn').forEach(function(stepsBtn) {
    stepsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.step-content').forEach(function(stepContent) {
        stepContent.classList.remove('step-content_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('step-content_active')
    })
  })

  document.querySelectorAll('.steps-nav__btn').forEach(function(stepsBtn) {
    stepsBtn.addEventListener('click', function(e) {
      document.querySelectorAll('.steps-nav__btn').forEach(function(btn) {
        btn.classList.remove('steps-nav__btn_active')
        e.currentTarget.classList.add('steps-nav__btn_active')
      })
    })
  })
})