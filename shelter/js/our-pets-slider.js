document.addEventListener("DOMContentLoaded", () => {
    let previousButton = document.querySelector('.previous-page')
    let nextPage = document.querySelector('.next-page')
    let firstPage = document.querySelector('.first-page')
    let lastPage = document.querySelector('.last-page')
    let currentPage = document.querySelector('.current-page')
    let slider = document.querySelector('.pets-list')
    let windowSize = window.innerWidth;
    let offset = 0
    let count = 0

    function disabled(elem) {
        elem.setAttribute('disabled', 'true')
    };

    function enabled(elem) {
        elem.removeAttribute('disabled')
    };

    if (windowSize <= 768) {
        nextPage.removeAttribute('disabled')
        lastPage.removeAttribute('disabled')
        nextPage.addEventListener('click', function() {
            if (windowSize <= 580) {
                offset += -270
                count++
                currentPage.textContent = count + 1
                slider.style.left = offset + "px"
                if (count > 2) {
                    disabled(nextPage)
                    disabled(lastPage)
                } else if (offset < 0) {
                    enabled(previousButton)
                    enabled(firstPage)
                }
            } else if (windowSize > 580) {
                offset += -438.32
                count++
                currentPage.textContent = count + 1
                slider.style.top = offset + "px"
                console.log(count)
                if (count > 4) {
                    disabled(nextPage)
                    disabled(lastPage)
                } else if (offset < 0) {
                    enabled(previousButton)
                    enabled(firstPage)
                }
            } 
        })
        lastPage.addEventListener('click', function() {
            if (windowSize <= 580) {
                offset += -810
                count = 3
                currentPage.textContent = count + 1
                slider.style.left = offset + "px"
                enabled(previousButton)
                enabled(firstPage)
                disabled(nextPage)
                disabled(lastPage)
            } else if (windowSize > 580) {
                offset += -2191.6
                count = 5
                currentPage.textContent = count + 1
                slider.style.top = offset + "px"
                enabled(previousButton)
                enabled(firstPage)
                disabled(nextPage)
                disabled(lastPage)
            }
        })
        previousButton.addEventListener('click', function() {
            if (windowSize <= 580) {
                offset += 270
                count--
                currentPage.textContent = count + 1
                slider.style.left = offset + "px"
                if (count < 1) {
                    disabled(previousButton)
                    disabled(firstPage)
                    currentPage.textContent = count + 1
                } else if (count < 3) {
                    enabled(nextPage)
                    enabled(lastPage)
                }
            } else if (windowSize > 580) {
                offset += 438.32
                count--
                currentPage.textContent = count + 1
                slider.style.top = offset + "px"
                if (count < 1) {
                    disabled(previousButton)
                    disabled(firstPage)
                    currentPage.textContent = count + 1
                } else if (count < 3) {
                    enabled(nextPage)
                    enabled(lastPage)
                }
            } 
        })
        firstPage.addEventListener('click', function() {
            if (windowSize <= 580) {
                offset += 810
                count = 0
                currentPage.textContent = count + 1
                slider.style.left = offset + "px"
                enabled(nextPage)
                enabled(lastPage)
                disabled(previousButton)
                disabled(firstPage)
            } else if (windowSize > 580) {
                offset += 2191.6
                count = 0
                currentPage.textContent = count + 1
                slider.style.top = offset + "px"
                enabled(nextPage)
                enabled(lastPage)
                disabled(previousButton)
                disabled(firstPage)
            }
        })
    } else if (windowSize > 768) {
        disabled(nextPage)
        disabled(lastPage)
    }

})