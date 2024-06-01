import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "~/components/ui/accordion"

interface ICustomAccordionProps {
    styles: any
    el: JSX.Element;
    title: string;
    descriprion: string;
}
export default function CustomAccordion({ styles, descriprion, el, title }: ICustomAccordionProps) {
    return (
        <Accordion type="single" collapsible className={styles.accordion}>
            <AccordionItem value="item-1">
                <AccordionTrigger className={styles.accordionTrigger}>
                    <div className={styles.logo}>{el}</div>
                    <div className={styles.accordionInfo}>
                        <h3>{title}</h3>
                        <p>{descriprion}</p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className='px-4'>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
};
