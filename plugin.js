const sirvURL = 'https://cra2ycoder.sirv.com/'

function renderOverview(id, data) {
  const parent = document.getElementById('detail-card-wrapper')

  const getCardHTMLString = x => {
    const hashTag = x.title.toLowerCase().replace(/ /g, '-')

    return `<div class="detail-card">
      <h3>${x.title}</h3>
      <div class="details-card-count">${x.count}</div>
      <div class="details-card-buttons">
        ${x.categories
          .map(y => `<a href="#/?id=${hashTag}" target="_self">${y}</a>`)
          .join('')}
      </div>
    </div>`.trim()
  }

  parent.innerHTML = data.map(x => getCardHTMLString(x)).join('')
}

function renderLogoCard(id, list = []) {
  const parent = document.getElementById(id)

  const getLogoHTMLString = data => `<div class="tech-logo">
        <div class="tech-logo-img">
          <img src="${sirvURL}/${data.url}" />
        </div>
        <div class="tech-info">${data.title}</div>
      </div>`

  parent.innerHTML = list.map(x => getLogoHTMLString(x)).join('')
}

function renderExperienceDetails(id, list) {
  const parent = document.getElementById(id)

  const getLogoHTMLString = data =>
    data.url
      ? `
    <div class="company-logo-img" id="${data.id}">
      <img src="${sirvURL}/${data.url}" />
    </div>`
      : ''

  const getBlockQuoteHTMLString = data => `
    <blockquote>
        Role: <strong>${data.role}</strong> | Duration: <strong>${data.duration}</strong> | Status: <strong>${data.status}</strong>
    </blockquote>`

  const getResponsibilitiesHTMLString = data => `
        <p>Responsibilities:</p>
        <ul>
            ${data.responsibilities.map(x => `<li>${x}</li>`).join('')}
        </ul>
    `

  const getRolesPlayedList = data => {
    const getData = (x, idx) => {
      const arrow = data.rolesPlayed.length - 1 !== idx ? '>' : ''
      return `<strong>${x}</strong> ${arrow} `
    }

    return `
      <p>Roles Played:</p>
      <div>
        ${data.rolesPlayed.map(getData).join('')}
      </div>
    `
  }

  parent.innerHTML = list
    .map(x => {
      return `
        ${getLogoHTMLString(x)}
        ${getBlockQuoteHTMLString(x)}
        ${x.rolesPlayed.length > 0 ? getRolesPlayedList(x) : ''}
        ${getResponsibilitiesHTMLString(x)}
        <hr />
    `
    })
    .join('')
}

function renderWorksGallery(id, list) {
  const parent = document.getElementById(id)

  const getImageHTMLString = url => `
  <figure>
    <img src='${sirvURL}/${url}' class='img-zoomable' />
  </figure>
  `

  parent.innerHTML = list.map(x => getImageHTMLString(x)).join('')
}

function updateExperienceDuration(currentCompany = {}) {
  const [, secondRow] = document.querySelectorAll('table tr')

  const expCell = secondRow.children[3]
  const { startDate = '', endDate = '' } = currentCompany

  const monthDiff = (dateFrom, dateTo) => {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    )
  }

  const totalMonths = monthDiff(new Date(startDate), new Date())
  const totalYears = totalMonths >= 12 ? Math.floor(totalMonths / 12) : 0
  const remainingMonths = totalMonths - totalYears * 12

  expCell.textContent = `${totalYears}yr(s) ${remainingMonths}m(s)`
}

function updateFooter() {
  const parentElement = document.getElementById('footer')
  const currentYear = new Date().getFullYear()

  parentElement.innerText = `© cra2ycoder. All rights reserved. ${currentYear}.`
}

const plugins = [
  function (hook, vm) {
    hook.ready(function () {
      renderOverview('detail-card-wrapper', overview)

      renderLogoCard('designtools', designTools)
      renderLogoCard('runtime', techStacks.runtime)
      renderLogoCard('languages', techStacks.languages)
      renderLogoCard('frameworks', techStacks.frameworks)
      renderLogoCard('libraries', techStacks.libraries)
      renderLogoCard('unittesting', techStacks.unittesting)
      renderLogoCard('docs', techStacks.docs)
      renderLogoCard('devtools', techStacks.devtools)
      renderLogoCard('packagemanagers', techStacks.packagemanagers)
      renderLogoCard('ide', businessTools.ide)
      renderLogoCard('utility', businessTools.utility)
      renderExperienceDetails('experiences-list', experience)

      renderWorksGallery('psworks', works.ps)
      renderWorksGallery('arts', works.arts)
      renderWorksGallery('sketch', works.sketch)

      updateExperienceDuration(experience[0])

      updateFooter()

      new Zooming({
        // options...
      }).listen('.img-zoomable')
    })
  },
]
