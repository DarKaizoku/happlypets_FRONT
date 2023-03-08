import { useEffect } from 'react';
import { DataUsertoUpdate } from './dataUsertoUpdate';
const urlDelete = 'http://localhost:8000/users';
export function UpdateUser({ token, user, updateUser, setPage }: any) {
    const eraser = (e: React.BaseSyntheticEvent) => {
        setPage('update');
    };

    return (
        <div>
            <button
                className="btn btn couleur  btn-sm me-3 border border-primary col-4"
                onClick={(e) => eraser(e)}
                type="button"
            >
                Modifier
            </button>
        </div>
    );
}
