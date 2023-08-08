export default function Footer() {
    return (
      <div className={"flex items-center justify-center"}>
        <span className={"slate p-8 font-monospace text-xs lg:text-sm text-center"}>
        Built by{" "} 
          <a
            className={"hover-accent"}
            href={"https://github.com/tonyghouse"}
            target={"_blank"}
            rel="noreferrer"
          >
          Tony Ghouse
          </a>
        </span>
      </div>
    );
  }
  