import { useState } from "react";
import { SectionTitle } from "../ui/section-title";
import { SectionBody } from "../ui/section-body";
import { GlossyButton } from "../ui/button";
import { NotifBox } from "../ui/notif-box";
import { Divider } from "../ui/divider";
import { StatusDot } from "../ui/status-dot";

export function ContactTab() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div>
      <SectionTitle>✉ Send Me a Message</SectionTitle>
      <SectionBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Form */}
          <div>
            {(["name", "email", "subject"] as const).map((field) => (
              <div key={field} className="mb-1.5">
                <label className="mb-0.5 block text-[11px] font-bold text-blue-900">
                  {field === "name" ? "Your Name" : field === "email" ? "Email Address" : "Subject"}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  placeholder={
                    field === "name" ? "Enter your name..." :
                    field === "email" ? "your@email.com" :
                    "Project inquiry, collaboration..."
                  }
                  className="w-full rounded-sm border border-blue-300/50 bg-linear-to-b from-white to-blue-50 px-2 py-1.5 font-[Trebuchet_MS,sans-serif] text-[11px] text-blue-900 shadow-[inset_0_1px_2px_rgba(0,0,80,0.1)] outline-none transition-all focus:border-blue-400/70 focus:shadow-[inset_0_1px_2px_rgba(0,0,80,0.1),0_0_0_2px_rgba(80,160,255,0.25)]"
                />
              </div>
            ))}
            <div className="mb-1.5">
              <label className="mb-0.5 block text-[11px] font-bold text-blue-900">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full resize-y rounded-sm border border-blue-300/50 bg-linear-to-b from-white to-blue-50 px-2 py-1.5 font-[Trebuchet_MS,sans-serif] text-[11px] text-blue-900 shadow-[inset_0_1px_2px_rgba(0,0,80,0.1)] outline-none transition-all focus:border-blue-400/70 focus:shadow-[inset_0_1px_2px_rgba(0,0,80,0.1),0_0_0_2px_rgba(80,160,255,0.25)]"
              />
            </div>
            <div className="flex gap-1.5">
              <GlossyButton variant="blue" onClick={handleSend}>📨 Send Message</GlossyButton>
              <GlossyButton variant="silver" onClick={() => setForm({ name: "", email: "", subject: "", message: "" })}>🗑 Clear</GlossyButton>
            </div>
            {sent && (
              <div className="mt-2">
                <NotifBox variant="green">
                  <span>✅</span>
                  <span><strong>Message Sent!</strong> Thank you for reaching out. I`ll get back to you within 24 hours! 😊</span>
                </NotifBox>
              </div>
            )}
          </div>

          {/* Contact info */}
          <div>
            <SectionTitle className="mb-2">Contact Info</SectionTitle>
            <div
              className="mb-2.5 rounded-lg border border-blue-200/30 bg-white/50 p-3"
            >
              {[
                { icon: "", title: "Email", value: "ramadinaalmuthazam@gmail.com" },
                { icon: "", title: "Website", value: "www.ramarfx.my.id" },
                { icon: "", title: "Location", value: "DKI Jakarta, Indonesia" },
              ].map(({ icon, title, value }, i, arr) => (
                <div key={title}>
                  <div className="flex items-center gap-2 py-1.5 text-[11px]">
                    <span className="text-base">{icon}</span>
                    <div>
                      <p className="font-bold text-blue-900">{title}</p>
                      <p className="text-blue-600">{value}</p>
                    </div>
                  </div>
                  {i < arr.length - 1 && <Divider />}
                </div>
              ))}
            </div>

            <SectionTitle className="mb-1.5">Availability</SectionTitle>
            <div
              className="rounded-lg border border-green-400/30 p-2.5"
              style={{ background: "linear-linear(180deg, rgba(100,220,100,0.2), rgba(60,180,60,0.12))" }}
            >
              <p className="flex items-center gap-1.5 text-[11px] font-bold text-green-900">
                <StatusDot /> Available for new projects!
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-green-800">
                Mon–Fri: 9:00 AM – 6:00 PM WIB<br />
                Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </SectionBody>
    </div>
  );
}