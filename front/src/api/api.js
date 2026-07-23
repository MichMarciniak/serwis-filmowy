
export const getCategories = async () => {
    return await fetch("/api/category", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });

}

export const addNewFilm = async (title, duration, releaseYear, categories) => {
    return await fetch("/api/film", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            duration: duration,
            releaseYear: releaseYear,
            categories: categories
        }),
        credentials: "include"
    })
}

export const addNewSeries = async (title, releaseYear, endYear, categories) => {
    return await fetch("/api/series", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            releaseYear: releaseYear,
            endYear: endYear,
            categories: categories
        }),
        credentials: "include"
    })
}

export const getFilm = async (id) => {
    return await fetch(`/api/film/${id}`, {
        method: "GET",
        credentials: "include"
    })
}

export const getSeries = async (id) => {
    return await fetch(`/api/series/${id}`, {
        method: "GET",
        credentials: "include"
    })
}

export const search = async (url) => {
    return await fetch(`/api/search?${url}`, {
    });
}

export const getEpisodes = async (id) => {
    return await fetch(`/api/series/${id}/episodes`)
}

export const addReview = async (id, type, rating, comment) => {
    return await fetch(`/api/${type}/${id}/review`, {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            rating,
            comment
        }),
        method: "POST",
        credentials: "include"
    })
}
