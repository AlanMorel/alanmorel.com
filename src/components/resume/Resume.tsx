import type { Resume } from "@/src/routes/resume.tsx";
import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { ReactElement } from "react";

Font.register({
    family: "Inter",
    fonts: [
        { src: "./fonts/Inter-Regular-400.ttf" },
        {
            src: "./fonts/Inter-Bold-700.ttf",
            fontWeight: "bold"
        },
        {
            src: "./fonts/Inter-Italic-400.ttf",
            fontStyle: "italic"
        }
    ]
});

const styles = StyleSheet.create({
    page: {
        fontFamily: "Inter",
        fontSize: 11,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 36,
        paddingRight: 36
    },
    linksRow: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 12,
        marginBottom: 8
    },
    name: {
        fontSize: 27,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: -6
    },
    skillsText: {
        marginBottom: 4,
        lineHeight: "16px"
    },
    link: {
        color: "#000000",
        textDecoration: "none"
    },
    section: {
        marginBottom: 5
    },
    sectionHeader: {
        fontSize: 12,
        fontWeight: "bold",
        textTransform: "uppercase",
        borderBottomWidth: 1,
        borderBottomColor: "#cbd5e1",
        paddingBottom: 4,
        marginBottom: 6
    },
    eventRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4
    },
    eventLeft: {
        fontWeight: "bold",
        fontSize: 11
    },
    eventSubLeft: {
        fontStyle: "italic",
        fontSize: 11
    },
    eventDate: {
        fontWeight: "bold",
        fontSize: 11
    },
    bulletRow: {
        flexDirection: "row",
        lineHeight: "17px"
    },
    bulletChar: {
        width: 10,
        flexShrink: 0
    },
    bulletText: {
        flex: 1
    },
    projectName: {
        fontWeight: "bold"
    },
    projectRow: {
        flexDirection: "row",
        lineHeight: "16px",
        marginBottom: 2
    }
});

interface Props {
    resume: Resume;
}

export default function ResumePDF(props: Readonly<Props>): ReactElement {
    const { resume } = props;

    return (
        <Document>
            <Page size="LETTER" style={styles.page}>
                <View style={styles.linksRow}>
                    {resume.links.map(link => (
                        <Link key={link.name} src={link.url} style={styles.link}>
                            {link.name}
                        </Link>
                    ))}
                </View>
                <Text style={styles.name}>{resume.header}</Text>
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Skills</Text>
                    <Text style={styles.skillsText}>{resume.skills.join(", ")}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Experience</Text>
                    {resume.experience.map(exp => (
                        <View key={exp.organization} style={{ marginBottom: 5 }}>
                            <View style={styles.eventRow}>
                                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                                    <Text style={styles.eventLeft}>{exp.organization}</Text>
                                    <Text style={styles.eventSubLeft}>, {exp.title}</Text>
                                </View>
                                <Text style={styles.eventDate}>{exp.date}</Text>
                            </View>
                            {exp.achievements.map(achievement => (
                                <View key={achievement} style={styles.bulletRow}>
                                    <Text style={styles.bulletChar}>{"• "}</Text>
                                    <Text style={styles.bulletText}>{achievement}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Projects</Text>
                    {resume.projects.map(project => (
                        <View key={project.name} style={styles.projectRow}>
                            <Text style={styles.bulletChar}>{"• "}</Text>
                            <Text style={styles.bulletText}>
                                <Text style={styles.projectName}>{project.name}</Text> {project.description}
                            </Text>
                        </View>
                    ))}
                </View>
                <View style={styles.section}>
                    <Text style={[styles.sectionHeader, { marginTop: 6 }]}>Education</Text>
                    {resume.education.map(edu => (
                        <View key={edu.university}>
                            <View style={styles.eventRow}>
                                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                                    <Text style={styles.eventLeft}>{edu.university}</Text>
                                    <Text style={styles.eventSubLeft}>, {edu.college}</Text>
                                </View>
                            </View>
                            <Text>{edu.description}</Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
}
