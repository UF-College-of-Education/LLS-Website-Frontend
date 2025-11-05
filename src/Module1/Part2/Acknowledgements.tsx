
export default function Acknowledgements() {
    const sections = [
        {
            title: 'Advisory Board',
            names: [
                'Kennan DeGruccio, MSW',
                'Mollie R. Canzona, PhD',
                'Meghan McGrath MSN, RN, AGACNP',
                'Diana Rosario Flynn, MAOM',
                'Elisa Weiss, PhD',
                'Maria Sae-Hau, PhD',
            ],
        },
        {
            title: 'E-Learning Experience Production',
            names: [
                'Jason Dean Arnold, EdD',
                'Domenic Durante, MAE',
                'Ian Clontz',
                'Erin Hardin',
                'Kayla Sharp',
                'Durga Abhiram Gorle',
            ],
        },
        {
            title: 'Funding Organizations',
            names: ['Blood Cancer United', 'AstraZeneca'],
        },
        {
            title: 'Formative Research Recruitment Support',
            names: ['Blood Cancer United', 'CLL Society'],
        },
        { title: 'Narrator', names: ['Nino Barucci'] },
        {
            title: 'Actors',
            names: [
                'Kennan DeGruccio',
                'Matthew Lindsay',
                'E. Stanley Richardson',
                'Cristina Palacio',
                'Grace DeGruccio',
            ],
        },
        {
            title: 'Voice Actors',
            names: [
                'Elizabeth Saydah',
                'Samir Goel',
                'Rae Bael',
                'Anita Thomas',
                'Marvin Blandon',
                'Genaro Vasquez',
                'Junko Cheng',
                'Kelly LaBrecque',
            ],
        },
        {
            title: 'Project Management for Program Adaptation',
            names: [
                'Emma G. Bryan, MS',
                'Tyler S. Nesbit, PhD',
                'Kelsey Lunsford, PhD',
                'Emily Palmer, MPH',
            ],
        },
    ]

    return (
        <div className="w-full text-center" style={{ textAlign: 'center', lineHeight: 1.4 }}>
            <h1 style={{ marginBottom: 12 }}>Acknowledgements</h1>
            <div style={{ display: 'inline-block', textAlign: 'center' }}>
                {sections.map((section) => (
                    <section key={section.title} style={{ marginBottom: 18 }}>
                        <div style={{ fontWeight: 700 }}>{section.title}</div>
                        <div>
                            {section.names.map((name, i) => (
                                <div key={i} style={{ fontWeight: 400, marginTop: 4 }}>
                                    {name}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}