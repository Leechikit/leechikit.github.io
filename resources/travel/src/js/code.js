const code = (() => {

    const $container = $('.container');
    const $signal = $('.map .signal');
    let sectionTopList = [];

    function getData() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '../api/hokkaido.json',
                method: "get",
                dataType: "json"
            })
                .done((json) => {
                    resolve(json);
                })
                .fail((err) => {
                    reject(err);
                })
        })
    }

    function createItem(data) {
        return `<div class="section" data-signal="${data.signal}">
                    <h3><a href="${data.link}">${data.location}</a></h3>
                    <ul class="view-list">
                        ${createViewList(data.views)}
                    </ul>
                </div>`
    }

    function createViewList(arrs, max = arrs.length) {
        let content = '';
        for (let i = 0; i < max; i++) {
            let view = arrs[i];
            content += `<li class="view">
                            <div class="message">
                                <p class="name"><a href="${view.link}">${view.name}</a></p>
                                <p class="summary">${view.summary}</p>
                            </div>
                            <div class="pic">
                                <img src="${view.image}" alt="${view.name}">
                            </div>
                        </li>`;
        }
        return content;
    }

    function saveSectionTop() {
        const $section = $container.find('.section');
        $section.each((index, item) => {
            sectionTopList.push({
                top: $(item).offset().top + $(item).height() / 2,
                pos: $(item).attr('data-signal')
            })
        });
    }

    function setSignal(pos) {
        const [left, bottom] = pos.split(',');
        $signal.css({
            left,
            bottom
        })
    }

    function eventBind() {
        setSignal(sectionTopList[0].pos);
        const sectionLen = sectionTopList.length;
        $(window).on('scroll', event => {
            let scrollTop = $(window).scrollTop();
            for (let i = 0; i < sectionLen; i++) {
                let item = sectionTopList[i];
                if (scrollTop <= item.top) {
                    setSignal(item.pos);
                    break;
                }
            }
        })
    }

    function init() {
        getData()
            .then((arrs) => {
                arrs.forEach((item) => {
                    let content = createItem(item);
                    $container.append(content);
                });
                saveSectionTop();
                eventBind();
            });
    }

    return {
        init
    }
})();

export default code;