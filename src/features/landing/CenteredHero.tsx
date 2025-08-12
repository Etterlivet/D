export const CenteredHero = (props: {
  banner: React.ReactNode;
  title: React.ReactNode;
  description: string;
  buttons: React.ReactNode;
}) => (
  <>
    {/* removed   <div className="text-center">{props.banner}</div>    */}

    <div className="mt-3 text-center text-5xl font-heading tracking-tight">
      {props.title}
    </div>

    <div className="mx-auto mt-5 font-[EAU] max-w-screen-md text-center text-xl text-muted-foreground">
      {props.description}
    </div>

    <div className="mt-8 flex font-[EAU] justify-center gap-x-5 gap-y-3 max-sm:flex-col">
      {props.buttons}
    </div>
  </>
);
