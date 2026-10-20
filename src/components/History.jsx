function History({ entries, onClear })  {
    return (
        <section className="history">
            <div className="history-header">
                <h2>History</h2>
                <button className="link-btn" onClick={onClear} disabled={entries.length === 0}>
                    Clear
                </button>
            </div>

            {entries.length === 0 ? (
                <p className="history-empty">No clicks yet. Press a button to start.</p>
            ) : (
                <ul className="history-list">
                    {entries.map((entry) => (
                        <li key={entry.id} className="history-item">
                            <span className="log-text">
                                {entry.action} to <strong>{entry.value}</strong>
                            </span>
                            <span className="history-time">{entry.time}</span>

                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default History;