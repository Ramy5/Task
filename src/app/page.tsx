export default function Home() {
  return (
    <div className="global-bg relative content-height rounded-4xl readex-font text-white p-6 md:p-8 xl:p-10">
      <h1>Privacy Policy</h1>

      <div className="w-full h-full absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
        <div className="relative inline-block">
          <p className="uppercase font-semibold absolute left-4 -top-3 -translate-y-1/2 text-sm ">
            THE
          </p>
          <p className="uppercase font-semibold text-3xl sm:text-4xl px-4">
            TRAVLAB LEGAL
          </p>
        </div>

        <p className="mt-8 text-sm sm:text-base max-w-xl">
          The information provided here is for Travlab customers and users who
          have questions about our terms, policies, intellectual property, and
          compliance.
        </p>
      </div>
    </div>
  );
}
