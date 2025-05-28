import FormulaireContact from '@/components/formulaireContact';
export default function Contact() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-4xl font-bold">
          Une question? Une demande de devis?
        </h1>
        <p className="p-4 text-lg">
          N'hésitez pas à m'écrire! Je vous récontacterai
        </p>
        <FormulaireContact />
      </div>
    </>
  );
}
