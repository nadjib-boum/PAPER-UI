import type { RenderClippinngOptions, SVGPath1Props } from "./SVGPaths.types";

function renderClipping (options: RenderClippinngOptions) {
  let { upper, lower, lineHeight, radius, height, width } = options;
  let x = upper[0];
  let y = lineHeight;
  let uBlocks = '';
  for (let u = 0; u < upper.length; u++) {
    uBlocks += `
        L${x},${y}
        A${radius},${radius} 0, 0 0, ${x - radius},${y + radius} 
        L${x - radius},${y + radius + (lineHeight - radius * 2)}
        A${radius},${radius} 0, 0 1, ${x - (radius * 2)},${y + lineHeight}
      `;
    x = upper[u + 1] - (radius * 2);
    y = y + lineHeight;
  }
  return (
    `M${width},${height / 2} M${width},${radius + lineHeight}
    A${radius},${radius} 0,0 0, ${width - radius} ${lineHeight}
    ${uBlocks}
    L${radius},${y}
    A${radius},${radius} 0, 0 0, 0,${y + radius}
    L0,${lower[1] - radius}
    A${radius},${radius} 0, 0 0, ${radius},${lower[1]}
    L${lower[0]},${lower[1]}
    A${radius},${radius} 0, 0 1, ${lower[0] + radius},${lower[1] + radius}
    L${lower[0] + radius},${height - radius}
    A${radius},${radius} 0, 0 0,${lower[0] + (radius * 2)},${height} 
    L${width - radius},${height}
    A${radius},${radius} 0, 0 0, ${width},${height - radius}
    Z` // L${width},${radius + lineHeight}
  );
}
 

export function SVGPath1 ({options, id}: SVGPath1Props) {
  return (
    <svg height={options.height} width={options.width}>
      <defs>
        <clipPath id={'svg_id_' + id}>
            <path d={renderClipping(options)} />
        </clipPath>
      </defs>
    </svg>
  );
}