document.addEventListener('DOMContentLoaded', function () {
    const randomArticleBtn = document.getElementById('random-article-btn');
    const randomArticleDiv = document.querySelector('.random-article');

    const articles = [
        { link: 'https://www.psycom.net/hidden-signs-teen-anxiety' },
        { link: 'https://www.psycom.net/gaslighting-what-is-it' },
        { link: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2770146' },
        { link: 'https://www.psycom.net/how-to-respond-are-you-okay' },
        { link: 'https://www.psycom.net/mental-health-first-conversion-disorder' },
        { link: 'https://www.psycom.net/comfort-zone'},
        { link: 'https://www.psycom.net/loneliness-health-consequences'},
        {link: 'https://www.psycom.net/emotional-avoidance-repressed-anger'},
        {link: 'https://www.psycom.net/fomo-to-jomo'},
        {link: 'https://www.psycom.net/student-mental-health/college'}



    ];

    // Initially hide the random-article div
    randomArticleDiv.style.display = 'none';

    randomArticleBtn.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * articles.length);

        randomArticleDiv.innerHTML = `<a href="${articles[randomIndex].link}" target="_blank"> Read Your Article</a>`;
        randomArticleDiv.style.display = 'flex';
    });
});

var currentVideoId = null;

function searchVideos() {
    var keyword = $('#keyword').val();
    var apiKey = 'AIzaSyC_EW3AQyAmxQ05VkzMjqKaSE_M6ABXZmk'; 

    $.get(
        'https://www.googleapis.com/youtube/v3/search', {
            part: 'snippet',
            q: keyword,
            type: 'video',
            maxResults: 10,
            order: 'relevance',
            key: apiKey
        },
        function (data) {
            var shuffledVideos = shuffle(data.items);

            displayResults(shuffledVideos);
        }
    );
}

function displayResults(videos) {
    var resultsContainer = $('#results');
    resultsContainer.empty();

    if (videos.length === 0) {
        resultsContainer.append('<p>No videos found.</p>');
    } else {
        videos.forEach(function (video, index) {
            var videoTitle = video.snippet.title;
            var videoId = video.id.videoId;
            var thumbnailUrl = video.snippet.thumbnails.default.url;

            if (!containsShorts(videoTitle)) {
                resultsContainer.append(
                    '<div class="result-item">' +
                        '<img class="thumbnail" src="' + thumbnailUrl + '" alt="Video Thumbnail" onclick="playVideo(\'' + videoId + '\')">' +
                        '<div class="result-details">' +
                            '<p class="title">' + videoTitle + '</p>' +
                            '<button class="play-button" onclick="playVideo(\'' + videoId + '\')">Play</button>' +
                        '</div>' +
                    '</div>'
                );
            }
        });
    }
}

function playVideo(videoId) {
    if (currentVideoId) {
        $('#player').empty();
    }

    var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';

    $('#player').append(iframe);

    currentVideoId = videoId;
}

function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function containsShorts(title) {
    // Check if the title contains '#Shorts' or 'shorts'
    return title.toLowerCase().includes('#shorts') || title.toLowerCase().includes('shorts') || title.toLowerCase().includes('short');
}

function displayInfo(option) {
    const heading = document.getElementById('selectedTopic');
    heading.textContent = option;
    // Dummy data for demonstration purposes
    const infoData = generateInfoData(option);

    // Display information in the right side
    const infoContent = document.getElementById('infoContent');
    infoContent.innerHTML = '';

    infoData.forEach(data => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerHTML = `
            <img src="${data.logo}" alt="${data.name}" class="logo">
            <p>${data.name}</p>
        `;
        infoContent.appendChild(gridItem);
    });
}

