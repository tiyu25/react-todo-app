const Header = () => {
    const now = new Date();
    // 연도
    const year = now.getFullYear();
    // 월
    const month = now.toLocaleString('en-US', { month: 'short' })
    // 일
    const date = now.getDate();

    const today = `${month} ${date}, ${year}`;

    return (
        <div>
            <p className="text-gray-9">{today}</p>
            <h1 className="mt-1 font_gmarket font-bold text-3xl">My Tasks</h1>
        </div>
    )
}
export default Header;