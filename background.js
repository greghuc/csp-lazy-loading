const iframeHosts = [
    'example.com',
];
chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: iframeHosts.map((h, i) => i + 1),
        addRules: iframeHosts.map((h, i) => ({
            id: i + 1,
            condition: {
                urlFilter: '*',
                resourceTypes: ['main_frame'],
            },
            action: {
                type: 'modifyHeaders',
                responseHeaders: [
                    { "header": "Content-Security-Policy", "operation": "set", "value": "default-src 'none';" },
                ],
            },
        })),
    });
});