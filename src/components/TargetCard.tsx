const TargetCard = () => {
  return (
    <div className="max-w-96 bg-white shadow-lg border border-blue/10 p-6 text-white min-h-full rounded-lg  pr-4 pl-4 w-100">
      <div className="min-h-full gap-4 flex flex-col items-center">
        <img src="https://i.pinimg.com/564x/93/5a/1b/935a1bf4de9d782e2b85deea806d9e7f.jpg" alt="cover" className="rounded-lg w-full h-65 object-cover mx-auto" />
        <p className="text-blue flex flex-col gap-1 font-light bg-black/10 p-2 rounded-md">
          <span className="font-bold">Lorem Resto</span>
          <span>A federated system, often referred to as a federated architecture.</span>
        </p>
      </div>
    </div>
  );
};

export default TargetCard;
