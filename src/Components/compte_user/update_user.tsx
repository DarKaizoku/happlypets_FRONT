export function UpdateUser({ token, user, updateUser, setPage }: any) {
    const eraser = (e: React.BaseSyntheticEvent) => {
        setPage('update');
    };

    return (
        <div>
            <button
                className="btn couleur btn-sm me-3 border border-primary col-6"
                onClick={(e) => eraser(e)}
                type="button"
            >
                Modifier
            </button>
        </div>
    );
}
