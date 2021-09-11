// Function called whenever user tab on any boX
function myfunc() {

	// Setting DOM to all boXes or input field
	var b1, b1, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	// Checking if You won or not and after
	// that disabled all the other fields
	if ((b1 == 'X' || b1 == 'X') && (b2 == 'X' ||
		b2 == 'X') && (b3 == 'X' || b3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "You won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b1 == 'X' || b1 == 'X') && (b4 == 'X' ||
		b4 == 'X') && (b7 == 'X' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "You won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;

	}
	else if ((b7 == 'X' || b7 == 'X') && (b8 == 'X' ||
		b8 == 'X') && (b9 == 'X' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "You won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
	}
	else if ((b3 == 'X' || b3 == 'X') && (b6 == 'X' ||
		b6 == 'X') && (b9 == 'X' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "You won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
	}
	else if ((b1 == 'X' || b1 == 'X') && (b5 == 'X' ||
		b5 == 'X') && (b9 == 'X' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "You won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
	}
	else if ((b3 == 'X' || b3 == 'X') && (b5 == 'X' ||
		b5 == 'X') && (b7 == 'X' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "You won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b2 == 'X' || b2 == 'X') && (b5 == 'X' ||
		b5 == 'X') && (b8 == 'X' || b8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "You won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b4 == 'X' || b4 == 'X') && (b5 == 'X' ||
		b5 == 'X') && (b6 == 'X' || b6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "You won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	// Checking of You finsh
	// Checking for Computer starts, Is Computer won or
	// not and after that disabled all the other fields
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Computer won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
		b4 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Computer won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
		b8 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Computer won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
	}
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
		b6 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Computer won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
	}
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
		b5 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Computer won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
	}
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
		b5 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Computer won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
		b5 == '0') && (b8 == '0' || b8 == '0')) {
		document.getElementById('print')
			.innerHTML = "Computer won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
		b5 == '0') && (b6 == '0' || b6 == '0')) {
		document.getElementById('print')
			.innerHTML = "Computer won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	// Checking of Computer finsh
	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Computer Turn";
		}
	}
}

// Function to reset game
function myfunc_2() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
play = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
function myfuncfill(ind)
{
  idt = "b" + ind;
  if (flag == 1) {
		document.getElementById(idt).value = "X";
		document.getElementById(idt).disabled = true;
    flag = 0;
    play[ind - 1] = 1;
    computer_move();
	}
	else {
		document.getElementById(idt).value = "0";
    document.getElementById(idt).disabled = true;
    play[ind - 1] = 0;
		flag = 1;
	}
}
const check_line = (a, b) => {
  return (play[a] == play[b] && play[a] == 0);
};
const check_line1 = (a, b) => {
  return (play[a] == play[b] && play[a] == 1);
};
function computer_move() {
  if (Math.min(...play) != -1)
    return;
  ind = find_move();
  console.log(ind);
  myfuncfill(ind + 1);
}
function find_move() {

  for (i = 0; i < 9; i += 3) {
    if (check_line(i, i + 1) && play[i + 2] == -1) {
      return i + 2;
    }
    if (check_line(i + 1, i + 2) && play[i] == -1){
      return i;
    }
    if (check_line(i, i + 2) && play[i + 1] == -1) {
      return i + 1;
    }
  }
  for (i = 0; i < 3; i++) {
    if (check_line(i, i + 3) && play[i + 6] == -1) {
      return i + 6;
    }
    if (check_line(i + 3, i + 6) && play[i] == -1) {
      return i;
    }
    if (check_line(i, i + 6) && play[i + 3] == -1) {
      return i + 3;
    }
  }
  if (check_line(0, 4) && play[8] == -1) {
    return 8;
  }
  if (check_line(4, 8) && play[2] == -1) {
    return 2;
  }
  if (check_line(0, 8) && play[4] == -1) {
    return 4;
  }
  if (check_line(2, 4) && play[6] == -1) {
    return 6;
  }
  if (check_line(4, 6) && play[2] == -1) {
    return 2;
  }
  if (check_line(2, 6) && play[4] == -1) {
    return 4;
  }
  for (i = 0; i < 9; i += 3) {
    if (check_line1(i, i + 1) && play[i + 2] == -1) {
      return i + 2;
    }
    if (check_line1(i + 1, i + 2) && play[i] == -1){
      return i;
    }
    if (check_line1(i, i + 2) && play[i + 1] == -1) {
      return i + 1;
    }
  }
  for (i = 0; i < 3; i++) {
    if (check_line1(i, i + 3) && play[i + 6] == -1) {
      return i + 6;
    }
    if (check_line1(i + 3, i + 6) && play[i] == -1) {
      return i;
    }
    if (check_line1(i, i + 6) && play[i + 3] == -1) {
      return i + 3;
    }
  }
  if (check_line1(0, 4) && play[8] == -1) {
    return 8;
  }
  if (check_line1(4, 8) && play[2] == -1) {
    return 2;
  }
  if (check_line1(0, 8) && play[4] == -1) {
    return 4;
  }
  if (check_line1(2, 4) && play[6] == -1) {
    return 6;
  }
  if (check_line1(4, 6) && play[2] == -1) {
    return 2;
  }
  if (check_line1(2, 6) && play[4] == -1) {
    return 4;
  }
  left = [];
  for (i = 0; i < 9; i += 1){
    if (play[i] == -1)
    {
      left.push(i);
    }
  }
  k = left.length;
  rand = Math.floor(Math.random() * k);
  return left[rand];
}
