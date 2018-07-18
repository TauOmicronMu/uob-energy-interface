CIRCLES = [];

CIRC_MAX_TXT_SIZE = 48;
CIRC_MIN_TXT_SIZE = 12;
CIRC_TXT_PAD = 25;

CIRC_PAD = 20;

GRADIENT = ["#09FF00", "#2FD700", "#55AF00", "#7B8700", "#A25F00", "#B44C00", "#C73900", "#D92600", "#EC1300", "#FF0000"];

MAX_CO2 = 0.0;

GR = 1.61803398875; // Golden Ratio

kwh_counter = null;
co2_counter = null;
gbp_counter = null;
visualisation_canvas = null;

building_name = null;
building_location = null;
building_energy = null;
building_info_co2 = null;
building_cost = null;

// Offsets to the canvas
x_offset = null;
y_offset = null;


DATA = {
  buildings: [
    {
      name: "Computer Science",
      short_name: "CompSci",
      energy: {
        campus: 100,
        total: 150
      },
      location: "Y9",
    },
    {
      name: "Chemical Engineering",
      short_name: "ChemEng",
      energy: {
        campus: 84,
        total: 102,
      },
      location: "Y11" 
    },
    {
      name: "Haworth",
      short_name: "Haworth",
      energy: {
        campus: 65,
        total: 80
      },
      location: "Y2"
    },
    {
      name: "Guild of Students",
      short_name: "Guild",
      energy: {
        campus: 70,
        total: 84
      },
      location: "O1"
    },
    {
      name: "Estates West",
      short_name: "Estates W",
      energy: {
        campus: 50,
        total: 60
      },
      location: "Y5"
    },
    {
      name: "Aston Webb - Great Hall",
      short_name: "Great Hall",
      energy: {
        campus: 87,
        total: 129
      },
      location: "R6"
    },
    {
      name: "Arts Building",
      short_name: "Arts",
      energy: {
        campus: 122,
        total: 181
      },
      location: "R16"
    },
    {
      name: "Muirhead Tower",
      short_name: "Muirhead",
      energy: {
        campus: 232,
        total: 295
      },
      location: "R21"
    },
    {
      name: "Medical School",
      short_name: "Med School",
      energy: {
        campus: 191,
        total: 238
      },
      location: "B1"
    },
    {
      name: "Poynting Building",
      short_name: "Poynting",
      energy: {
        campus: 189,
        total: 230
      },
      location: "R13"
    },
    {
      name: "St Francis Hall",
      short_name: "Chaplaincy",
      energy: {
        campus: 35,
        total: 70
      },
      location: "O2"
    },
    {
      name: "Main Library",
      short_name: "Library",
      energy: {
        campus: 240,
        total: 367
      },
      location: "R30"
    },
    {
      name: "Nuffield",
      short_name: "Nuffield",
      energy: {
        campus: 87,
        total: 100
      },
      location: "R9"
    },
    {
      name: "Physics West",
      short_name: "Phys West",
      energy: {
        campus: 180,
        total: 213
      },
      location: "R8"
    },
    {
      name: "University Centre",
      short_name: "Uni Centre",
      energy: {
        campus: 223,
        total: 310
      },
      location: "R23"
    },
    {
      name: "Staff House",
      short_name: "Staff House",
      energy: {
        campus: 103,
        total: 121
      },
      location: "R24"
    },
  ]
};

// We scale the radii up exponentially based on total circles, which is
// equivalent to scaling the radii down logarithmically and then linearly
// scaling up
RADIUS_SCALE_FACTOR = 1.03;
RADIUS_SCALE = RADIUS_SCALE_FACTOR ** DATA.buildings.length;

/* 
 * Converts a given energy object into a value of Kg Co2
 */
function energy_to_co2(energy) {
  grid_energy = energy.total - energy.campus;
  grid_co2 = grid_energy * (7.0/20.0);
  campus_co2 = energy.campus * (3.5/20.0);
  total_co2 = grid_co2 + campus_co2;
  return +(total_co2.toFixed(2));
}

/* 
 * Returns the highest value for Co2 for any one building in DATA
 */
function get_max_co2() { 
  highest = 0.0;
  for(i = 0; i < DATA.buildings.length; i++) {
    co2 = energy_to_co2(DATA.buildings[i].energy);
    if( co2 > highest) highest = co2; 
  }
  return highest;
}

/*  
 * Returns the total energy, in kWh for all buildings in DATA
 */
function get_total_energy() {
  total = 0;
  for(i = 0 ; i < DATA.buildings.length ; i++) total += DATA.buildings[i].energy.total;
  return total;
}

/* 
 * Returns the total amount of campus energy used by buildings in DATA.
 */
