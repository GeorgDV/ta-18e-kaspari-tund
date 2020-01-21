export function notify(message) {
    alert("NOTICE ME:" + message);
}

export function yell(message) {
    alert("AAAAAAAAAAHH:" + message);
}

export default {
    notify: notify,
    yell: yell
}