import React, { useState, useEffect } from "react";
import AddLocation from "../AddLocationComponent/AddLocation";
import AddUpdateLocationForm from "../AddUpdateLocationFormComponet/AddUpdateLocationForm";

import LocationTable from "../TableComponent/LocationTable";
import { INITIALDATA, DELETE_ERROR_MSG } from "../../Constants/Constant";
import { useIndexedDB } from "react-indexed-db";

function LocationContainer() {
  const [showAddUpdateForm, setShowAddUpdateForm] = useState(false);
  const [, setErrorCatch] = useState(null);
  const { getAll, deleteRecord } = useIndexedDB("locations");
  const [locationData, setLocationData] = useState([]);
  const [isResponse, setIsResponse] = useState(false);
  const [isError, setisError] = useState(false);
  const [initialFormData, setInitialFormData] = useState(INITIALDATA);

  useEffect(() => {
    getLocationData();
  }, []);

  function getLocationData() {
    getAll().then(
      (locationData) => {
        locationData.forEach((locationData, index) => {
          locationData.serial = index + 1;
        });
        setLocationData(locationData);
        setIsResponse(true);
        setisError(false);
      },
      (error) => {
        setLocationData([]);
        setIsResponse(true);
        setisError(true);
        setErrorCatch(() => {
          throw new Error("This is an error");
        });
      }
    );
  }

  function deleteLocationData(row) {
    if (
      window.confirm(`Are you sure you want to delete:\r ${row.locationName}?`)
    ) {
      deleteRecord(row.id).then(
        (event) => {
          getLocationData();
        },
        (error) => {
          window.alert(DELETE_ERROR_MSG);
        }
      );
    }
  }

  function updateLocationData(row) {
    setInitialFormData(row);
    setShowAddUpdateForm(true);
  }

  return (
    <>
      <AddLocation showAddUpdateForm={() => setShowAddUpdateForm(true)} />

      <AddUpdateLocationForm
        showAddUpdateForm={showAddUpdateForm}
        hideAddUpdateForm={() => setShowAddUpdateForm(false)}
        initialData={() => setInitialFormData(INITIALDATA)}
        formData={initialFormData}
      />
      <LocationTable
        showAddUpdateForm={showAddUpdateForm}
        hideAddUpdateForm={() => setShowAddUpdateForm(false)}
        delete={deleteLocationData}
        update={updateLocationData}
        locationData={locationData}
        isResponse={isResponse}
        isError={isError}
      />
    </>
  );
}

export default LocationContainer;