function get_campus_energy() {
  total = 0;
  for(i = 0; i < DATA.buildings.length ; i++) total += DATA.buildings[i].energy.campus;
  return total;
}

/* 
 * Returns whether two circles intersect
 * Circles:
 *     (x-a)^2 + (y-b)^2 = r1^2
 *     (x-c)^2 + (y-d)^2 = r2^2
 */
function check_circle_intersection(a, b, r1, c, d, r2) {
  // The two circles intersect if the sum of their radii is less than or equal to
  // the distance between their centres
  //x_dist2 = Math.pow(a-c, 2);
  //y_dist2 = Math.pow(b-d, 2);
  dist = Math.sqrt((a-c) * (a-c) + (b-d) * (b-d));
 
  return (r1 + r2) >= dist;
}

/* 
 * Draws a circle with equation: 
 *     (x-a)^2 + (y-b)^2 = r^2
 *   to the visualisation canvas in an unoccupied space
 */
function draw_circle(r, col) {
  // get the height and width of the canvas element
  width = visualisation_canvas.width;
  height = visualisation_canvas.height;
  
  r = r * RADIUS_SCALE;
  
  // Keep choosing a point until one that doesn't intersect is found
  pointChosen = false;
  a = 0;
  b = 0;
  
  // If it's the first circle, choose the centre of the visualisation
  if(CIRCLES.length === 0) {
    a = width/2;
    b = height/2;
    pointChosen = true;
  }
  
  while(!pointChosen) {
    // Choose a random point about the centre of a random
    circ_i = +((Math.random() * (CIRCLES.length - 1)).toFixed(0));
    ia = CIRCLES[circ_i].a;
    ib = CIRCLES[circ_i].b;
    ir = CIRCLES[circ_i].r;
   
    // Choose a random angle, theta, between 0' and 90'
    theta = Math.random() * 90;
   
    rs = ir + r;
    dx = rs * Math.sin(theta);
    dy = rs * Math.cos(theta);
    
    a = ia + dx;
    b = ib + dy;
    
    // check if this intersects with the other circles or the bounding box
    intersects = false;
    
    for(i = 0 ; i < CIRCLES.length ; i++) {
      circle = CIRCLES[i];
      if(check_circle_intersection(a, b, r, circle.a, circle.b, circle.r)) {
        intersects = true;
        break;
      }
    }
    
    if((a - r) < 0 || (b - r) < 0 || (a + r) > width || (b + r) > height) intersects = true;
    
    // if it does, try again!
    if(intersects) continue; 
    
    pointChosen = true;
  }
  
  // draw the circle with centre (a, b) and radius r to the canvas
  ctx = visualisation_canvas.getContext("2d");
  ctx.translate(0.5, 0.5)
  ctx.beginPath();
  ctx.arc(a,b,r,0,2*Math.PI);
  ctx.fillStyle = col;
  ctx.shadowBlur = 5;
  ctx.shadowColor = "black";
  ctx.fill();
  
  CIRCLES.push({
    a: a,
    b: b,
    r: r
  });
}

/* 
 * Fixes the DPI of the canvas to stop blurring.
 */
function fix_dpi() {
  canvas = visualisation_canvas;
  dpi = window.devicePixelRatio;
  //create a style object that returns width and height
  let style = {
    height() {
      return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
    },
    width() {
      return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
    }
  };
//set the correct attributes for a crystal clear image!
  canvas.setAttribute('width', style.width() * dpi);
  canvas.setAttribute('height', style.height() * dpi);
}

function textFits(s, r, size, ctx) {
  ctx.font = size + "px Quicksand";
  w = ctx.measureText(s).width;
  return w <= (2 * r - CIRC_TXT_PAD);
}

function draw_text(a, b, r, building) {
  ctx = visualisation_canvas.getContext("2d");
  
  size = CIRC_MAX_TXT_SIZE;
  text = building.name;
  short = false;
  initials = false;
  
  while(!textFits(text, r, size, ctx)) {
    // change the text appropriately if we can't fit the full name, short name, or initials...
    if(size <= CIRC_MIN_TXT_SIZE) {
      if(short) {
        if(initials) {
          text = "";
          break;
        } 
        initials = true;
        size = CIRC_MAX_TXT_SIZE;
        text = building.location;
        continue;
      }
      short = true;
      size = CIRC_MAX_TXT_SIZE;
      text = building.short_name;
      continue;
    }
    
    // Reduce the size by 2 and try again
    size = size - 2;    
  }
  
  // Now draw the text at the appropriate point
  if(text === "") return -1; // In this case, don't draw anything!
  
  ctx.font = size + "px Quicksand";
  w = ctx.measureText(text).width;
  h = ctx.measureText("M").width; // The height is about equal to the width of a capital M
  
  ctx.fillStyle = "black";
  ctx.shadowBlur=0;
  ctx.fillText(text, a - w/2, b + h/2);
  
}

