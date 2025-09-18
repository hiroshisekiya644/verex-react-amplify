import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import SignalMetrics from "@/components/SignalMetrics";
import SearchHistory from "@/components/SearchHistory";
import ContactPlain from "@/components/ContactPlain";

export default function Home() {
    return (
        <main>
            <div className="container mx-auto">
                <Header />
                <SearchBox />
                <div className="grid grid-cols-12 gap-10 mb-10">
                    <div className="col-span-5">
                        <SignalMetrics />
                    </div>
                    <div className="col-span-7">
                        <SearchHistory />
                    </div>
                </div>
                <ContactPlain />
            </div>
        </main>
    );
}
