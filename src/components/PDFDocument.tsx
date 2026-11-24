"use client";

import { PDFDownloadLink, PDFViewer, type DocumentProps } from "@react-pdf/renderer";
import { useState, type ReactElement } from "react";
import MyDocument from "./MyDocument";
import PolyvalentDocument from "./PolyvalentDocument";
import "./fonts";

type CvOption = {
  id: string;
  label: string;
  fileName: string;
  render: () => ReactElement<DocumentProps>;
};

const OPTIONS: CvOption[] = [
  { id: "dev-fr", label: "Dev · FR", fileName: "CV-Bryan-Houblon-FR.pdf", render: () => <MyDocument lang="fr" /> },
  { id: "dev-en", label: "Dev · EN", fileName: "CV-Bryan-Houblon-EN.pdf", render: () => <MyDocument lang="en" /> },
  {
    id: "polyvalent",
    label: "Polyvalent · FR",
    fileName: "CV-Bryan-Houblon-Polyvalent.pdf",
    render: () => <PolyvalentDocument />,
  },
];

const PDFDocument = () => {
  const [selectedId, setSelectedId] = useState(OPTIONS[0].id);
  const selected = OPTIONS.find((option) => option.id === selectedId) ?? OPTIONS[0];

  return (
    <div className="flex h-screen flex-col bg-neutral-100">
      <header className="flex items-center gap-3 border-b border-neutral-300 bg-white px-4 py-2 text-sm">
        <div className="flex overflow-hidden rounded border border-neutral-300">
          {OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelectedId(option.id)}
              aria-pressed={option.id === selected.id}
              className={`px-3 py-1 font-medium ${
                option.id === selected.id ? "bg-[#02326e] text-white" : "text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <PDFDownloadLink
          key={selected.id}
          document={selected.render()}
          fileName={selected.fileName}
          className="ml-auto rounded bg-[#02326e] px-3 py-1 font-medium text-white"
        >
          {({ loading }) => (loading ? "Génération…" : "Télécharger le PDF")}
        </PDFDownloadLink>
      </header>
      <PDFViewer key={selected.id} className="w-full flex-1 border-0">
        {selected.render()}
      </PDFViewer>
    </div>
  );
};

export default PDFDocument;
