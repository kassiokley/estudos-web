const arrays = [];

for (var i = 0; i < 10; i++) {
  arrays.push(function() {
    console.log(i);
  });
}

arrays[2]();
arrays[8]();