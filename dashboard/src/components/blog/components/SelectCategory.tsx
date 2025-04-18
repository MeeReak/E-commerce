import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
interface SelectDemoProps {
    items: string[];
    selectedValue: string;
    onSelectChange: (value: string) => void;
    placeholder: string;
}

export function SelectCategory({
    items,
    selectedValue,
    onSelectChange,
    placeholder
}: SelectDemoProps): JSX.Element {
    return (
        <Select value={selectedValue} onValueChange={onSelectChange}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {items.map((item) => (
                    <SelectItem key={item} value={item}>
                        {item}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
