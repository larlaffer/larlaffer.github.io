fetch('./data/programs.json')
    .then((response) => response.json())
    .then((json) => writeProgramList(json));

function writeProgramList(json){
    let div = document.getElementById('programList');

    for(let i = 0; i < json.length; i++) {
        let box = document.createElement('div');
        box.className = 'box';
        box.style.marginBottom = '0px';
    
        let details = document.createElement('details');
        let summary = document.createElement('summary');
    
        let strong = document.createElement('strong');
        strong.textContent = json[i].ProgramName;
    
        summary.appendChild(strong);
        summary.append(` (${json[i].Date})`);
        details.appendChild(summary);

        let tableWrapper = document.createElement('div');
        tableWrapper.className = 'table-wrapper';
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');

        for(let j=0; j < json[i].Works.length; j++) {
            let tr = document.createElement('tr');

            let titleTd = document.createElement('td');
            let em = document.createElement('em');
            em.textContent = json[i].Works[j].Title;

            let composer = document.createElement('td');
            composer.textContent = json[i].Works[j].Composer;

            let notes = document.createElement('td');
            notes.textContent = json[i].Works[j].Notes;

            titleTd.appendChild(em);
            tr.appendChild(titleTd);
            tr.appendChild(composer);
            tr.appendChild(notes);

            tbody.appendChild(tr);
        }

        table.appendChild(tbody);
        tableWrapper.appendChild(table);
        details.appendChild(tableWrapper);

        box.appendChild(details);
        div.appendChild(box);
    }
}
