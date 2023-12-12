const codeToName = (code) => {
  if (!code) return "No Color";

  if (code === "#323233") return "Space Black";
  if (code === "#F9E5C9") return "Sand";
  if (code === "#d4af37") return "Gold";
  if (code === "#d1cddb") return "Silver";
  if (code === "#171E27") return "Space Gray";
  if (code === "#52514f") return "Graphite";
  if (code === "#FF2D55") return "Pink";
  if (code === "#007AFF") return "Blue";
  if (code === "#96ABC0") return "Light Blue";
  if (code === "#215E7C") return "Deep Blue";
  if (code === "#A50011") return "Red";
};

export default codeToName;
