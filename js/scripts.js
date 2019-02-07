// Empty JS for your own code to be here

// Ordenar tabela
function sortTable(n) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("tableRamais");
	switching = true;
	// Set the sorting direction to ascending:
	dir = "asc";
	/* Make a loop that will continue until
				no switching has been done: */
	while (switching) {
		// Start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		/* Loop through all table rows (except the
				first, which contains table headers): */
		for (i = 1; i < (rows.length - 1); i++) {
			// Start by saying there should be no switching:
			shouldSwitch = false;
			/* Get the two elements you want to compare,
				  one from current row and one from the next: */
			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];
			/* Check if the two rows should switch place,
				  based on the direction, asc or desc: */
			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					// If so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			} else if (dir == "desc") {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					// If so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			/* If a switch has been marked, make the switch
				  and mark that a switch has been done: */
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			// Each time a switch is done, increase this count by 1:
			switchcount++;
		} else {
			/* If no switching has been done AND the direction is "asc",
				  set the direction to "desc" and run the while loop again. */
			if (switchcount == 0 && dir == "asc") {
				dir = "desc";
				switching = true;
			}
		}
	}
}

// Destacar linha
$(document).ready(function () {
    $('tr').click(function () {
        $(this).toggleClass("highlight");
    });
});

// Filtrar tabela
$(document).ready(function(){
  $("#inputProcura").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tableRamais tbody tr").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
	//$("#tableRamais tbody tr:visible").toggleClass("table-striped");
	var stripe=function(){
		$('#tableRamais table').removeClass('table-striped');
		$('#tableRamais tbody tr').filter(':visible').filter(':odd').addClass('table-striped');
	};
  });
});

// Reaplicar listras na tabela filtrada
$(document).ready(function(){
	$("#tableRamais tbody tr:visible").toggleClass("table-striped");
});


/*
$(document).ready(
	function () {
		$('tr').click(
			function () {
				$("tr").toggleClass(".table-striped-click");
			}
		);
	}
);
*/

/*
$(document).ready(
	function () {
		$('tr:odd').click(
			function () {
				if(this.style.background == "" || this.style.background =="white") {
					$(this).css('background-color', 'rgba(189, 228, 173)');
				}
				else {
					$(this).css('background-color', 'white');
				}
			}
		);
		$('tr:even').click(
			function () {
				if(this.style.background == "" || this.style.background =="white") {
					$(this).css('background-color', 'rgba(189, 228, 173, 0.05)');
				}
				else {
					$(this).css('background-color', 'rgba(0, 0, 0, 0.05)');
				}
			}
		);
	}
);
*/
