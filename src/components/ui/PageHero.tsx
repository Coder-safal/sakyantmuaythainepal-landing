import Image from "next/image";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
}

export function PageHero({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      <div className="relative container-x pb-12 md:pb-20">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-accent font-semibold">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-base md:text-lg text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
