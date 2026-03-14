// import { useState } from "react";
// import supportImg from "../assets/support-calm.jpg";

// // ✅ Verified Helplines
// const helplines = [
//   { name: "AASRA (Suicide Prevention, India)", number: "+91-9820466726", link: "tel:+919820466726" },
//   { name: "iCall (Mental Health Support, India)", number: "+91-9152987821", link: "tel:+919152987821" },
//   { name: "Snehi (Counseling, India)", number: "+91-11-23389090", link: "tel:+911123389090" },
// ];

// // ✅ Coping Tips
// const copingTips = [
//   "Take 5 deep breaths and relax.",
//   "Write down your thoughts in your journal.",
//   "Go for a short walk to clear your mind.",
//   "Listen to your favorite soothing music.",
//   "Try a short meditation or mindfulness exercise.",
// ];

// // ✅ Journaling Prompts
// const journalingPrompts = [
//   "What’s one positive thing that happened today?",
//   "Write about something that made you smile recently.",
//   "Describe one challenge you faced and how you overcame it.",
// ];

// // ✅ Verified Counselors / Institutes
// const counselors = [
//   { name: "Psychology Today - Certified Therapists", link: "https://www.psychologytoday.com/in/counselling" },
//   { name: "Mind Matters Clinic (India)", link: "https://mindmattersclinic.com" },
//   { name: "NIMHANS (India) - Clinical Services", link: "https://nimhans.ac.in/clinical-services/" },
// ];

// export default function Support() {

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 transition-all duration-500 p-6">
      
//       {/* Hero / Heading */}
//       <section className="relative bg-blue-100 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-lg mb-10">
//         <div className="flex-1">
//           <h1 className="text-4xl font-bold text-indigo-700 mb-2">Your Safe Haven for Mental Wellness</h1>
//           <p className="text-gray-700 text-lg">
//             Explore verified resources, professional counselors, coping tips, and a calming space for reflection and growth.
//           </p>
//         </div>
//         <div className="flex-1 flex justify-end">
//           <img 
//             src={supportImg} 
//             alt="Calm support" 
//             className="rounded-xl shadow-lg w-full max-w-md h-64 object-contain animate-fadeIn" 
//           />
//         </div>
//       </section>

//       {/* ✅ Disclaimer */}
//       <div className="mb-8 p-4 bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500 rounded shadow">
//         <strong>Disclaimer:</strong> This platform provides general mental wellness support. 
//         It is <u>not</u> a substitute for professional medical advice or treatment. 
//         In case of crisis, contact the helplines immediately.
//       </div>

//       {/* Helplines */}
//       <section className="mb-10">
//         <h2 className="text-2xl font-semibold mb-4">Verified Helplines</h2>
//         <div className="grid md:grid-cols-2 gap-4">
//           {helplines.map((line, idx) => (
//             <a
//               key={idx}
//               href={line.link}
//               className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 text-blue-700 font-medium flex justify-between items-center"
//             >
//               <span>{line.name}</span>
//               <span>{line.number}</span>
//             </a>
//           ))}
//         </div>
//       </section>

//       {/* Counselors / Institutes */}
//       <section className="mb-10">
//         <h2 className="text-2xl font-semibold mb-4">Verified Counselors & Institutes</h2>
//         <div className="grid md:grid-cols-2 gap-4">
//           {counselors.map((c, idx) => (
//             <a
//               key={idx}
//               href={c.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 text-blue-700 font-medium"
//             >
//               {c.name}
//             </a>
//           ))}
//         </div>
//       </section>

//       {/* Coping Tips */}
//       <section className="mb-10">
//         <h2 className="text-2xl font-semibold mb-4">Coping Tips</h2>
//         <div className="grid md:grid-cols-2 gap-4">
//           {copingTips.map((tip, idx) => (
//             <div key={idx} className="p-3 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition">
//               {tip}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Journaling Prompts */}
//       <section className="mb-10">
//         <h2 className="text-2xl font-semibold mb-4">Journaling Prompts</h2>
//         <div className="space-y-4">
//           {journalingPrompts.map((prompt, idx) => (
//             <div key={idx} className="p-3 bg-blue-50 rounded-lg shadow animate-fadeIn">
//               <label className="font-medium">{prompt}</label>
//               <textarea
//                 className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 rows={3}
//                 placeholder="Write your thoughts..."
//               ></textarea>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Motivational Quote */}
//       <section className="mb-10 p-6 bg-blue-50 rounded-lg shadow text-center font-semibold text-blue-700 animate-fadeIn">
//         “You are stronger than you think. Keep going!”
//       </section>
//     </div>
//   );
// }








import supportImg from "../assets/support-calm.jpg";
import { useEffect } from "react";

