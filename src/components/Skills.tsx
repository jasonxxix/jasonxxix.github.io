import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import CardItem from './CardItem';


export default function Skills() {
    return (
    <div className='bg-gradient-to-r from-lime-200 to-sky-500 dark:to-sky-950'>
        <div className="py-4 px-6 max-w-prose m-auto">
            <h1 className="text-2xl border-b-2 border-emerald-400">Skills</h1>
            <div className='flex flex-wrap'>
                <CardItem title='Web Front End' skillList={['ReactJs', 'NextJs', 'VueJs', 'Gatsby']}/>
                <CardItem title='Back End' skillList={['NodeJs', 'AWS', 'Kannel']}/>
                <CardItem title='Javascript Testing Framework' skillList={['Jest', 'Supertest', 'Mockinggoose']} />
                <CardItem title='Mobile Development' skillList={['Android Java','NDK','Gradle','Espresso']}/>
                <CardItem title='AWS Services' skillList={['Lambda', 'API Gateway', 'S3 Bucket', 'Cloud Search', ]} />
                <CardItem title='Version Control' skillList={['GitHub', 'Jira', 'Code Review', 'Documentation']}/>
                <CardItem title='Database' skillList={['MongoDb', 'MySQL', 'Redshift', 'MicrosoftSQL', 'PostgresSQL']} />
                <CardItem title='Programming Language' skillList={['HTML','CSS', 'Javascript','Python','Java','C++', 'R']}/>
            </div>
        </div>
    </div>
    )
}