function generateInfoData(option) {
    // Dummy data generation based on the selected option
    switch (option) {
        case 'Suicide Prevention':
            return [
                { name: 'MY3', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_da95db3a24378c905521eea4461b2918c5f89d8b/1790523c81f6d3d5d3165937edd74525/psycom_page_asset_da95db3a24378c905521eea4461b2918c5f89d8b?fm=webp&fit=thumb&q=65&w=576&h=576' },
                { name: 'notOK', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_320b1963107b8b61c6068304bc1b1213c3fc4669/d84f7be4d535ba52f41d175496be94f2/psycom_page_asset_320b1963107b8b61c6068304bc1b1213c3fc4669?fm=webp&fit=thumb&q=65&w=576&h=576' }
            ];
        case 'General Mental Health':
            return [
                { name: 'What’s Up?', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_abf18521a531ff89b2bec534bc5d417d8d7938f3/983efdb5d03088677881c8db914c45f8/psycom_page_asset_abf18521a531ff89b2bec534bc5d417d8d7938f3?fm=webp&fit=thumb&q=65&w=576&h=576' },
                { name: 'Mood Kit', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_228a0a50ef07b44af02cad52567af0ed94247c29/9a3cf65999ad4c7b5e981ad9d1c1f239/psycom_page_asset_228a0a50ef07b44af02cad52567af0ed94247c29?fm=webp&fit=thumb&q=65&w=576&h=576' }
            ];
        case 'Addiction':
            return [
                { name: 'Twenty-Four Hours', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_ac63fc5291cec15ad366bc43782433e571526625/53fff9fa58b216439526293a8487aceb/psycom_page_asset_ac63fc5291cec15ad366bc43782433e571526625?fm=webp&fit=thumb&q=65&w=576&h=576' },
                { name: 'Quit That!', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_483cbb271895b5e55b29c223e4080840771253be/1c38781dec43cbb48c0355b6f072fd4b/psycom_page_asset_483cbb271895b5e55b29c223e4080840771253be?fm=webp&fit=thumb&q=65&w=576&h=576' }
            ];
        case 'Anxiety':
            return [
                { name: 'MindShift', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_d93bc0bb861bbd2f81cb7c6fef6b159ab4df80e3/72724e2a18598111e36127a4f5dc726c/psycom_page_asset_d93bc0bb861bbd2f81cb7c6fef6b159ab4df80e3?fm=webp&fit=thumb&q=65&w=576&h=576' },
                { name: 'CBT Thought Diary', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_d3d4bf4afc0fbef19f2ce3a1a205b26b14478807/aadb1b148e6b6f1d655c2bba66088e76/psycom_page_asset_d3d4bf4afc0fbef19f2ce3a1a205b26b14478807?fm=webp&fit=thumb&q=65&w=576&h=576' },          
                { name: 'Anxiety (SAM)', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_9a0105237a3d10931f252d7943e6acdb17d42c32/6917033220009f0722b08de54ab8410c/psycom_page_asset_9a0105237a3d10931f252d7943e6acdb17d42c32?fm=webp&fit=thumb&q=65&w=576&h=576' }
            ];

        case 'Bipolar Disorder':
            return [
                { name: 'IMoodJournal', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_c43cde9436e2e13c6de1d4900a61a255d8854187/e5b656df7ff6e1a0f949092bf7fc12db/psycom_page_asset_c43cde9436e2e13c6de1d4900a61a255d8854187?fm=webp&fit=thumb&q=65&w=576&h=576' },
                { name: 'eMoods', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_cdd1a8b8723b69489c750d875f4b59fe8f447b79/07f48a51ad88f521f9ec618ad6f3d1fe/psycom_page_asset_cdd1a8b8723b69489c750d875f4b59fe8f447b79?fm=webp&fit=thumb&q=65&w=576&h=576' }
            ]
        case 'Depression':
            return [
                { name: 'Talkspace', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_beadb3b0d3ffe6b00c8ffb4203f4c8a64173ba4d/618536930adbe25f1641f116916d7ca7/psycom_page_asset_beadb3b0d3ffe6b00c8ffb4203f4c8a64173ba4d?fm=webp&fit=thumb&q=65&w=576&h=576' },
                { name: 'Happify', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_11c92f7e9ef60aa0902951df99c7d606121682ad/db43da3b2f80d4a37f8955045df80517/psycom_page_asset_11c92f7e9ef60aa0902951df99c7d606121682ad?fm=webp&fit=thumb&q=65&w=576&h=576' },
                { name: 'MoodTools', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_4165643e70a9cf5368aab18c2a5ee2a034d0f6b2/2471a16c30f77c1eeeb00af192a0c5b9/psycom_page_asset_4165643e70a9cf5368aab18c2a5ee2a034d0f6b2?fm=webp&fit=thumb&q=65&w=576&h=576' }
            ]
        case 'Eating Disorders':
            return [
                { name: 'Recovery Record', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_f2ccee603f9514291a669f50df09a7f35a6fedd0/33e2805c0d41a70f02fbcf4dfb635e17/psycom_page_asset_f2ccee603f9514291a669f50df09a7f35a6fedd0?fm=webp&fit=thumb&q=65&w=576&h=576' },
                { name: 'Rise Up', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_f2328bfb665bdad18fd266ade815c6ee3b42e0b8/bf0401d46ee6100d7b14b14701feece2/psycom_page_asset_f2328bfb665bdad18fd266ade815c6ee3b42e0b8?fm=webp&fit=thumb&q=65&w=576&h=576' },
                { name: 'Lifesum', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_154d554a95e2dce626817d2a380ec4715f6d446b/b0c7fd9f4ea077b69075a35b1277f5a8/psycom_page_asset_154d554a95e2dce626817d2a380ec4715f6d446b?fm=webp&fit=thumb&q=65&w=576&h=576' }
            ]
        case 'OCD':
            return [
                { name: 'nOCD', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_69d5f4eaf90e0cf9dd34a74bf5106a20d3a252b4/3927b74b6b34837c09f74495037fc83e/psycom_page_asset_69d5f4eaf90e0cf9dd34a74bf5106a20d3a252b4?fm=webp&fit=thumb&q=65&w=576&h=576' },
                { name: 'Worry Watch', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_2bf8a2c19cb2beb06ff91152eee0c34bf37caeb1/46dabe3592a1d04ee749c341f2cb156b/psycom_page_asset_2bf8a2c19cb2beb06ff91152eee0c34bf37caeb1?fm=webp&fit=thumb&q=65&w=576&h=576' },
                { name: 'GG OCD', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_3d2e3fc8c5734eddb07bad44bd856036083473e7/30e8e67016513094a6fe1097cca3004c/psycom_page_asset_3d2e3fc8c5734eddb07bad44bd856036083473e7?fm=webp&fit=thumb&q=65&w=576&h=576' }
            ]
        case 'PTSD':
            return [
                    { name: 'PTSD Coach', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_da592d64b960e4fd23e51649286c8132f62c3db0/b4e2655e68b9be7fd79be91f9cd8ef3c/psycom_page_asset_da592d64b960e4fd23e51649286c8132f62c3db0?fm=webp&fit=thumb&q=65&w=576&h=576' },
                    { name: 'Breathe2Relax', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_a5349c8a7271ba42dcb83e04c50b46f9532b8049/2aba83ae99a1861c04114b910a568d9f/psycom_page_asset_a5349c8a7271ba42dcb83e04c50b46f9532b8049?fm=webp&fit=thumb&q=65&w=576&h=576' }
                ]
        case 'Schizophrenia':
            return [
                        { name: 'UCSF PRIME', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_e2dd375ce61878e492065360bcb3264a508ee4e4/68520a39ed4e88cef55776658d774781/psycom_page_asset_e2dd375ce61878e492065360bcb3264a508ee4e4?fm=webp&fit=thumb&q=65&w=576&h=576' },
                        { name: 'HealthStorylines', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_8814e542818081e0b6000a8c8da17a6457830efe/35c63704f307863b3454b79ec63bd333/psycom_page_asset_8814e542818081e0b6000a8c8da17a6457830efe?fm=webp&fit=thumb&q=65&w=576&h=576' },
                    ]
        
        case 'Stress':
            return [
                { name: 'Headspace', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_e909aad6fe735c3c32ed371ae4846c8265b293c8/b856113ec360de87e715358c1957d2e8/psycom_page_asset_e909aad6fe735c3c32ed371ae4846c8265b293c8?fm=webp&fit=thumb&q=65&w=576&h=576' },
                { name: 'Calm', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_6a4342239ebdf4de2c2481a05349bb91714c1450/070ca1f49940c42388c43921adba6910/psycom_page_asset_6a4342239ebdf4de2c2481a05349bb91714c1450?fm=webp&fit=thumb&q=65&w=576&h=576' },
                { name: 'Ten Percent Happier', logo: 'https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_asset_e1774bd3092cd06d547831866ecf3204bfa9e613/5e33bbe4a7a74b8697cb9146fdc8bb9f/psycom_page_asset_e1774bd3092cd06d547831866ecf3204bfa9e613?fm=webp&fit=thumb&q=65&w=576&h=576' }
            ]

    
        // Add more cases for other options as needed
        default:
            return [];
    }
}

window.addEventListener('scroll', reveal);
    
function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop =  reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

