


export const FooterWrapper = ({children}: {children: React.ReactNode}) => {
    return <div className="flex flex-col h-screen w-screen">
        <div className="h-10/12 w-full flex-1">
            {children}
        </div>
        <div className="h-2/12 w-full p-3">
            <a href="https://instagram.com/sideriadsp" target="_blank" className="w-fit inline-block">
                <div className="flex w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
                    <span className="ms-1">@sideriadsp</span>
                </div>
            </a>
        </div>
    </div>
}