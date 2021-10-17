export const SiteHeader = ({}) => {
    return <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
            <img className="w-full h-full object-cover"
                 src="https://myemulator.online/wp-content/uploads/2017/11/super-mario-64.jpg"
                 alt=""/>
            <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true"/>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-red-300 sm:text-5xl lg:text-6xl">SM64 Tasks</h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                SM64 Tasks are small esoteric challenges that test your speedrunning mettle. You'll create routes,
                explore obscure parts of stages, optimize movement, and more.
            </p>
        </div>
    </div>
};
