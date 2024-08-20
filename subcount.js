const apiKey = 'AIzaSyD4oyL0_OJ3JPn4j63W9Zt6ekbMT3Z-FG8';
const channelId = 'UCrK1EhsLO4LtXoTaYGgiWVA';

function formatToMillion(number) {
    const million = 1000000;
    const formattedNumber = (number / million).toFixed(2);
    return `${formattedNumber}M`;
}

async function fetchSubscriberCount() {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`);
        const data = await response.json();
        const subscriberCount = data.items[0].statistics.subscriberCount;

        const formattedSubscriberCount = formatToMillion(subscriberCount);

        document.getElementById('subscribers').innerText = `${formattedSubscriberCount}`;
    } catch (error) {
        document.getElementById('subscribers').innerText = '1.26M';
    }
}

fetchSubscriberCount();

setInterval(fetchSubscriberCount, 10000);
