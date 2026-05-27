const singletonTypes = new Set(["siteSettings", "homepage", "signatureUptimeSolution", "solutionsOverviewPage"]);

function singletonItem(S, { id, type, title }) {
  return S.listItem()
    .id(id)
    .title(title)
    .schemaType(type)
    .child(S.document().id(id).schemaType(type).documentId(id).title(title));
}

export const structure = (S) =>
  S.list()
    .title("NFG Website CMS")
    .items([
      singletonItem(S, {
        id: "signatureUptimeSolution",
        type: "signatureUptimeSolution",
        title: "NFG Signature Uptime Solution"
      }),
      singletonItem(S, {
        id: "homepage",
        type: "homepage",
        title: "Homepage"
      }),
      singletonItem(S, {
        id: "solutionsOverviewPage",
        type: "solutionsOverviewPage",
        title: "Solutions Overview"
      }),
      singletonItem(S, {
        id: "siteSettings",
        type: "siteSettings",
        title: "Site Settings"
      }),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => !singletonTypes.has(item.getId()))
    ]);
