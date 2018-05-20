//代理模式
//通过包装一个对象以控制对它的访问

//以缓存代理为例
const requestResult = async function (id) {
    let requestConfig = {
        credentials: 'include',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: "cors",
        cache: "force-cache"
    };
    let url = '/service/v1/' + id;
    const response = await fetch(url, requestConfig);
    const responseJson = await response.json();
    return responseJson;
};

const proxy = {
    cache: {},
    request: async function (id) {
        if (this.cache[id]) {
            //直接取缓存内容
            return this.cache[id];
        } else {
            return requestResult(id);
        }
    }
};

proxy.request(1);
proxy.request(1);  //从缓存获取