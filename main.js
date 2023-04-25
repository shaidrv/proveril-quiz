import 'normalize.css'
import './style.css'

addEventListener('load', () => {
  const forms = document.querySelectorAll('.form')

  document.querySelectorAll('.form__button_next').forEach((button, idx) => {
    button.addEventListener('click', () => {
      const nextFormIndex = idx + 1
      const currentFormIndex = idx
      forms[nextFormIndex].classList.remove('hidden')
      forms[currentFormIndex].classList.add('hidden')
    })
  })

  document.querySelectorAll('.form__button_back').forEach((button, idx) => {
    button.addEventListener('click', () => {
      const prevFormIndex = idx
      const currentFormIndex = idx + 1
      forms[prevFormIndex].classList.remove('hidden')
      forms[currentFormIndex].classList.add('hidden')
    })
  })

  document.querySelectorAll('.forms__count').forEach((span) => {
    span.innerHTML = forms.length
  })

  forms.forEach((form) => {
    const btn = form.querySelector('.form__button_next')
    form.querySelectorAll('input[type=radio], select').forEach((input) => {
      input.addEventListener('change', () => {
        btn.removeAttribute('disabled')
        if (input.type === 'radio') {
          btn.click()
        }
      })
    })
  })

  document
    .querySelector('.button__large')
    .addEventListener('click', async () => {
      const data = {}
      document
        .querySelectorAll('input[type=text], input[type=radio]:checked, select')
        .forEach((input) => {
          data[input.name] = input.value
        })
      const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      alert('Успешно отправлено!')
    })
})
