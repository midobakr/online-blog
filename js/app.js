const data = [{
        id: 'yt445rt',
        title: 'section1',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibu
            lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec 
            eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac 
            tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam 
            nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, 
            aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
            vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio
            sed euismod.

            Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, 
            ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus.
            Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum
            tortor mollis non.
        `
    },
    {
        id: 'erdt5yguhij',
        title: 'section2',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibu
            lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec 
            eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac 
            tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam 
            nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, 
            aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
            vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio
            sed euismod.

            Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, 
            ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus.
            Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum
            tortor mollis non.
        `
    },
    {
        id: 'sedrtfyguh',
        title: 'section3',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibu
            tortor mollis non.

            Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, 
            ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus.
            Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum
            tortor mollis non.
        `
    },
    {
        id: 'uih5467lkjh',
        title: 'section4',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibu
            lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec 
            eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac 
           
            Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, 
            ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus.
            Vestibulum fermentum
        `
    },
    {
        id: 'wedfghji',
        title: 'section5',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibu
            lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec 
            
        `
    },
] //imagined data from API


let sections = []
let activeNavElement;
let activeSection;

function createNav() {
    const navList = document.querySelector('#navList')
    const fragment = document.createDocumentFragment();
    for (item of data) {
        let element = document.createElement('li')
        element.classList.add('nav_list_element')

        let elementLink = document.createElement('a')
        elementLink.setAttribute('href', '#' + item.id)
        elementLink.textContent = item.title
        element.appendChild(elementLink)
        fragment.appendChild(element)
    }
    navList.appendChild(fragment)
    navList.addEventListener('click', clickNavItem)
}

function clickNavItem(e) {
    e.preventDefault()
    activeNavElement = e.target // get nav element which was clicked
    let sectionHeight = document.querySelector(activeNavElement.getAttribute('href')).offsetTop;
    let navHeight = document.querySelector('nav').offsetHeight;
    window.scrollTo({
        top: sectionHeight - navHeight,
        left: 0,
        behavior: 'smooth'
    });
}

function scrollSections(e) {
    document.addEventListener('scroll', (e) => {
        let pointer = window.scrollY +50 //set pointer to the half of the screen
        // let pointer = window.scrollY + window.innerHeight / 2 //set pointer to the half of the screen
        if (window.scrollY == 0) {   //remove active classes when reach the top
            if (activeNavElement) {
                activeNavElement.parentElement.classList.remove('active')
                activeSection.classList.remove('active_section')
            }
        }
        for (section of sections) {
            if (pointer > section.offsetTop && pointer < (section.offsetTop + section.offsetHeight)) { // check if pointer placed in any section
                if (activeNavElement) { // remove previous active classes
                    activeNavElement.parentElement.classList.remove('active')
                    activeSection.classList.remove('active_section')
                }
                activeSection = section;
                activeSection.classList.add('active_section')
                let activeSection_id = section.getAttribute('id')
                activeNavElement = document.querySelector(`[href='#${activeSection_id}']`) //get nav element related to this section
                activeNavElement.parentElement.classList.add('active')
            }
        }
    })
}

function crateSections() {
    const sectionContainer = document.querySelector('#sectionContainer')
    const fragment = document.createDocumentFragment();

    for (item of data) {
        let sectionElement = document.createElement('section')
        sectionElement.classList.add('section')
        sectionElement.setAttribute('id', item.id)
        
        sections.push(sectionElement)

        let titleElement = document.createElement('h1')
        titleElement.classList.add('section_title')
        titleElement.textContent = item.title
        sectionElement.appendChild(titleElement) //first child

        let contentElement = document.createElement('div')
        contentElement.classList.add('section_content')

        let contentParagraph = document.createElement('p')
        contentParagraph.textContent = item.content
        contentElement.appendChild(contentParagraph)

        sectionElement.appendChild(contentElement) //secound child

        fragment.appendChild(sectionElement)
    }
    sectionContainer.appendChild(fragment)
}


createNav()
crateSections()
scrollSections()