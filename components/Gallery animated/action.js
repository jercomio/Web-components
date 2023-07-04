// Actions for animation
const $ = (id) => document.getElementById(id)

// handleClick function
const handleClick = (value) => {
    const content = `<div class="block-inner-container">
                        <p class="block-inner-content">${value}</p>
                    </div>`

    $('btnAction').style.backgroundColor = '#000'
    $('btnAction').style.color = '#ddd'
    $('grp1').classList.add('moveBlock1')
    setTimeout(() => {
        $('grp2').classList.add('moveBlock2')
    }, 300)
    setTimeout(() => {
        $('map').classList.add('map-opened')
    }, 600)

    if ($('map').classList.contains('map-opened')) {
        $('map').innerHTML = content
    } else {
        $('map').innerHTML = ''
        setTimeout(() => {
            $('map').innerHTML = content
        }, 600)
    }
}

// handleClickBack function
const handleClickBack = () => {
    $('btnAction').style.backgroundColor = 'transparent'
    $('btnAction').style.color = '#000'
    $('map').classList.remove('map-opened')
    $('grp2').classList.add('back')
    setTimeout(() => {
        $('grp1').classList.add('back')
    }, 300)
    setTimeout(() => {
        $('grp1').classList.remove('moveBlock1', 'back')
        $('grp2').classList.remove('moveBlock2', 'back')
    }, 800)
}
