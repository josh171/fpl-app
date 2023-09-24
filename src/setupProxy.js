const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://fantasy.premierleague.com",
      changeOrigin: true,
      onProxyReq(proxyReq, req, res) {
        proxyReq.setHeader(
          "Cookie",
          "OptanonAlertBoxClosed=2023-08-10T19:11:40.591Z; _cb=DT59rWBIWJjEN5b0v; _ga=GA1.3.1281736116.1691694701; _chartbeat2=.1691694702950.1692992705426.1000000001000001.CKMEr5DYRqOLDni9ctCQRJ_TCAfnzO.1; pl_profile=eyJzIjogIld6SXNNakUzTWpNM01UaGQ6MXFaY2tBOkxFRlpPaWVaYkwtbEVTVkdPazE0VnpyN1RLMUxfMFRnemFrdjJ4UTBfTDQiLCAidSI6IHsiaWQiOiAyMTcyMzcxOCwgImZuIjogIkpvc2giLCAibG4iOiAiRGVsYW55LUJvb3RoIiwgImZjIjogMX19; csrftoken=to4J1zmZe3EpyEBqIRqba736sAEp3ocz; sessionid=.eJxVy7EOwiAUheF3YTbNhQsF3NxNNGmcCXC5wdg0jdjJ-O7STceT7_xvEeL2qmFr5RnuJI5CSavQSicOv5RifpRl93XmdR52Ga7nW7c2TZdTn_9Bja32N4FkU6L2NqExyeQi_ZjdiJpKQgCrEaLNDkzGTASJo0dIhb0iaZnF5wv-yzOE:1qZckB:jaNAVRrDkKWNISL9B15Fi4fG2qPr-JlqPktflKgwojc; _gid=GA1.2.840839827.1693140476; OptanonConsent=isGpcEnabled=0&datestamp=Mon+Aug+28+2023+13%3A35%3A22+GMT%2B0100+(GMT%2B01%3A00)&version=202302.1.0&isIABGlobal=false&hosts=&consentId=04af018b-23ad-4be6-b4d2-a5899ba6cca2&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&geolocation=IM%3B&AwaitingReconsent=false; _ga_844XQSF4K8=GS1.1.1693226121.17.1.1693226122.59.0.0; _ga=GA1.2.1281736116.1691694701; __gads=ID=26d5aafffcff01cd:T=1691694702:RT=1693226122:S=ALNI_MZ-7965xj6-XZaW4ZqVjEG7_avKcw; __gpi=UID=00000d8a16e87d40:T=1691694702:RT=1693226122:S=ALNI_MYivtv2xh_KYsCIm2pD0lm2TFbYjQ; datadome=3b3XMNFddYW5QUW1fHTXtCEQr9K4QbRTJ_G9_c8w6pYerpRFcoPieK4Widp2eQegQ5edoUSSE59fjhSwcIAwfHATAOZ-XlFkD34T2D4vcO0Ak0yS44CEXixA8wtYR_2k"
        );
      },
    })
  );
};
