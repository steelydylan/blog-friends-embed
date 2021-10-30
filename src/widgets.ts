import shortid from "shortid"

const isDev = process.env.NODE_ENV === "development";

const main = () => {
  const items = document.querySelectorAll(".js-blog-friends")
  const targetUrl = isDev ? 'http://localhost:3000' : 'https://blog-friends.com'
  for (const item of items) {
    const user = (item as HTMLElement).dataset.user
    const parent = item.parentElement
    const iframe = document.createElement('iframe')
    iframe.src = `${targetUrl}/users/${user}/embed`
    iframe.style.border = "none"
    iframe.style.width = "100%"
    iframe.name = `blog-friends-${shortid()}`;
    item.after(iframe)
    parent.removeChild(item)
  }
  window.addEventListener('message', function(event) {
    try {
      const data = JSON.parse(event.data)
      if (!data.isEmbed || event.origin !== targetUrl) {
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
