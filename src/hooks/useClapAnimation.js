import { useState, useEffect } from 'react'
import mojs from '@mojs/core'

export const useClapAnimation = () => {
    const [animationTimeline, setAnimationTimeline] = useState(() => new mojs.Timeline())

    useEffect(() => {
        const tlDuration = 300

        const scaleBtn = new mojs.Html({
            el: '#clap',
            duration: tlDuration,
            scale: { 1.3: 1 },
            easing: mojs.easing.ease.out
        })

        const triangleBurst = new mojs.Burst({
            el: '#clap',
            radius: { 50: 95 },
            count: 5,
            angle: 30,
            children: {
                shape: 'polygon',
                radius: { 6: 0 },
                stroke: 'rgba(254,94,85,0.5)',
                strokeWidth: 2,
                angle: 210,
                delay: 30,
                speed: 0.2,
                duration: tlDuration,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }
        })

        const circleBurst = new mojs.Burst({
            el: '#clap',
            radius: { 50: 75 },
            count: 5,
            angle: 25,
            duration: tlDuration,
            children: {
                shape: 'circle',
                radius: { 3: 0 },
                stroke: 'rgba(51,55,69,0)',
                angle: 210,
                delay: 30,
                speed: 0.2,
                duration: tlDuration,
                easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }
        })

        const countAnimation = new mojs.Html({
            el: '#clapCount',
            opacity: { 0: 1 },
            y: { 0: -30 },
            duration: tlDuration
        }).then({
            opacity: { 1: 0 },
            delay: tlDuration / 2,
            y: -80
        })

        const countTotalAnimation = new mojs.Html({
            el: '#clapCountTotal',
            opacity: { 0: 1 },
            delay: (3 * tlDuration) / 2,
            duration: tlDuration,
            y: { 0: -3 }
        })

        const newAnimationTimeline = animationTimeline.add([
            scaleBtn,
            triangleBurst,
            circleBurst,
            countTotalAnimation,
            countAnimation
        ])

        setAnimationTimeline(newAnimationTimeline)
    }, [])

    return animationTimeline
}
