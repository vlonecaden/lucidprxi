var form = document.getElementById('srchbutton');
var input = document.getElementById('srchinput');

form.addEventListener('click', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {


        if ((localStorage.getItem("proxySelect") === "ultraviolet")) {
            let url = input.value.trim();
            if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
            else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

            if ((localStorage.getItem('aboutBlankCloaking')) === 'true') {


                var urle = "https://" + document.domain + __uv$config.prefix + __uv$config.encodeUrl(url);
                win = window.open();
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                var iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.margin = '0';
                iframe.src = urle;
                console.log(iframe.src)
                win.document.body.appendChild(iframe)

            } else {
                window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
            }

        } else if ((localStorage.getItem("proxySelect") === "rhodium")) {
            let url = input.value.trim();
            if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
            else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

            if ((localStorage.getItem('aboutBlankCloaking')) === 'true') {


                var urle = "https://" + document.domain + "/rhodium/gateway?url=" + url
                win = window.open();
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                var iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.margin = '0';
                iframe.src = urle;
                console.log(iframe.src)
                win.document.body.appendChild(iframe)

            } else {
                window.location.href = "https://" + document.domain + "/rhodium/gateway?url=" + url
            }

        }



    });
});

function isUrl(val = '') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};