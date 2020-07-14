import React, { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";
import AddLocationBtn from "../AddLocationBtnComponent/AddLocationBtn";
import { INITIALDATA, DELETE_ERROR_MSG } from "../../Constants/Constant";
import LocationDataTable from "../LocationDataTableComponent/LocationDataTable";
import AddUpdateLocationForm from "../AddUpdateLocationFormComponet/AddUpdateLocationForm";

function LocationContainer() {
  const [, setErrorCatch] = useState(null);
  const [isError, setisError] = useState(false);
  const [isResponse, setIsResponse] = useState(false);
  const [locationData, setLocationData] = useState([]);
  const { getAll, deleteRecord } = useIndexedDB("locations");
  const [showAddUpdateForm, setShowAddUpdateForm] = useState(false);
  const [initialFormData, setInitialFormData] = useState(INITIALDATA);

  useEffect(() => {
    getLocationData();
  }, []);

  function updateFacilityFormData(formData,facilityData) {
    formData.facilityTimes  = facilityData;
    setInitialFormData(formData);
  }

  function updateLocationData(row) {
    setInitialFormData(row);
    setShowAddUpdateForm(true);
  }

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

  return (
    <>
      <AddLocationBtn showAddUpdateForm={() => setShowAddUpdateForm(true)} />

      <AddUpdateLocationForm
        formData={initialFormData}
        showAddUpdateForm={showAddUpdateForm}
        updateFacilityFormData={updateFacilityFormData}
        initialData={() => setInitialFormData(INITIALDATA)}
        hideAddUpdateForm={() => setShowAddUpdateForm(false)}
      />
      <LocationDataTable
        isError={isError}
        isResponse={isResponse}
        locationData={locationData}
        delete={deleteLocationData}
        update={updateLocationData}
        showAddUpdateForm={showAddUpdateForm}
        hideAddUpdateForm={() => setShowAddUpdateForm(false)}
      />
    </>
  );
}

export default LocationContainer;
