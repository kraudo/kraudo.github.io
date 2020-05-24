let root = {
    root: true,
    id: "root",
    name: "",
    url: "",
    children: [
        {
            root: true,
            id: "aoc",
            name: "Advent of Code",
            url: "https://raw.githubusercontent.com/kraudo/adventofcode/master/",
            children: [
                {
                    id: "day1",
                    name: "Day 1",
                    url: "2018/day%201/",
                    children: [
                        {
                            id: "aoc-haskell",
                            name: "Haskell",
                            url: "haskell/",
                            children: [
                                {
                                    name: "Main.hs",
                                    url: "Main.hs",
                                    lang: "haskell"
                                },
                                {
                                    name: "Setup.hs",
                                    url: "Setup.hs",
                                    lang: "haskell"
                                },
                                {
                                    name: "freqs.txt",
                                    url: "freqs.txt",
                                    lang: "text"
                                },
                                {
                                    name: "part1.cabal",
                                    url: "part1.cabal",
                                    lang: "cabal"
                                }
                            ] // end haskell children
                        }
                    ] // end day 1 children
                }
            ] // end children
        }, // end aoc
        {
            root: true,
            id: "haskell",
            name: "Haskell (misc)",
            url: "https://raw.githubusercontent.com/kraudo/haskell/master/",
            children: [
                {
                    id: "ascii-conversion",
                    name: "Ascii Conversion",
                    url: "Ascii%20Converstion/",
                    children: [
                        {
                            name: "asciiConversion.hs",
                            url: "asciiConversion.hs",
                            lang: "haskell"
                        },
                        {
                            name: "ascii.txt",
                            url: "ascii.txt",
                            lang: "text"
                        }
                    ]
                }
            ] // end children
        }, // end haskell (misc)
        {
            root: true,
            id: "keepup-app",
            name: "Keepup App",
            url: "https://raw.githubusercontent.com/kraudo/keepup/master/",
            children: [
                {
                    id: "app",
                    name: "app",
                    url: "app/",
                    children: [
                        {
                            name: "index.js",
                            url: "index.js",
                            lang: "javascript"
                        }
                    ]
                },
                {
                    id: "companion",
                    name: "companion",
                    url: "companion/",
                    children: [
                        {
                            name: "index.js",
                            url: "index.js",
                            lang: "javascript"
                        }
                    ]
                },
                {
                    id: "data-processing",
                    name: "Data Processing",
                    url: "data%20processing/",
                    children: [
                        {
                            name: "stress-data-processing.js",
                            url: "stress-data-processing.js",
                            lang: "javascript"
                        }
                    ]
                }
            ]
        }
    ]
}

let directory = document.getElementById("directory");

function generateHierarchy (node, parentHTML, url) {

    if (node.hasOwnProperty("children"))
    {
        if (node.root) {
            parentHTML.innerHTML += `<ul id='${node.id}' class='root'>${node.name}</ul>`;
        } else {
            parentHTML.innerHTML += `<ul id='${node.id}' class='child'>${node.name}</ul>`;
        }

        node.children.forEach(child =>
            generateHierarchy(
                child,
                document.getElementById(node.id),
                (url+node.url)
            )
        );
    } else {
        url += node.url
        parentHTML.innerHTML += `<li><a href="javascript:update('${url}','${node.lang}')">${node.name}</a></li>`;
    }
}

generateHierarchy(root, directory, "");