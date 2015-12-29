(function() {
        var script = document.createElement("script");

        script.type = "text/javascript";
        script.async = true;
        script.src = "//sd.toneden.io/production/v2/toneden.loader.js"

        var entry = document.getElementsByTagName("script")[0];
        entry.parentNode.insertBefore(script, entry);
    }());

    ToneDenReady = window.ToneDenReady || [];
    ToneDenReady.push(function() {
        ToneDen.configure({
            soundcloudConsumerKey: '865a03c94a1b67ca35e26f86c2e91761'
        });
        // This is where all the action happens:
        ToneDen.player.create({
            dom: "#player",
            eq: "waves",
            skin: "light",
            tracksPerArtist: 4,
            urls: [
                "https://soundcloud.com/mutantbreakz/blacklist-vs-alt-a-fire"
            ]
        });
    });