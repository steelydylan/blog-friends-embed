import shortid from "shortid"

const main = () => {
  const items = document.querySelectorAll(".js-blog-friends")
  for (const item of items) {
    const user = (item as HTMLElement).dataset.user
    const test = (item as HTMLElement).dataset.test
    const parent = item.parentElement
    parent.removeChild(item)
    const iframe = document.createElement('iframe')
    const targetUrl = test ? 'http://localhost:3000' : 'https://blog-friends.com'
    iframe.src = `${targetUrl}/users/${user}/embed`
    iframe.style.border = "none"
    iframe.style.width = "100%"
    iframe.name = `blog-friends-${shortid()}`;
    parent.appendChild(iframe)
  }
  window.addEventListener('message', function(event) {
    try {
      const data = JSON.parse(event.data)
      if (!data.isEmbed) {
        return
      }
      const iframe = document.querySelector(`[name="${data.name}"]`) as HTMLIFrameElement
      if (!iframe) {
        return
      }
      iframe.height = data.height
    } catch (e) {}
  }, false);
}

main()
