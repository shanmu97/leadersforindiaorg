import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom office marker icon
const officeIcon = new L.Icon({
  iconUrl:
    "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function Office() {
  // Coordinates for the office location in Hyderabad (more precise coordinates)
  const officeLocation = [17.4516, 78.3866]; // Coordinates for Udaya Elite, Cyberabad area
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Initialize the map
      mapInstance.current = L.map(mapRef.current).setView(officeLocation, 16);

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);

      // Create popup content
      const popupContent = `
        <div class="text-center p-2">
          <h3 class="font-semibold text-gray-900 mb-2">Leaders for India</h3>
          <p class="text-sm text-gray-600 mb-2">
            401, Udaya Elite, adjacent to Cyberabad Commissionarate
          </p>
          <p class="text-sm text-gray-600 mb-2">
            Telecom Nagar, Hyderabad, Telangana 500032
          </p>
          <div class="mt-3 pt-2 border-t border-gray-200">
            <p class="text-xs text-gray-500 mb-1">📞 8977003689</p>
            <p class="text-xs text-gray-500 mb-2">✉️ info@watteyshot.com</p>
          </div>
        </div>
      `;

      // Add marker with popup
      L.marker(officeLocation, { icon: officeIcon })
        .addTo(mapInstance.current)
        .bindPopup(popupContent);
    }

    // Cleanup function
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen mt-10">
      <div className="container mx-auto px-4 py-8">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Office Information */}
          <div  className="mt-10">
            <div className="space-y-1">

              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our office</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-5">
            Join us at our exclusive community, where investors unite to create
            wealth and achieve high returns through smart investments.
          </p>
                <h3 className="text-lg font-semibold text-gray-900 mt-4">
                  Address
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  401, Udaya Elite, adjacent to Cyberabad Commissionarate,
                  Telecom Nagar, Hyderabad, Telangana 500032
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mt-4">
                  Reach us at:
                </h3>
                <p className="text-gray-700 mb-2">Email: info@watteyshot.com</p>
                <p className="text-gray-700">Phone: 8977003689</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mt-4">
                  Hours
                </h3>
                <p className="text-gray-700">9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className=" overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Find Us Here
              </h3>
              <p className="text-sm text-gray-600">
                Click the marker for more details
              </p>
            </div>
            <div className="h-96 w-full">
              <div
                ref={mapRef}
                className="h-full w-full z-0"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Office;
