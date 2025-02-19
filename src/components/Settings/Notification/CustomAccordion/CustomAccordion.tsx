import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "~/components/ui"
import styles from './CustomAccordion.module.scss'

interface ICustomAccordionProps {
    el: JSX.Element;
    title: string;
    descriprion: string;
}
export default function CustomAccordion({ descriprion, el, title }: ICustomAccordionProps) {
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
