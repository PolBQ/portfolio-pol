export default function CoreNode({ data }: any) {
  return (
    <div className="relative flex items-center justify-center">

      {/* OUTER HALO */}

      <div
        className="
          absolute

          w-56
          h-56

          rounded-full

          border
          border-cyan-400/10

          animate-spin
        "
        style={{
          animationDuration: "20s",
        }}
      />

      {/* SECOND HALO */}

      <div
        className="
          absolute

          w-44
          h-44

          rounded-full

          border
          border-cyan-300/10

          animate-spin
        "
        style={{
          animationDirection: "reverse",
          animationDuration: "14s",
        }}
      />

      {/* GLOW */}

      <div
        className="
          absolute

          w-40
          h-40

          rounded-full

          bg-cyan-400/10

          blur-3xl
        "
      />

      {/* CORE */}

      <div
        className="
          relative

          w-32
          h-32

          rounded-full

          border
          border-cyan-400/30

          bg-slate-950/90
          backdrop-blur-xl

          flex
          items-center
          justify-center

          shadow-[0_0_80px_rgba(34,211,238,0.35)]
        "
      >

        {/* INNER CORE */}

        <div
          className="
            absolute

            w-20
            h-20

            rounded-full

            bg-cyan-400/10

            animate-pulse
          "
        />

        {/* TEXT */}

        <div className="relative text-center">

          <p
            className="
              text-cyan-300
              text-lg
              font-semibold
              tracking-[0.2em]
            "
          >
            POL
          </p>

          <p
            className="
              mt-1

              text-[10px]

              uppercase
              tracking-[0.3em]

              text-cyan-500/70
            "
          >
            AI CORE
          </p>

        </div>

      </div>

    </div>
  );
}