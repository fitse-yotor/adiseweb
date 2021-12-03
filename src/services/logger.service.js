import Vue from 'vue';


export function error(message) {
    Vue.$log.error(message)
}

export function info(message) {
    Vue.$log.info(message)
}