const audio = document.getElementById("audio")
const playButton = document.getElementById("play")
const previousButton = document.getElementById("previous")
const nextButton = document.getElementById("next")
const upload = document.getElementById("music-upload")
const playlist = document.getElementById("playlist")

const title = document.getElementById("music-title")
const artist = document.getElementById("music-artist")
const progress = document.getElementById("progress")
const currentTime = document.getElementById("current-time")
const duration = document.getElementById("duration")
const volume = document.getElementById("volume")

let songs = []
let currentIndex = 0

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00"

    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)

    return `${minutes}:${String(secs).padStart(2, "0")}`
}

function renderPlaylist() {
    playlist.replaceChildren()

    if (songs.length === 0) {
        const li = document.createElement("li")
        li.className = "empty"
        li.textContent = "Nenhuma música adicionada ainda."
        playlist.appendChild(li)
        return
    }

    songs.forEach((song, index) => {
        const li = document.createElement("li")

        li.textContent = "🎵 " + song.name
        li.classList.toggle("active", index === currentIndex)

        li.addEventListener("click", () => {
            currentIndex = index
            loadSong(true)
        })

        playlist.appendChild(li)
    })
}

function loadSong(autoplay = false) {
    const song = songs[currentIndex]

    if (!song) return

    audio.src = song.url
    title.textContent = song.name
    artist.textContent = "Sua biblioteca musical"
    progress.value = 0
    currentTime.textContent = "0:00"
    duration.textContent = "0:00"

    renderPlaylist()

    if (autoplay) {
        audio.play().then(() => {
            playButton.textContent = "⏸"
        }).catch(() => {
            playButton.textContent = "▶"
        })
    } else {
        playButton.textContent = "▶"
    }
}

function togglePlay() {
    if (songs.length === 0) {
        alert("Adicione uma música primeiro!")
        return
    }

    if (audio.paused) {
        audio.play().catch(() => {
            alert("Não foi possível reproduzir esta música.")
        })
    } else {
        audio.pause()
    }
}

playButton.addEventListener("click", togglePlay)

audio.addEventListener("play", () => {
    playButton.textContent = "⏸"
})

audio.addEventListener("pause", () => {
    playButton.textContent = "▶"
})

previousButton.addEventListener("click", () => {
    if (songs.length === 0) return

    currentIndex =
        (currentIndex - 1 + songs.length) % songs.length

    loadSong(true)
})

nextButton.addEventListener("click", () => {
    if (songs.length === 0) return

    currentIndex = (currentIndex + 1) % songs.length

    loadSong(true)
})

audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return

    progress.value =
        (audio.currentTime / audio.duration) * 100

    currentTime.textContent = formatTime(audio.currentTime)
})

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration)
})

progress.addEventListener("input", () => {
    if (!Number.isFinite(audio.duration)) return

    audio.currentTime =
        (Number(progress.value) / 100) * audio.duration
})

volume.addEventListener("input", () => {
    audio.volume = Number(volume.value)
})

audio.volume = Number(volume.value)

audio.addEventListener("ended", () => {
    if (songs.length > 0) {
        currentIndex = (currentIndex + 1) % songs.length
        loadSong(true)
    }
})

upload.addEventListener("change", (event) => {
    const files = Array.from(event.target.files || [])

    const audioFiles = files.filter(file =>
        file.type.startsWith("audio/")
    )

    if (audioFiles.length === 0) {
        alert("Selecione arquivos de áudio válidos.")
        return
    }

    audioFiles.forEach(file => {
        songs.push({
            name: file.name.replace(/\.[^/.]+$/, ""),
            url: URL.createObjectURL(file)
        })
    })

    if (songs.length === audioFiles.length) {
        currentIndex = 0
        loadSong(false)
    } else {
        renderPlaylist()
    }

    upload.value = ""
})
