// Global constants
const canvas = document.getElementById('glCanvas'); // Get the canvas element 
const gl = canvas.getContext('webgl2'); // Get the WebGL2 context

if (!gl) {
    console.error('WebGL 2 is not supported by your browser.');
}

// Set canvas size: 현재 window 전체를 canvas로 사용
canvas.width = 500;
canvas.height = 500;

// Initialize WebGL settings
gl.clearColor(0.1, 0.2, 0.3, 1.0); // Initial clear color (not used, just for setup)

// Start rendering
render();

// Render loop
function render() {
    // Top-left quadrant
    gl.viewport(0, canvas.height / 2, canvas.width / 2, canvas.height / 2);
    gl.scissor(0, canvas.height / 2, canvas.width / 2, canvas.height / 2);
    gl.clearColor(0.1, 0.2, 0.3, 1.0); // Set color for top-left quadrant
    gl.scissor(0, canvas.height / 2, canvas.width / 2, canvas.height / 2);

    gl.clear(gl.COLOR_BUFFER_BIT); // Clear this quadrant
    gl.viewport(canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2);
    gl.scissor(canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2);
    gl.clearColor(0.1, 0.2, 0.3, 1.0); // Set color for top-left quadrant
    gl.clear(gl.COLOR_BUFFER_BIT); // Clear this quadrant
}

// Resize viewport when window size changes
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
    render();
});

