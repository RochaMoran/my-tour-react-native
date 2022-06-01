export const defaultCreateSite = (site:any) => {
    const tempSite = {
      image: {
        value: {
          uri: site?.imgUrl || "",
          type: "",
          name: "",
        },
        error: "",
      },
      name: {
        value: site?.name || "",
        error: "",
      },
      country: {
        value: site?.country || "",
        error: "",
      },
      vaccineCovid: {
        value: site?.covidMeasures.vaccineCovid || false,
        error: "",
      },
      faceMask: {
        value: site?.covidMeasures.faceMask || false,
        error: "",
      },
      statusOpen: {
        value: site?.covidMeasures.statusOpen || false,
        error: "",
      },
      openTimes: {
        value: site?.attentionSchedules.open || "",
        error: "",
      },
      closeTimes: {
        value: site?.attentionSchedules.close || "",
        error: "",
      },
      description: {
        value: site?.description || "",
        error: "",
      },
      _id: site?._id || null
    }

  return tempSite
}