function update_offset() {
  rect = visualisation_canvas.getBoundingClientRect();
  x_offset = rect.left;
  y_offset = rect.top;
  
}

/* 
 * Update the info panel on the page with the clicked building's info.
 */
function update_info(building) {
  building_name.innerHTML = building.name;
  building_location.innerHTML = building.location;
  building_energy.innerHTML = building.energy.total + " kWh";
  building_info_co2.innerHTML = energy_to_co2(building.energy) + " Kg";
  building_cost.innerHTML = "&pound" + (building.energy.total * 0.1541).toFixed(2);
}

function clear_info() {
    building_name.innerHTML = "";
    building_location.innerHTML = "";
    building_energy.innerHTML = "";
    building_info_co2.innerHTML = "";
    building_cost.innerHTML = "";
}

function handle_click(e) {
  mouse_x = e.clientX - x_offset;
  mouse_y = e.clientY - y_offset;
  
  // Check if the click was in the canvas or not!
  if(mouse_x < 0 || mouse_y < 0 || mouse_x > visualisation_canvas.offsetWidth 
                               || mouse_y > visualisation_canvas.offsetHeight) {
    // For now, just clear the info on the RHS
    clear_info();
    return;
  }
  
  console.log("Click recorded (" + mouse_x + "," + mouse_y + ")");
  
  // See if the click interesects with any of the circles
  for(i = 0; i < CIRCLES.length; i++) {
    // A point (x, y) is within a circle with center (a, b) and radius r iff
    // the distance from (x, y) to (a, b) is less that the radius
    circ = CIRCLES[i];
    x_diff = circ.a - mouse_x;
    y_diff = circ.b - mouse_y;
    if(Math.sqrt(x_diff * x_diff + y_diff * y_diff) <= circ.r) {
      update_info(DATA.buildings[i]);
      return;
    }   
  }
  clear_info();
}

function draw() {
  CIRCLES = [];
  
  fix_dpi();
  update_offset();
  
  width = visualisation_canvas.width;
  height = visualisation_canvas.height;
  
  dimension = Math.min(width, height);
  
  total_energy = get_total_energy();
  
  for(i = 0 ; i < DATA.buildings.length; i++) {
    energy = DATA.buildings[i].energy.total;
    proportion = energy/total_energy;
    radius = dimension * proportion;
    
    building_co2  = energy_to_co2(DATA.buildings[i].energy);
    
    // Calculate the correct colour for the circle
    index = Math.floor(building_co2/(MAX_CO2/GRADIENT.length)) - 1;
    
    draw_circle(radius, GRADIENT[index]);
        
    // Get the new circle
    circ = CIRCLES[CIRCLES.length - 1];
    
    // Draw the appropriate text for the building to the circle
    draw_text(circ.a, circ.b, radius, DATA.buildings[i]);
    
  }
}

function update() { 
  // Get the elements that are going to be modified
  kwh_counter = document.getElementById("kwh-value");
  co2_counter = document.getElementById("co2-value");
  gbp_counter = document.getElementById("gbp-value");
  visualisation_canvas = document.getElementById("visualisation-canvas");
  
  building_name = document.getElementById("info-building-name");
  building_location = document.getElementById("info-building-location");
  building_energy = document.getElementById("info-building-energy");
  building_info_co2 = document.getElementById("info-co2-emissions");
  building_cost = document.getElementById("info-energy-cost");
  
  update_offset();
  
  // TODO: for the real system we need an API call here to populate 'DATA'
  
  // Sort DATA so that it's in descending order of kWh usage
  DATA.buildings.sort((a, b) => {
    return b.energy.total - a.energy.total;
  });
    
  // First, update the total energy/Co2/£ indicators
  // TODO: update this to use the actual metrics, not educated guesses
  total_energy = get_total_energy();
  campus_energy = get_campus_energy(); 
  grid_energy = total_energy - campus_energy;
  total_energy = total_energy.toFixed(2);
  
  // Update MAX_CO2 to be the highest value for Kg Co2 in the DATA
  MAX_CO2 = get_max_co2();
  
  campus_co2 = (campus_energy/20.0)*3.5; // Assuming the campus generator is twice as efficient as the grid
  grid_co2 = (grid_energy/20.0)*7.0; // 20kWh = ~7Kg Co2
  total_co2 = (campus_co2 + grid_co2).toFixed(2);
  
  total_cost = (total_energy * 0.1541).toFixed(2); // UK average is 15.41p/kWh
  
  kwh_counter.innerHTML = total_energy;
  co2_counter.innerHTML = total_co2;
  gbp_counter.innerHTML = total_cost;
  
  // Then update the visualisation
  draw();
}

window.onload = update;
window.onresize = draw;
