const btnSucces = document.querySelector('.btn--success')
const btnDanger = document.querySelector('.btn--danger')

function toast({
    title = '',
    message = '',
    type = 'info',
    decuration = 3000
}) {
    const main = document.querySelector('#toast')
    if (main) {
        const toast = document.createElement('div')
        toast.classList.add('toast', `toast--${type}`)

        // auto remove toast
        const autoRemoveToast = setTimeout(function() {
                main.removeChild(toast)
            }, decuration + 1000)
            // remove toast when clicked
        toast.onclick = (e) => {
            if (e.tagert = '<i class="fas fa-times"></i>') {
                main.removeChild(toast)
                clearTimeout(autoRemoveToast)
            }
        }

        //  

        const icons = {
            success: 'far fa-check-circle',
            info: 'fas fa-info',
            warning: 'fas fa-exclamation-triangle',
            error: 'fas fa-exclamation'
        }
        const delay = (decuration / 1000).toFixed(2)
        toast.style.animation = `SlideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`
        const icon = icons[type]
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast)

    }
}

btnSucces.onclick = () => {
    toast({
        title: 'Thành công',
        message: 'Message thành công',
        type: 'success',
        decuration: 5000
    })
}
btnDanger.onclick = () => {
    toast({
        title: 'Cảnh báo',
        message: 'Message cảnh báo',
        type: 'warning',
        decuration: 5000
    })
}