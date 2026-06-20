type ContactButtonProps = {
  href?: string;
  label?: string;
};

export function ContactButton({ href = "#contacto", label = "Contact Me" }: ContactButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white outline outline-2 -outline-offset-[3px] outline-white transition hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background:
          "linear-gradient(123deg, #01091f 7%, #001bb6 37%, #212fb0 72%, #0029be 100%)",
        boxShadow:
          "0px 4px 4px rgba(7, 1, 181, 0.25), 4px 4px 12px #2b21b1 inset",
      }}
    >
      {label}
    </a>
  );
}
