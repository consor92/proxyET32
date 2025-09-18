function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*youtube*") ||
        shExpMatch(url, "*openfront*") ||
        shExpMatch(url, "*steam*")) {
        return "PROXY 127.0.0.1:8080";
    }
    return "DIRECT";
}
