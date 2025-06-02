"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete (L.Icon.Default as any).prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const position: [number, number] = [28.41886, 77.06744];

const MapSection = () => (
  <div className="md:w-1/2 rounded-xl overflow-hidden shadow-xl max-h-[40rem] relative z-0">
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "100%", minHeight: "700px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          GCS Law Firm <br />
          836-A, Tower B-3, Spaze I-Tech Park, Sector.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default MapSection;
