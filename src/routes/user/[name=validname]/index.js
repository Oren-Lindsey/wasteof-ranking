import WasteOfSession from 'wasteof-client'
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(event) {
    const name = await event.params.name;
    if (name !== 'jeffalo') {
        let wasteof = new WasteOfSession()
        const exists = await wasteof.checkUsername(name)
        if(!exists.available) {
            return await getAverage(name)
        }    
    } else {
        return {
            body: {
                result: 'underrated',
                avg: '',
                followers: '',
                diff: '',
                name: 'jeffalo'
            }
        }
    }
  }
const average = (array) => array.reduce((a, b) => a + b) / array.length;

async function getAverage(name) {
    const data = await getFollowers(name)
    const diff = Math.abs(Math.round(data.followers - data.average))
    if (diff < 3) {
        return {
            body: {
                result: 'normal',
                avg: data.average,
                followers: data.followers,
                diff: diff,
                name: name
            }
        }
    } else if (data.followers > data.average) {
        return {
            body: {
                result: 'overrated',
                avg: data.average,
                followers: data.followers,
                diff: diff,
                name: name
            }
        }
    } else {
        return {
            body: {
                result: 'underrated',
                avg: data.average,
                followers: data.followers,
                diff: diff,
                name: name
            }
        }
    }
}

async function getFollowers(name) {
    let all = []
    let counts = []
    const user = await fetch(`https://beta.wasteof.money/users/${name}/followers/__data.json`)
    const userData = await user.json()
    const followers = userData.user.stats.followers
    var quo = Math.floor(followers/15);
    const pages = followers%15
    for (let i = 0; i < pages; i++) {
        const res = await fetch(`https://beta.wasteof.money/users/${name}/followers/__data.json?page=${i}`)
        const json = await res.json()
        for (let i = 0; i < json.followers.length; i++) {
            all.push(json.followers[i])
        }
    }
    for (let i = 0; i < all.length; i++) {
        counts.push(all[i].stats.followers)
    }
    const avg = Math.round(average(counts))
    return {
        average: avg,
        followers: followers
    }
}
