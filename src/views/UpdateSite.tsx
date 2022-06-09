import UpdateOrCreateSite from "../components/organims/updateOrCreateSite";

export default function UpdateSite({route}:any) {

  return (
    <UpdateOrCreateSite siteParam={route.params.siteParam} title="Actualizar Sitio" />
  );
}
