var string = "https://www.google.com Sales and Product Inquiries Apple Online Store www.example.com and mail is sales@apple.store.com or info@mail.ru is a convenient place to purchase Apple products and accessories from Apple and other manufacturers. You can buy online, chat, or call +7(564)756-4-74, 7 days a week from 7:00 a.m. to 11:00 p.m. Central time. You can get information about an order you placed on the Apple Online Store through the Order Status page. If you prefer, you can also get order status or make changes by phone at +1(567)756-654-76, 7 days a week from 7:00. Address is:\n 23, Apple Park"

var regPhone = /(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/igm
console.log(string.match(regPhone))

var regEmail = /[a-zA-Z][a-zA-Z0-9\-\_\.]{2,}@[a-z][a-z\-\_\.]+[a-z]{2,10}/igm
console.log(string.match(regEmail))

var regURL = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/gm
console.log(string.match(regURL))

var regAddress = /\d+\,\s[A-z]+\s[A-z]+/gm
console.log(string.match(regAddress))


function pageScroll() {
    window.scrollBy(0,10);
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    	clearInterval(delay)
    }
}

var delay = setInterval('pageScroll()', 100)

