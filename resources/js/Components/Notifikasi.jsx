import { useEffect, useState } from "react";

const Notifikasi = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timeout); // bersihkan timeout saat unmount
  }, [duration]);

  if (!visible) return null;

  const baseStyle =
    "p-4 rounded-md text-sm mt-4 bg-green-100 text-green-700 border border-green-300";

  return <div className={baseStyle}>{message}</div>;
};

export default Notifikasi;
