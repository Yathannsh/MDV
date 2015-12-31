//for input button 
  function handleFileSelects(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li >Name: <strong>', escape(f.name), '</strong></li><li>Type:(', f.type || 'Not Available', ')</li><li>Size:  ',
                  f.size, ' bytes</li><li> Last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'Not Available',
                  '</li><div class="line"></div>');
    }
    document.getElementById('list').innerHTML = '<div class="list"><ul class="element">' + output.join('') + '</ul></div>';
  }

  document.getElementById('files').addEventListener('change', handleFileSelects, false);
//for drop_zone
  function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li >Name: <strong>', escape(f.name), '</strong></li><li>Type:(', f.type || 'Not Available', ')</li><li>Size:  ',
                  f.size, ' bytes</li><li> Last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'Not Available',
                  '</li><div class="line"></div>');
    }
    document.getElementById('list').innerHTML = '<div class="list"><ul class="element">' + output.join('') + '</ul></div>';
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; 
  }

  // Setup the dnd listeners.
  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);


