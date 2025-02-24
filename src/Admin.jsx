import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from "@mui/material";

function Admin() {
    const registration = useSelector((state) => state.registration.users) || [];

    return (
        <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, p: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Registered Users
            </Typography>

            <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#1976d2" }}>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {registration.length > 0 ? (
                            registration.map((user, index) => (
                                <TableRow key={index} sx={{ "&:nth-of-type(even)": { backgroundColor: "#f5f5f5" } }}>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={2} align="center">
                                    No registered users yet
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Admin;
