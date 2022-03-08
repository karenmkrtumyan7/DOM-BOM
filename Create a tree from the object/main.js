// Write a function createTree that creates a nested ul/li list from the nested object.

const data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
};

const root = document.getElementById('root');
root.append("karen")

function createOrderedList(data, r) {
    const ul = document.createElement('ul');
    if (Object.keys(data).length == 0) return;

    for (key in data) {
        const li = document.createElement('li');
        li.innerText = key;
        ul.append(li);
        r.append(ul);
        createOrderedList(data[key], li);
    }
}

createOrderedList(data, root)