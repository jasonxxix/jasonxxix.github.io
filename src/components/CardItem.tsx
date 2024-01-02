
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';


export default function CardItem(props: { title: string, skillList: string[] }) {
    const { title, skillList } = props;
    return (
    <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className='list-disc pl-5'>
                {skillList.map((skill)=>(<li key={skill}>{skill}</li>))}
            </ul>
        </CardContent>
    </Card>)
}