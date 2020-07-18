import _ from 'lodash';

export const loginResponseController = (text) => {
    return text.text().then(res => {

        if (!text.ok) {
            if (text.status === 400) {
                return Promise.reject(res);
            }
            return Promise.reject(res);
        }
        return Promise.resolve(JSON.parse(res));
    });
};

export const getChapterComposer = (text) => {
    return text.text().then(res => {
        if (!text.ok) {
            if (text.status === 400) {
                return Promise.reject(res);
            }
            return Promise.reject(res);
        }


        let composeLessons = function(lessonArr){
            const array = [];
            _.forEach(lessonArr, function (o) {
                let obj = {
                    number: o.number,
                    name : o.name,
                    description : o.description,
                    cost : o.cost,
                    active : o.active,
                    link: o.link
                };
                array.push(obj);
            });
            return array;
        };

        let chapters = [];

        _.forEach(JSON.parse(res), (o) => {
            let obj = {
                id: o._id,
                chapterNumber : o.chapterNumber,
                chapterName : o.chapterName,
                chapterCost : o.chapterCost,
                chapterDescription : o.chapterDescription,
                chapterPreviewLink : "https://www.youtube.com/embed/" + o.chapterPreviewLink.split('=')[1],
                lessons : composeLessons(o.lessons)
            };
            chapters.push(obj);
        });

        return Promise.resolve(chapters);
    });
};
