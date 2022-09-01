let todos = [
    {
        Name:"Sample1",
        Status:"Incomplete",
        ID: 1,
        Category: "Example",
        Due: "12/34/56",
        Priority: "Low"
    },
    {
        Name:"Sample2",
        Status:"Complete",
        ID: 2,
        Category: "Example",
        Due: "12/34/56",
        Priority: "High"    
    }
]

const add = (name, category, date, priority) => {
    let newID = todos.length + 1;
    let newListItem = {
        Name: name,
        Status: "Incomplete",
        ID: newID,
        Category: category,
        Due: date,
        Priority: priority
    }
    todos.append(newListItem);
}

const complete = (listitem) => {
    listitem.status = "Complete";
}

const whoops = (listitem) => {
    if (listitem.status = "Complete") {
        listitem.status = "Incomplete";
    } else {
        console.log("Well that didn't work.")
    }
    
}