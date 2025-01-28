import EmblaCarousel from 'embla-carousel'
import { addDotBtnsAndClickHandlers } from './carousel-dot'

const OPTIONS = {
  dragFree: true,
  loop: true,
  autoplay: { delay: 3000 }
}
const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla-viewport')
const dotsNode = emblaNode.querySelector('.embla-dots')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS)

const onNavButtonClick = (emblaApi) => {
  const autoplay = emblaApi?.plugins()?.autoplay
  if (!autoplay) return

  const resetOrStop =
    autoplay.options.stopOnInteraction === false
      ? autoplay.reset
      : autoplay.stop

  resetOrStop()
}

const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode,
  onNavButtonClick
)

emblaApi.on('destroy', removeDotBtnsAndClickHandlers)
