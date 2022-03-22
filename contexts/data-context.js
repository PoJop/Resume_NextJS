import React from 'react';

export const language = {
    en: {
        full_name: {
            name: "Name: Oleg Kostetzkiy",
            dateOfBirth: "Date of Birth: 06/04/2002",
            location: "Location: Ukraine, Kherson",
            mobile: "Mobile: +380 (95) 224-16-71",
            email: "E-mail: kostetzkiy.oleg@gmail.com",
        },
        description: {
            title: "",
            content: "",
        },
        abuot_me: {
            title: "SEVERAL FACTS ABOUT ME",
            content: `Young, not lacking in intelligence, a specialist)
            I am hard working and stubborn, I may not even sleep till I get results.
            I easily find common language, know how to communicate and get along with people
            In general, I am a very positive person
            
            Had a full life before the war, but now the only fun I have is fucking up orcs and marauders with sticks. Therefore, I want to load myself with work as much as possible to distract myself from these damn sounds of sirens and explosions. Yes, and I want to help our army financially, even a little, to speed up the Ukrainian victory) So I'll work harder.`
        },
        languages: {
            title: "LANGUAGES",
            content: [
                {
                    lang: "English",
                    level: "Basic"
                },
                {
                    lang: "Russian",
                    level: "Native Speaker"
                },
                {
                    lang: "Ukrainian",
                    level: "Native Speaker"
                },
            ],
        },
        stack: {
            current: {
                title: "<!-- My current stack  -->",
                content: ["Html", "Css/Scss", "React", "Redux"],
            },
            more: {
                title: "TECHNICAL SKILLS",
                content: ["Node JS"],
            }
        },
    }
}
export const DataContext = React.createContext({
    language: language.en,
    toggleLanguage: () => { }
})