const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// logic
// line 1 select element which need to be given behavior
// const since the data unchanged
// panels as a name to call them since there one more data / similiar to array
// document used since we need to take an element from other document.
// quarySelectorAll used since there are more than one element.
// .panel are the element we used. Since we use class as an element, we need to add (.) before putting the name of the class

// line 3 forEach is used for the loop as for each time we do something, it will behave according to our action.
// forEach then select panel as the element which gonna have this behavior.
// line 4 an event gonna be added to class panel which is an action click.
// if the panel clicked by cursor, then the said panel will behave acoording to the script.
// line 5 this part are a caller for a function outside the loop, incase there are a lot of loop.
// here is used since we want to do 2 action which if put on the same forEach, will not work
// line 6 mean that a class (active) will be added to selected panel
// line 10 where the function which get called in line 5 reside.
// line 11 mean there will be a loop for element panel.
// line 12 mean that from all panel class if there are one with (active) as a class then the (active) will be removed
