export const styles = {
    container: {
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    modal: {
        width: "33%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightyellow",
        padding: 10,
        border: "5px solid yellow"
    },
    form: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        width: "50%",
        textAlign: "center",
        fontWeight: "bold",
        color: "#618bc7",
        border: "2px solid #618bc7",
        backgroundColor: "#d8f0ff",
        borderRadius: "25px",
        "::placeholder": {
            color: "red"
        }
    },
    button: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        width: "50%",
        marginTop: "10px",
        textAlign: "center",
        fontWeight: "bold",
        color: "#618bc7",
        border: "2px solid #618bc7",
        backgroundColor: "#d8f0ff",
        borderRadius: "25px"
    },
    select: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        width: "50%",
        marginTop: "10px",
        textAlign: "center",
        fontWeight: "bold",
        color: "#618bc7",
        border: "2px solid #618bc7",
        backgroundColor: "#d8f0ff",
        borderRadius: "25px"
    },
    options: {
        textAlign: "center",
    }
}