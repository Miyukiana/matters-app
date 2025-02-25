
<script>
  let scale = 1;
  const zoomIn = () => {
    scale += 0.1;
    document.body.style.transform = `scale(${scale})`;
  };

  const zoomOut = () => {
    if (scale > 0.5) { // Verhindert, dass der Zoom zu klein wird
      scale -= 0.1;
      document.body.style.transform = `scale(${scale})`;
    }
  };

  // EventListener für Tasten zum Zoomen
  window.addEventListener('keydown', (e) => {
    if (e.key === '+') zoomIn();
    if (e.key === '-') zoomOut();
  });
</script>