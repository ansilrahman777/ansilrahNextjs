import Navbar from "../../components/Navbar";

export default function Career() {
  return (
    <div>
      <Navbar />
      <main className="p-10">
        <div className="text-center">
          <h1 className="text-4xl mt-16 font-bold mb-4">Join Our Team</h1>
          <p className="text-gray-600 mb-8">
            We’re always looking for talented individuals to join our growing team.
          </p>
        </div>

        <div className="space-y-6">
          {/* Job 1 */}
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Frontend Developer</h2>
            <p className="text-gray-600">
              Location: Remote | Full-Time
            </p>
            <p className="mt-4">
              We're looking for a talented Frontend Developer to build exceptional
              user experiences.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Apply Now
            </button>
          </div>

          {/* Job 2 */}
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Backend Developer</h2>
            <p className="text-gray-600">
              Location: On-Site (Bangalore) | Full-Time
            </p>
            <p className="mt-4">
              Join our backend team to develop high-performance APIs and services.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Apply Now
            </button>
          </div>

          {/* Job 3 */}
          <div className="border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">UI/UX Designer</h2>
            <p className="text-gray-600">
              Location: Remote | Part-Time
            </p>
            <p className="mt-4">
              Help us design cutting-edge interfaces for our web and mobile apps.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Apply Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
