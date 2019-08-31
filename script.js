const controls = document.querySelectorAll(`.controls input`)

function updateChange() {
    console.log(this.id)
    console.log(this.value)
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix)
}

controls.forEach(control => control.addEventListener('change', updateChange))

controls.forEach(control => control.addEventListener('mousemove', updateChange))