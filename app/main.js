const pause_play = document.getElementById("pause_play")
const study_timer = document.getElementById("study_timer")
const break_timer = document.getElementById("break_timer")
const form = document.getElementById("time_form")


let pomodoros = 0;
let playing = false;
let studying = false;
let breaking = false;
let study_time = 0
let break_time = 0
let saved_study_time = 0
let saved_break_time = 0

const eve = new Event("Pomo_start")

const change_study = (newtime) => {
    study_timer.innerText = newtime
}
const change_break = (newtime) => {
    break_timer.innerText = newtime
}



pause_play.addEventListener("click", () => {
    if (playing) {
        playing = false
        pause_play.innerText = "Play"
        console.log("pomo is paused")
    }
    else if (!playing && (studying && breaking) || (studying && !breaking) || (!studying && breaking)) {
        playing = true
        pause_play.innerText = "Pause"
        console.log("pomodoro is running");
    }
    else if (!playing && !studying && !breaking) {
        window.dispatchEvent(eve)
    }
})

form.addEventListener("submit", (e) => {
    console.log("form submitted");
    e.preventDefault()
    playing = false
    let content = new FormData(form)
    saved_study_time = content.get("study_time")
    study_time = saved_study_time
    change_study(study_time)
    saved_break_time = content.get("break_time")
    break_time = saved_break_time
    change_break(break_time)
})

window.addEventListener("Pomo_start", () => {
    playing = true
    studying = true
    breaking = false
    if (study_time == 0) {
        study_time = 25
    }
    if (break_time == 0) {
        break_time = 5
    }
    console.log("pomo is starting")
    study(study_time)
    brek(break_time)
})

const study = (study_time) => {
    console.log("Studying");
    console.log(study_time)
    if (study_time == -1) {
        studying = false
        breaking = true
        study_time = saved_study_time
        change_study(study_time)

    }
    if (playing && studying) {
        study_time -= 1;
        change_study(study_time)
        setTimeout(() => {
            study(study_time)
        }, 5000);
    } else if (playing && !studying) {
        setTimeout(() => {
            study(study_time)
        }, 5000);
    } else if (!playing) {
        return
    }

}
const brek = (break_time) => {
    console.log("Breaking");
    console.log(break_time);
    if (break_time == -1) {
        breaking = false
        studying = true
        break_time = saved_break_time
        change_break(break_time)

    }
    if (playing && breaking) {
        break_time -= 1
        change_break(break_time)
        setTimeout(() => {
            brek(break_time)
        }, 5000);
    } else if (playing && !breaking) {
        setTimeout(() => {
            brek(break_time)
        }, 5000)
    } else if (!playing) {
        return
    }

}
