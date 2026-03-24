interface Props {
  videoId: string;
  title: string;
}

export function LessonPlayer({ videoId, title }: Props) {
  const isPlaceholder = videoId.startsWith('PLACEHOLDER');

  if (isPlaceholder) {
    return (
      <div className="w-full aspect-video bg-charcoal/5 rounded-2xl flex items-center justify-center zen-fade-in">
        <p className="text-ink text-sm font-light">Video coming soon</p>
      </div>
    );
  }

  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden zen-fade-in shadow-sm">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
        loading="lazy"
      />
    </div>
  );
}
