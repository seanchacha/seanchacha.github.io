// ...existing code...
export const messages: string[] = [
    "Test Software Engineer @ Impulse Space",
    "Prev @ Venhub, Lead Robotics Software Engineer",
    "Prev @ Second Order Effects, MechE Intern",
    "Prev @ Nventric, Medical Device R&D Intern",
    "Videographer, sometimes"
];

export function typewriter(
    node: Element,
    { speed = 1 }: { speed?: number } = {}
): { duration: number; tick: (t: number) => void } {
    const valid =
        node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
        throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text = node.textContent ?? "";
    // guard against zero speed
    const rate = speed === 0 ? 1 : speed;
    const duration = text.length / (rate * 0.01);

    return {
        duration,
        tick: (t: number) => {
            const i = Math.trunc(text.length * t);
            node.textContent = text.slice(0, i);
        },
    };
}