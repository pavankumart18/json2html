export default function json2html(data) {
    const columns = ['Name', 'Age', 'Gender'];
    let html = `<table data-user="pavankumart7052@gmail.com">`;
    html += `<thead><tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr></thead>`;
    html += `<tbody>`;
    data.forEach(item => {
        html += `<tr>${columns.map(col => `<td>${item[col] || ''}</td>`).join('')}</tr>`;
    });
    html += `</tbody></table>`;
    return html;
}
