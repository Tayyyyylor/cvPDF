"use client";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import type { Lang } from "@/content/cv";
import MyDocument from "./MyDocument";
import "./fonts";

const LANGS: Lang[] = ["fr", "en"];

const PDFDocument = () => {
  const [lang, setLang] = useState<Lang>("fr");

  return (
    <div className="flex h-screen flex-col bg-neutral-100">
      <header className="flex items-center gap-3 border-b border-neutral-300 bg-white px-4 py-2 text-sm">
        <div className="flex overflow-hidden rounded border border-neutral-300">
          {LANGS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setLang(value)}
              aria-pressed={value === lang}
              className={`px-3 py-1 font-medium ${
                value === lang ? "bg-[#02326e] text-white" : "text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              {value.toUpperCase()}
            </button>
          ))}
        </div>
        <PDFDownloadLink
          key={lang}
          document={<MyDocument lang={lang} />}
          fileName={`CV-Bryan-Houblon-${lang.toUpperCase()}.pdf`}
          className="ml-auto rounded bg-[#02326e] px-3 py-1 font-medium text-white"
        >
          {({ loading }) => (loading ? "Génération…" : "Télécharger le PDF")}
        </PDFDownloadLink>
      </header>
      <PDFViewer key={lang} className="w-full flex-1 border-0">
        <MyDocument lang={lang} />
      </PDFViewer>
    </div>
  );
};

export default PDFDocument;
