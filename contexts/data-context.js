import React from 'react';

export const language = {
    en: {
        pageHome: {
            title: "Hi, friends call me Oleg <br/> <span>and that's my</span> <strong>resume</strong>",
            // subTitle: "resume"
        },
        pageInfo: {
            full_name: {
                name: "Name: Oleg Kostetzkiy",
                dateOfBirth: "Date of Birth: 06/04/2002",
                location: "Location: Ukraine, Kherson",
                mobile: "Mobile: +380 (95) 224-16-71",
                email: "E-mail: kostetzkiy.oleg@gmail.com",
            },
            description: {
                content: ` Desired Position: <strong>Middle front-end developer</strong><br/>
                   <span>Self- taught, have experience in commercial development</span>`,
            },
            abuot_me: {
                title: "SEVERAL FACTS ABOUT ME",
                content: `
                <span>Young, not lacking in intelligence, specialist)</span><br/>

                <span>I'm hardworking and stubborn, I can even stay awake until I achieve results. I easily find common language, know how to communicate and get along with people.</span><br/> 
                
                <span>In general, I'm a positive person without bad habits, but whiskey with socket for New Year is a sacred thing.</span><br/>
                
                <span> A lot of hobbies, but still, most of my time I give to programming - it's my favorite pastime. So I really hope, that you liked my resume and you didn't catch some bug))</span><br/>
            `
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
                    content: ["Html", "Css/Scss", "JS", "React", "Redux"],
                },
                more: {
                    title: "TECHNICAL SKILLS",
                    content: ["Next js", "Node js", "JSON", "GraphQL", "REST API", "AJAX", "MongoDB", "Figma", "Adobe XD", "Photoshop",
                        "Git", "Wordpress", "Matter JS", "Socket io", "Three JS"],
                }
            },
            experience: {
                title: "<!-- Work experience  -->",
                content: [
                    {
                        title: "Strong Junior Front-end Developer | CEO WEB STUDIO ZIGZAG",
                        period: "December 2021 - Present"
                    },
                    {
                        title: "Front-end Developer | Tortoiz Themes",
                        period: "June 2021 - November 2021"
                    }
                ]
            },
            message: "<!-- PS Yeah, I did the design and implementation of the code :)  -->"
        }
    }
}
export const DataContext = React.createContext({
    language: language.en,
    toggleLanguage: () => { }
})