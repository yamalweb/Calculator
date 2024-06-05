import React, { useState, useEffect } from 'react'
// import { useStyles } from './theme'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { events, point } from './hooks'
import theme from './theme'

const Calculator = () => {
    // const { ObjectsBuilding, Up, Down } = props
    const building = [
        {
            id: 1,
            name: 'Объекты жилого назначения 80 баллов',
            value: 80,
        },
        {
            id: 2,
            name: 'Объекты нежилого назначения 60 баллов',
            value: 60,
        },
        {
            id: 3,
            name: 'Линейные объекты 40 баллов',
            value: 40,
        },
    ]
    const up = [
        {
            id: 1,
            name: 'Площадь объекта капитального строительства более 40 000 кв. м',
            object: 1,
            value: 5,
            disabled: 1,
        },
        {
            id: 2,
            name: 'Высота объекта капитального строительства от 75 до 100 м',
            object: 1,
            value: 5,
            disabled: 3,
        },
        {
            id: 3,
            name: 'Наличие в проекте встроенно-пристроенного социального объекта',
            object: 1,
            value: 5,
            disabled: 0,
        },
        {
            id: 4,
            name: 'Наличие в проекте подземной автостоянки',
            object: 1,
            value: 5,
            disabled: 0,
        },
        {
            id: 5,
            name: 'Строительство, реконструкция объекта капитального строительства, если площадь объекта превышает 70 000 кв. м.',
            object: 2,
            value: 5,
            disabled: 7,
        },
        {
            id: 6,
            name: 'Наличие заглубления подземной части объекта от 10 до 15 м.',
            object: 2,
            value: 5,
            disabled: 0,
        },
        {
            id: 7,
            name: 'Площадь участка под строительство превышает 40 Га',
            object: 2,
            value: 5,
            disabled: 0,
        },
        {
            id: 8,
            name: 'Высота объекта капитального строительства от 80 до 100 м.',
            object: 2,
            value: 5,
            disabled: 10,
        },
        {
            id: 9,
            name: 'Объекты социального назначения (школы, детские сады, госпитали, поликлиники, перинатальные центры, институты, колледжи, интернаты, дворцы спорта, физкультурно-оздоровительные комплексы, ледовые дворцы, стадионы, пансионаты, санатории, объекты науки, музеи, театры, киноконцертные залы, культовые здания)',
            object: 2,
            value: 5,
            disabled: 0,
        },
        {
            id: 10,
            name: 'Строительство, реконструкция объекта капитального строительства, функциональное назначение которого предполагает одновременное пребывание более 1500 человек',
            object: 2,
            value: 5,
            disabled: 0,
        },
        {
            id: 11,
            name: 'Протяженность свыше 4 000 м.',
            object: 3,
            value: 5,
            disabled: 13,
        },
        {
            id: 12,
            name: 'Строительство, реконструкция объекта капитального строительства, включающее в себя строительство мостов и/или тоннелей и/или путепроводов',
            object: 3,
            value: 15,
            disabled: 0,
        },
        {
            id: 13,
            name: 'Продолжительность строительства, реконструкции по проекту более 1,5 лет',
            object: 3,
            value: 5,
            disabled: 14,
        },
        {
            id: 14,
            name: 'Наличие в проекте решений по выносу, перекладке более 4 видов инженерных сетей',
            object: 3,
            value: 5,
            disabled: 15,
        },
    ]
    const down = [
        {
            id: 1,
            name: 'Площадь объекта капитального строительства менее 5000 кв. м.',
            object: 1,
            value: 5,
            disabled: 1,
        },
        {
            id: 2,
            name: 'Отсутствие лифтового оборудования',
            object: 1,
            value: 5,
            disabled: 0,
        },
        {
            id: 3,
            name: 'Этажность 6 и менее этажей',
            object: 1,
            value: 5,
            disabled: 2,
        },
        {
            id: 4,
            name: 'Продолжительность строительства менее 1 года',
            object: 1,
            value: 5,
            disabled: 0,
        },
        {
            id: 5,
            name: 'Отсутствия в проекте строительства магистральных (квартальных) сетей и головных инженерных сооружений',
            object: 1,
            value: 5,
            disabled: 0,
        },
        {
            id: 6,
            name: 'Одновременное отсутствие в проекте систем противодымной вентиляции и автоматического пожаротушения',
            object: 1,
            value: 5,
            disabled: 0,
        },
        {
            id: 7,
            name: 'Площадь объекта менее 5000 кв. м.',
            object: 2,
            value: 5,
            disabled: 5,
        },
        {
            id: 8,
            name: 'Одновременное отсутствие в проекте систем противодымной вентиляции и автоматического пожаротушения',
            object: 2,
            value: 5,
            disabled: 0,
        },
        {
            id: 9,
            name: 'Отсутствие в проекте строительства магистральных (квартальных) сетей и головных инженерных сооружений',
            object: 2,
            value: 5,
            disabled: 0,
        },
        {
            id: 10,
            name: 'Высота объекта капитального строительства менее 12 м.',
            object: 2,
            value: 5,
            disabled: 8,
        },
        {
            id: 11,
            name: 'Отсутствие в проекте газораспределительных сетей и газопотребляющего оборудования',
            object: 2,
            value: 5,
            disabled: 0,
        },
        {
            id: 12,
            name: 'Одновременное отсутствие в проекте лифтового и грузоподъемного оборудования, за исключением подъемников для МГН',
            object: 2,
            value: 5,
            disabled: 0,
        },
        {
            id: 13,
            name: 'Протяженность объекта менее 500 м',
            object: 3,
            value: 5,
            disabled: 11,
        },
        {
            id: 14,
            name: 'Продолжительность строительства, реконструкции по проекту менее 6 месяцев',
            object: 3,
            value: 5,
            disabled: 13,
        },
        {
            id: 15,
            name: 'Отсутствие в проекте решений по выносу, перекладке инженерных сетей, переносу инженерных сооружений',
            object: 3,
            value: 5,
            disabled: 14,
        },
        {
            id: 16,
            name: 'Строительство объекта сельского хозяйства и/или промышленности и/ или импортозамещающего производства, на которых создаются рабочие места',
            object: 2,
            value: 10,
            disabled: 0,
        },
    ]
    // const building = ObjectsBuilding.data
    // const up = Up.data
    // const down = Down.data
    const [objectsBuilding, setObjectsBuilding] = useState()
    const [objectsUp, setObjectsUp] = useState()
    const [objectsDown, setObjectsDown] = useState()
    const [object, setObject] = useState(0)
    const [points, setPoints] = useState(0)
    const [selectedUp, setSelectedUp] = useState([])
    const [selectedDown, setSelectedDown] = useState([])
    const [disabledUp, setDisabledUp] = useState([])
    const [disabledDown, setDisabledDown] = useState([])
    const classes = theme

    const setPoint = (value) => {
        const objectValue = objectsBuilding[value - 1].value
        switch (value) {
            case 0:
                setPoints(0)
                break
            case 1:
                setPoints(objectValue)
                break
            case 2:
                setPoints(objectValue)
                break
            case 3:
                setPoints(objectValue)
                break
        }
    }
    const objectChange = (event) => {
        const value = event.target.value
        setObject(value)
        setSelectedUp([])
        setSelectedDown([])
        setDisabledUp([])
        setDisabledDown([])
        setPoint(value)
    }
    const upChange = (id, point, disabled) => {
        if (selectedUp?.indexOf(id) > -1) {
            const selected = selectedUp.filter((item) => {
                return item !== id
            })
            setSelectedUp(selected)
            const enabled = disabledDown.filter((item) => {
                return item !== disabled
            })
            setDisabledDown(enabled)
            setPoints(points - point)
        } else {
            setSelectedUp([...selectedUp, id])
            setDisabledDown([...disabledDown, disabled])
            setPoints(points + point)
        }
    }
    const downChange = (id, point, disabled) => {
        if (selectedDown?.indexOf(id) > -1) {
            const selected = selectedDown.filter((item) => {
                return item !== id
            })
            setSelectedDown(selected)
            const enabled = disabledUp.filter((item) => {
                return item !== disabled
            })
            setDisabledUp(enabled)
            setPoints(points + point)
        } else {
            setSelectedDown([...selectedDown, id])
            setDisabledUp([...disabledUp, disabled])
            setPoints(points - point)
        }
    }

    useEffect(() => {
        setObjectsBuilding(building)
        setObjectsUp(up)
        setObjectsDown(down)
    }, [building])

    return (
        <div className={classes.main}>
            <FormControl className={classes.formControl}>
                <InputLabel id="select-object">
                    Объекты капитального строительства
                </InputLabel>
                <Select
                    labelId="select-object"
                    value={object}
                    onChange={objectChange}
                >
                    {objectsBuilding &&
                        objectsBuilding.map((item) => (
                            <MenuItem value={item.id} key={item.id}>
                                {item.name}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>
            {object !== 0 && (
                <div className={classes.cards}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title}>
                                Повышающие критерии
                            </Typography>
                            <FormGroup>
                                {objectsUp &&
                                    objectsUp.map(
                                        (item) =>
                                            item.object === object && (
                                                <div
                                                    className={classes.cardItem}
                                                    key={item.id}
                                                >
                                                    <FormControlLabel
                                                        className={
                                                            classes.label
                                                        }
                                                        key={item.id}
                                                        control={
                                                            <Checkbox
                                                                color="primary"
                                                                className={
                                                                    classes.checkbox
                                                                }
                                                                checked={
                                                                    selectedUp.indexOf(
                                                                        item.id
                                                                    ) > -1
                                                                }
                                                                onChange={() =>
                                                                    upChange(
                                                                        item.id,
                                                                        item.value,
                                                                        item.disabled
                                                                    )
                                                                }
                                                                disabled={
                                                                    disabledUp.indexOf(
                                                                        item.id
                                                                    ) > -1
                                                                }
                                                            />
                                                        }
                                                        label={item.name}
                                                    />
                                                    <span
                                                        className={classes.red}
                                                    >
                                                        +{item.value}
                                                    </span>
                                                </div>
                                            )
                                    )}
                            </FormGroup>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title}>
                                Понижающие критерии
                            </Typography>
                            <FormGroup>
                                {objectsDown &&
                                    objectsDown.map(
                                        (item) =>
                                            item.object === object && (
                                                <div
                                                    className={classes.cardItem}
                                                    key={item.id}
                                                >
                                                    <FormControlLabel
                                                        className={
                                                            classes.label
                                                        }
                                                        key={item.id}
                                                        control={
                                                            <Checkbox
                                                                color="primary"
                                                                className={
                                                                    classes.checkbox
                                                                }
                                                                checked={
                                                                    selectedDown.indexOf(
                                                                        item.id
                                                                    ) > -1
                                                                }
                                                                onChange={() =>
                                                                    downChange(
                                                                        item.id,
                                                                        item.value,
                                                                        item.disabled
                                                                    )
                                                                }
                                                                disabled={
                                                                    disabledDown.indexOf(
                                                                        item.id
                                                                    ) > -1
                                                                }
                                                            />
                                                        }
                                                        label={item.name}
                                                    />
                                                    <span
                                                        className={
                                                            classes.green
                                                        }
                                                    >
                                                        -{item.value}
                                                    </span>
                                                </div>
                                            )
                                    )}
                            </FormGroup>
                        </CardContent>
                    </Card>
                </div>
            )}
            {object !== 0 && (
                <div className={classes.points}>
                    <div>Итог расчёта:</div>
                    <div>
                        <span>
                            {Math.floor(points)} {point(Math.floor(points))}
                        </span>{' '}
                        - {Math.floor(points / 10)}{' '}
                        {events(Math.floor(points / 10))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Calculator
