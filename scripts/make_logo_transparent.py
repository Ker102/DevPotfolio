
import sys
from PIL import Image, ImageDraw

def make_transparent(input_path, output_path, tolerance=30):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        width, height = img.size
        
        # We will use a flood fill approach to only remove "outside" black
        # Create a mask image initialized to 0 (transparent)
        # We want to identify the background.
        
        # Alternative: Just simple corner analysis.
        # If the pixel at (0,0) is black, assume it's background.
        # We start a queue with (0,0), (0, h-1), (w-1, 0), (w-1, h-1)
        
        # Convert to pixels for easier access
        pixels = img.load()
        
        # Queue for flood fill
        queue = [(0, 0), (0, height-1), (width-1, 0), (width-1, height-1)]
        visited = set(queue)
        
        # Directions: Up, Down, Left, Right
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        
        background_pixels = set()
        
        while queue:
            x, y = queue.pop(0)
            background_pixels.add((x, y))
            
            # Check neighbors
            for dx, dy in directions:
                nx, ny = x + dx, y + dy
                
                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                    r, g, b, a = pixels[nx, ny]
                    # Check if "black enough"
                    if r < tolerance and g < tolerance and b < tolerance:
                        visited.add((nx, ny))
                        queue.append((nx, ny))
        
        # Apply transparency
        for x, y in background_pixels:
            pixels[x, y] = (0, 0, 0, 0)
            
        img.save(output_path, "PNG")
        print(f"Successfully saved transparent image to {output_path}")

    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        # Default paths if not provided
        make_transparent("public/kaelux-icon-new.jpg", "public/kaelux-icon-transparent.png")
    else:
        make_transparent(sys.argv[1], sys.argv[2])
