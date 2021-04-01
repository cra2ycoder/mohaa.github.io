function renderOverview() {
  const parent = document.getElementById('detail-card-wrapper')

  const getCardHTMLString = data => {
    return `<div class="detail-card">
      <h3>${data.title}</h3>
      <div class="details-card-count">${data.count}</div>
      <div class="details-card-buttons">
        ${data.categories.map(x => `<button>${x}</button>`).join('')}
      </div>
    </div>`.trim()
  }

  parent.innerHTML = overview.map(x => getCardHTMLString(x)).join('')
}

function renderLogoCard(id, list) {
  const parent = document.getElementById(id)

  const getLogoHTMLString = data => {
    return `<div class="tech-logo">
        <div class="tech-logo-img">
          <img src="./assets/${data.url}" />
        </div>
        <div class="tech-info">${data.title}</div>
      </div>`
  }
  parent.innerHTML = list.map(x => getLogoHTMLString(x)).join('')
}

const plugins = [
  function (hook, vm) {
    hook.ready(function () {
      renderOverview()

      renderLogoCard('designtools', designTools)
      renderLogoCard('languages', techStacks.languages)
      renderLogoCard('frameworks', techStacks.frameworks)
      renderLogoCard('libraries', techStacks.libraries)
      renderLogoCard('unittesting', techStacks.unittesting)
      renderLogoCard('docs', techStacks.docs)
      renderLogoCard('devtools', techStacks.devtools)
      renderLogoCard('packagemanagers', techStacks.packagemanagers)
      renderLogoCard('ide', businessTools.ide)
      renderLogoCard('utility', businessTools.utility)
    })
  },
]
