import { useState } from "react";

export function useGeolocation(defaultPos = null) {
    const [isLoading, setLoading] = useState(false);
    const [position, setPosition] = useState(defaultPos);
    const [error, setError] = useState(null);

    function getPosition() {
        if (!navigator.geolocation) return setError("Your browser does not support geolocation");

        setLoading(true);
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                })
                setLoading(false);
            },
            (error) => {
                setError(error.message);
                setLoading(false);
            }
        );
    }


    return { isLoading, position, error, getPosition};
}