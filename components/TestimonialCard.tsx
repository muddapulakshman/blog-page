import { Testimonial } from '@/lib/content';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="card-glass flex min-h-[280px] flex-col justify-between rounded-3xl border border-white/10 p-6 shadow-soft">
      <p className="text-slate-200">“{testimonial.quote}”</p>
      <div className="mt-6 flex items-center gap-4">
        <img src={testimonial.avatar} alt={testimonial.name} className="h-14 w-14 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-sm text-slate-400">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
