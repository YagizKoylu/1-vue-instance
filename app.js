const app = Vue.createApp({
    data(){

        return {
            title: "Medipol Başakşehir-Galatasaray Maç Özeti(7-0)",
            content: "+18, Şiddet ve Korku",
            macozeti: {
                title: "Maç özeti için tıklayın..",
                target: "_blank",
                alt: "başakşehir-galatasaray-maç-özeti",
                url: "https://beinsports.com.tr/mac-ozetleri-goller/super-lig/ozet/2022-2023/14/istanbul-basaksehir-0-7-galatasaray-mac-ozeti",

            },

        };
    },
}).mount("#app");