// ✅ Verified Helplines (3 current & working)
const helplines = [
  {
    id: 1,
    title: "Tele‑MANAS (Govt. National Helpline)",
    number: "14416 / 1800‑891‑4416",
    callLink: "tel:14416",
    website: "https://telemanas.mohfw.gov.in/home",
    description:
      "Government of India operated 24×7 mental health support with trained counsellors for stress, anxiety, crisis calls and emotional listening.",
  },
  {
    id: 2,
    title: "KIRAN Mental Health Helpline",
    number: "1800‑599‑0019",
    callLink: "tel:18005990019",
    website: "https://nimhr.ac.in/",
    description:
      "National toll‑free mental health / rehabilitation helpline supported by Government, available 24×7 with multilingual support.",
  },
  {
    id: 3,
    title: "Vandrevala Foundation Crisis Helpline",
    number: "99996‑66555",
    callLink: "tel:9999666555",
    website: "https://www.vandrevalafoundation.com/",
    description:
      "24×7 NGO emotional support & crisis intervention via call and WhatsApp with trained volunteers in multiple languages.",
  },
];

// ✅ Coping Tips
const copingTips = [
  "Take 5 deep breaths and relax.",
  "Write down your thoughts in your journal.",
  "Go for a short walk to clear your mind.",
  "Listen to your favorite soothing music.",
  "Try a short meditation or mindfulness exercise.",
];

// ✅ Journaling Prompts
const journalingPrompts = [
  "What’s one positive thing that happened today?",
  "Write about something that made you smile recently.",
  "Describe one challenge you faced and how you overcame it.",
];

// ✅ Verified Counselors / Institutes
const counselors = [
  {
    name: "Psychology Today - Certified Therapists",
    link: "https://www.psychologytoday.com/in/counselling",
  },
  { name: "Mind Matters Clinic (India)", link: "https://mindmattersclinic.com" },
  {
    name: "NIMHANS (India) - Clinical Services",
    link: "https://nimhans.ac.in/clinical-services/",
  },
];

export default function Support() {
  useEffect(() => {
  window.scrollTo(0,0);
}, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 transition-all duration-500 p-6">

      {/* Hero / Heading */}
      <section className="relative bg-blue-100 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-lg mb-10">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-indigo-700 mb-2">Your Safe Haven for Mental Wellness</h1>
          <p className="text-gray-700 text-lg">
            Explore verified resources, professional counselors, coping tips, and a calming space for reflection and growth.
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <img
            src={supportImg}
            alt="Calm support"
            className="rounded-xl shadow-lg w-full max-w-md h-64 object-contain"
          />
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mb-8 p-4 bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500 rounded shadow">
        <strong>Disclaimer:</strong> This platform provides general mental wellness support. It is <u>not</u> a substitute for professional medical advice or treatment. In case of crisis, contact the helplines immediately. For emergency help, dial 112 if you are in immediate danger.
      </div>

      {/* Verified Helplines */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Verified Mental Health Helplines</h2>
        <div className="grid md:grid-cols-1 gap-6">
          {helplines.map((line) => (
            <div
              key={line.id}
              className="p-5 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-indigo-700">{line.title}</h3>
              <p className="text-gray-700 mt-1">{line.description}</p>

              {/* Clickable Call */}
              <a
                href={line.callLink}
                className="inline-block mt-3 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                📞 Call: {line.number}
              </a>

              {/* Website Button */}
              <a
                href={line.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block ml-3 mt-3 px-4 py-2 bg-blue-200 text-blue-800 rounded-md hover:bg-blue-300 transition"
              >
                🌐 Visit Website
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Counselors / Institutes */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Verified Counselors & Institutes</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {counselors.map((c, idx) => (
            <a
              key={idx}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 text-blue-700 font-medium"
            >
              {c.name}
            </a>
          ))}
        </div>
      </section>

      {/* Coping Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Coping Tips</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {copingTips.map((tip, idx) => (
            <div key={idx} className="p-3 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition">
              {tip}
            </div>
          ))}
        </div>
      </section>

      {/* Journaling Prompts */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Journaling Prompts</h2>
        <div className="space-y-4">
          {journalingPrompts.map((prompt, idx) => (
            <div key={idx} className="p-3 bg-blue-50 rounded-lg shadow">
              <label className="font-medium">{prompt}</label>
              <textarea
                className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                rows={3}
                placeholder="Write your thoughts..."
              ></textarea>
            </div>
          ))}
        </div>
      </section>

      {/* Motivational Quote */}
      <section className="mb-10 p-6 bg-blue-50 rounded-lg shadow text-center font-semibold text-blue-700">
        “You are stronger than you think. Keep going!”
      </section>
    </div>
  );
}